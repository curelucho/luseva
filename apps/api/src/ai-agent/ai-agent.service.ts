import { Injectable } from "@nestjs/common";
import type { DetectedIntent, IntentName } from "@luseva/types";

const controlledTools = [
  "consultar_disponibilidad",
  "crear_turno",
  "cancelar_turno",
  "enviar_confirmacion"
] as const;

@Injectable()
export class AiAgentService {
  detectIntent(message: string): DetectedIntent & { allowedTools: typeof controlledTools } {
    const normalized = message.toLowerCase();
    let intent: IntentName = "unknown";

    if (/(turno|cita|agenda|reserv)/.test(normalized)) {
      intent = "schedule_appointment";
    }
    if (/(reprogram|cambiar|mover)/.test(normalized)) {
      intent = "reschedule_appointment";
    }
    if (/(cancel|anular)/.test(normalized)) {
      intent = "cancel_appointment";
    }
    if (/(precio|cuanto|horario|direccion|servicio)/.test(normalized)) {
      intent = intent === "unknown" ? "faq" : intent;
    }

    return {
      intent,
      confidence: intent === "unknown" ? 0.35 : 0.78,
      entities: {
        date: normalized.includes("manana") || normalized.includes("mañana") ? "tomorrow" : undefined,
        time: normalized.includes("tarde") ? "afternoon" : undefined
      },
      allowedTools: controlledTools
    };
  }
}
