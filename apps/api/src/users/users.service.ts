import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getBootstrapState() {
    const users = await this.prisma.user.count();
    return { hasUsers: users > 0 };
  }
}
