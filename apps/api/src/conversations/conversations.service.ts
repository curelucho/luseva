import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ConversationsService {
  constructor(private readonly prisma: PrismaService) {}

  list(workspaceId?: string) {
    if (!workspaceId) {
      return [];
    }

    return this.prisma.conversation.findMany({
      where: { workspaceId },
      include: {
        contact: true,
        channel: true,
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1
        }
      },
      orderBy: { updatedAt: "desc" }
    });
  }
}
