import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import type { SignOptions } from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service";
import { LoginDto, RegisterDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException("Email already registered");
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const workspace = await this.prisma.workspace.create({
      data: {
        name: dto.workspaceName,
        users: {
          create: {
            name: dto.name,
            email: dto.email,
            passwordHash,
            role: "OWNER"
          }
        }
      },
      include: { users: true }
    });

    const user = workspace.users[0];
    return this.issueTokens(user.id, workspace.id, user.email, user.role);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.issueTokens(user.id, user.workspaceId, user.email, user.role);
  }

  private async issueTokens(userId: string, workspaceId: string, email: string, role: string) {
    const payload = { sub: userId, workspaceId, email, role };
    const accessExpiresIn = this.config.get<SignOptions["expiresIn"]>(
      "JWT_ACCESS_EXPIRES_IN",
      "15m" as SignOptions["expiresIn"]
    );
    const refreshExpiresIn = this.config.get<SignOptions["expiresIn"]>(
      "JWT_REFRESH_EXPIRES_IN",
      "7d" as SignOptions["expiresIn"]
    );
    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: this.config.get<string>("JWT_ACCESS_SECRET", "dev-access-secret"),
        expiresIn: accessExpiresIn
      }),
      this.jwt.signAsync(payload, {
        secret: this.config.get<string>("JWT_REFRESH_SECRET", "dev-refresh-secret"),
        expiresIn: refreshExpiresIn
      })
    ]);

    return { accessToken, refreshToken, user: { id: userId, email, role, workspaceId } };
  }
}
