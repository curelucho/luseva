import { Controller, Get } from "@nestjs/common";
import { ChannelsService } from "./channels.service";

@Controller("channels")
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  list() {
    return this.channelsService.listSupportedChannels();
  }
}
