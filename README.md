# Academia × Industry — Portal for Academia–Industry Collaboration

> SIH Problem Statement 26044

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT + bcrypt (RBAC)
- **File Storage:** Cloudinary (Multer)

## Project Structure

```
SIH-6Dot/
├── apps/
│   ├── web/       → Frontend (React + Vite)
│   └── api/       → Backend (Express + TypeScript)
└── packages/
    └── shared/    → Shared types, constants, schemas
```

## Development

```bash
# Install dependencies
npm install

# Start frontend
npm run dev:web

# Start backend
npm run dev:api

# Build all
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` in the relevant app directory and fill in secrets.

## Architecture

See `Project-Structure.md` for full architectural details.

## Design System

See `Design.md` for the complete visual system and component specifications.
