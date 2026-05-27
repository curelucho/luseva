# Luseva AI

Luseva AI es una plataforma SaaS omnicanal para automatizar atencion, conversaciones y gestion de turnos con agentes de IA. El MVP centraliza WhatsApp, Telegram y Email en un inbox unificado, con agenda inteligente, automatizaciones y panel administrativo.

## Stack

- Frontend: Next.js 15, TypeScript, TailwindCSS, shadcn-style components, Framer Motion
- Backend: NestJS, TypeScript, JWT, Prisma
- Base de datos: PostgreSQL
- IA: OpenAI API, agentes, tool calling y memoria conversacional
- Infraestructura: Docker y Docker Compose

## Estructura

```txt
apps/
  web/       Next.js dashboard
  api/       NestJS API modular
packages/
  ui/        Componentes compartidos
  types/     Tipos de dominio compartidos
  config/    Configuracion compartida
```

## Primer Inicio

1. Instalar dependencias:

```bash
npm install
```

2. Crear variables de entorno:

```bash
cp .env.example .env
```

3. Levantar PostgreSQL:

```bash
docker compose up -d postgres
```

4. Generar Prisma y correr migraciones:

```bash
npm run db:generate
npm run db:migrate
```

5. Ejecutar apps:

```bash
npm run dev
```

Web: http://localhost:3000
API: http://localhost:4000/api/health

## Docker Compose

Con `.env` configurado:

```bash
docker compose up --build
```

## Modulos Backend

- `auth`: autenticacion base con JWT y refresh tokens
- `users`: usuarios y perfiles
- `conversations`: inbox omnicanal y mensajes
- `ai-agent`: deteccion de intenciones y herramientas controladas
- `scheduling`: turnos, disponibilidad y agenda
- `channels`: WhatsApp, Telegram y Email

## Reglas IA Iniciales

El agente no ejecuta acciones directas sobre la base de datos. Siempre debe devolver o invocar herramientas controladas:

- `consultar_disponibilidad`
- `crear_turno`
- `cancelar_turno`
- `enviar_confirmacion`

Esto mantiene auditabilidad, permisos y control humano sobre los flujos criticos.
