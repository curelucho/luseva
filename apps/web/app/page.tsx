"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  MessagesSquare,
  Send,
  Settings,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import { Button } from "@luseva/ui";
import { ThemeToggle } from "../components/theme-toggle";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Conversaciones", icon: Inbox },
  { label: "Agenda", icon: CalendarCheck },
  { label: "Clientes", icon: Users },
  { label: "Automatizaciones", icon: Workflow },
  { label: "Configuracion", icon: Settings }
];

const conversations = [
  { name: "Sofia Mercado", channel: "WhatsApp", text: "Quiero un turno manana por la tarde", time: "2 min", state: "IA detectando fecha" },
  { name: "Clinica Norte", channel: "Email", text: "Necesito reprogramar la consulta", time: "8 min", state: "Esperando confirmacion" },
  { name: "Mateo Rivas", channel: "Telegram", text: "Cuanto cuesta la limpieza facial?", time: "14 min", state: "FAQ respondida" }
];

const metrics = [
  { label: "Conversaciones hoy", value: "428", delta: "+18%" },
  { label: "Turnos agendados", value: "76", delta: "+12%" },
  { label: "Resolucion IA", value: "82%", delta: "+9%" },
  { label: "Tiempo medio", value: "38s", delta: "-24%" }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r bg-card/70 px-4 py-5 backdrop-blur lg:block">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-5">Luseva AI</p>
              <p className="text-xs text-muted-foreground">IA que conecta</p>
            </div>
          </div>
          <nav className="mt-8 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex h-10 w-full items-center gap-3 rounded-md px-3 text-sm transition ${
                  item.active
                    ? "bg-primary/12 text-foreground ring-1 ring-primary/20"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/86 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold">Luseva AI</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Panel administrativo</p>
              <p className="text-xs text-muted-foreground">Inbox, agenda e IA conversacional en un solo lugar</p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button size="sm">
                <Send className="h-4 w-4" />
                Nuevo flujo
              </Button>
            </div>
          </header>

          <div className="grid gap-5 p-4 md:p-6 xl:grid-cols-[1fr_380px]">
            <section className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-lg border bg-card"
              >
                <div className="grid gap-6 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-7">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      <Bot className="h-3.5 w-3.5 text-primary" />
                      Agente IA omnicanal activo
                    </div>
                    <h1 className="max-w-2xl text-3xl font-semibold tracking-normal md:text-5xl">
                      Atencion automatizada, turnos claros y conversaciones bajo control.
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                      Centraliza WhatsApp, Telegram y Email con deteccion de intenciones, agenda inteligente y herramientas auditables para operar en LATAM.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button>
                        <Inbox className="h-4 w-4" />
                        Abrir inbox
                      </Button>
                      <Button variant="outline">
                        Ver agenda
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-background/70 p-4 shadow-glow">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Flujo IA</p>
                      <span className="rounded-full bg-primary/12 px-2 py-1 text-xs text-primary">Live</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {["Detectar intencion", "Consultar disponibilidad", "Ofrecer horarios", "Confirmar turno"].map((step, index) => (
                        <div key={step} className="flex items-center gap-3 rounded-md border bg-card p-3">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">{step}</span>
                          <span className="ml-auto text-xs text-muted-foreground">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border bg-card p-4">
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-2xl font-semibold">{metric.value}</p>
                      <span className="text-xs text-primary">{metric.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border bg-card">
                <div className="flex items-center justify-between border-b p-4">
                  <div>
                    <p className="text-sm font-semibold">Inbox omnicanal</p>
                    <p className="text-xs text-muted-foreground">Conversaciones unificadas con estado operativo</p>
                  </div>
                  <MessagesSquare className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="divide-y">
                  {conversations.map((conversation) => (
                    <div key={conversation.name} className="grid gap-3 p-4 md:grid-cols-[1fr_auto]">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium">{conversation.name}</p>
                          <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{conversation.channel}</span>
                        </div>
                        <p className="mt-1 truncate text-sm text-muted-foreground">{conversation.text}</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Clock3 className="h-3.5 w-3.5" />
                        {conversation.time}
                        <span className="rounded-full bg-muted px-2 py-1">{conversation.state}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-5">
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Agenda inteligente</p>
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-5 space-y-3">
                  {["09:30 Consulta inicial", "11:00 Control mensual", "15:30 Evaluacion estetica"].map((slot) => (
                    <div key={slot} className="rounded-md border bg-background/70 p-3 text-sm">{slot}</div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Canales</p>
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-5 grid gap-3">
                  {["WhatsApp Cloud API", "Telegram Bot API", "Email"].map((channel) => (
                    <div key={channel} className="flex items-center justify-between rounded-md border bg-background/70 p-3">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{channel}</span>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
