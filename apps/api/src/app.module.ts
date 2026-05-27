import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AiAgentModule } from "./ai-agent/ai-agent.module";
import { AuthModule } from "./auth/auth.module";
import { ChannelsModule } from "./channels/channels.module";
import { ConversationsModule } from "./conversations/conversations.module";
import { HealthController } from "./health.controller";
import { PrismaModule } from "./prisma/prisma.module";
import { SchedulingModule } from "./scheduling/scheduling.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ConversationsModule,
    AiAgentModule,
    SchedulingModule,
    ChannelsModule
  ],
  controllers: [HealthController]
})
export class AppModule {}
