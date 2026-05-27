import { Injectable } from "@nestjs/common";

@Injectable()
export class ChannelsService {
  listSupportedChannels() {
    return [
      { type: "whatsapp", name: "WhatsApp Cloud API", status: "planned" },
      { type: "telegram", name: "Telegram Bot API", status: "planned" },
      { type: "email", name: "Email", status: "planned" }
    ];
  }
}
