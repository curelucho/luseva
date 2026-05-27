export type ChannelType = "whatsapp" | "telegram" | "email";

export type ConversationStatus = "open" | "pending" | "resolved" | "archived";

export type AppointmentStatus = "scheduled" | "rescheduled" | "cancelled" | "completed";

export type IntentName =
  | "schedule_appointment"
  | "reschedule_appointment"
  | "cancel_appointment"
  | "faq"
  | "handoff"
  | "unknown";

export interface DetectedIntent {
  intent: IntentName;
  confidence: number;
  entities: {
    date?: string;
    time?: string;
    service?: string;
    professional?: string;
    customerName?: string;
  };
}
