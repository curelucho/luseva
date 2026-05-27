import { Controller, Get, Query } from "@nestjs/common";
import { SchedulingService } from "./scheduling.service";

@Controller("scheduling")
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get("availability")
  availability(@Query("date") date?: string) {
    return this.schedulingService.getAvailability(date);
  }
}
