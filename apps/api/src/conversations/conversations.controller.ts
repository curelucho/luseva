import { Controller, Get, Query } from "@nestjs/common";
import { ConversationsService } from "./conversations.service";

@Controller("conversations")
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get()
  list(@Query("workspaceId") workspaceId?: string) {
    return this.conversationsService.list(workspaceId);
  }
}
