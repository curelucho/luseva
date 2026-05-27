import { Body, Controller, Post } from "@nestjs/common";
import { IsString } from "class-validator";
import { AiAgentService } from "./ai-agent.service";

class DetectIntentDto {
  @IsString()
  message!: string;
}

@Controller("ai-agent")
export class AiAgentController {
  constructor(private readonly aiAgentService: AiAgentService) {}

  @Post("detect-intent")
  detectIntent(@Body() dto: DetectIntentDto) {
    return this.aiAgentService.detectIntent(dto.message);
  }
}
