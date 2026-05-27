import { Injectable } from "@nestjs/common";

@Injectable()
export class SchedulingService {
  getAvailability(date?: string) {
    return {
      date: date ?? new Date().toISOString().slice(0, 10),
      slots: ["09:30", "11:00", "15:30", "17:00"]
    };
  }
}
