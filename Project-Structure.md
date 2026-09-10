# Project Structure — SIH 26044
## Portal for Academia–Industry Collaboration

> **Purpose:** This document defines the software architecture, repository structure, ownership boundaries, naming conventions, and implementation rules for the SIH 26044 project.
>
> **Source of product requirements:** SIH Problem Statement 26044 — Portal for Academia–Industry Collaboration for Skill Mapping, Internships and Placement.
>
> **Source of UI rules:** `Design.md`.
>
> This file is an architectural contract for developers and AI coding agents. Before creating, moving, or deleting project files, read this document and `Design.md`.

---

# 1. Project Identity

**Project:** Portal for Academia–Industry Collaboration  
**SIH Problem Statement:** 26044

The platform connects five stakeholder roles:

1. Student
2. Industry
3. Academician
4. Institution
5. Platform Admin

The core product flow is:

```text
Student
  ↓
Profile
  ↓
Skill Assessment
  ↓
Skill Profile + Skill Gaps
  ↓
Learning / Recommendations
  ↓
Internships / Jobs
  ↓
Application
  ↓
Recruitment / Placement

Industry
  ↓
Company Profile
  ↓
Opportunities
  ↓
Candidate Discovery
  ↓
Recruitment

Institution
  ↓
Verification
  ↓
Student Monitoring
  ↓
Industry Partnerships
  ↓
Placement & Analytics
```

The platform also supports academician/faculty development, mentorship, industrial training, research collaboration, and platform administration.

---

# 2. Technology Architecture

The project follows the MERN stack specified for SIH 26044.

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js
- TypeScript

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- bcrypt
- Role-Based Access Control (RBAC)

## File Management

- Multer
- Cloudinary

## Email

- Nodemailer

## Deployment

- Vercel — frontend
- Render or Railway — backend

---

# 3. Repository Architecture

Use a monorepo-style structure.

```text
SIH-6Dot/
│
├── Design.md
├── Project-Structure.md
├── README.md
├── package.json
├── .gitignore
├── .env.example
│
├── apps/
│   │
│   ├── web/
│   │   ├── public/
│   │   │
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   │
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   ├── layout/
│   │   │   │   ├── navigation/
│   │   │   │   ├── forms/
│   │   │   │   ├── charts/
│   │   │   │   └── feedback/
│   │   │   │
│   │   │   ├── features/
│   │   │   │   ├── auth/
│   │   │   │   ├── student/
│   │   │   │   ├── industry/
│   │   │   │   ├── academician/
│   │   │   │   ├── institution/
│   │   │   │   └── admin/
│   │   │   │
│   │   │   ├── pages/
│   │   │   │   ├── landing/
│   │   │   │   ├── auth/
│   │   │   │   ├── student/
│   │   │   │   ├── industry/
│   │   │   │   ├── academician/
│   │   │   │   ├── institution/
│   │   │   │   └── admin/
│   │   │   │
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── hooks/
│   │   │   ├── contexts/
│   │   │   ├── lib/
│   │   │   ├── config/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   │
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── api/
│       ├── src/
│       │   ├── config/
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── validators/
│       │   ├── utils/
│       │   ├── types/
│       │   ├── app.ts
│       │   └── server.ts
│       │
│       ├── tsconfig.json
│       └── package.json
│
└── packages/
    │
    └── shared/
        ├── src/
        │   ├── types/
        │   ├── constants/
        │   └── schemas/
        ├── package.json
        └── tsconfig.json
```

---

# 4. Root-Level Files

## `Design.md`

The UI design-system source of truth.

AI agents and developers MUST read this before creating or modifying UI.

It defines:

- colors
- typography
- spacing
- layout
- responsive behavior
- buttons
- forms
- cards
- tables
- navigation
- charts
- badges
- modals
- other UI patterns

Do not replace or override the design system without an explicit architectural decision.

---

## `Project-Structure.md`

This file.

It defines the project architecture and responsibilities of files/folders.

---

## `README.md`

Contains:

- project overview
- setup instructions
- environment variables
- development commands
- architecture overview
- deployment instructions
- contribution rules

---

## `.env.example`

Contains names of environment variables without real secrets.

Example:

```env
VITE_API_URL=
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
```

Never commit real secrets.

---

# 5. Frontend Architecture

The frontend is located at:

```text
apps/web/
```

The frontend must be structured so that UI, business logic, API communication, and routing remain separate.

---

# 6. Frontend Components

## `components/ui/`

Generic reusable visual components.

Examples:

```text
Button
Input
Textarea
Select
Checkbox
Radio
Badge
Card
Modal
Dialog
Tabs
Table
Dropdown
Tooltip
Avatar
Progress
Skeleton
Toast
```

These components must be reusable across roles.

Do not put Student-specific business logic here.

---

## `components/layout/`

Application-level layouts.

Examples:

```text
PublicLayout
AuthLayout
DashboardLayout
SidebarLayout
PageHeader
ContentContainer
```

Role-specific content should not be hardcoded into generic layout components.

---

## `components/navigation/`

Navigation components.

Examples:

```text
PublicNavbar
Sidebar
SidebarItem
Breadcrumbs
MobileNavigation
UserMenu
RoleSwitcher
```

Navigation configuration should preferably be data-driven.

---

## `components/forms/`

Reusable higher-level form components.

Examples:

```text
FormField
FileUpload
SearchField
PasswordField
FormSection
FormActions
```

Do not duplicate the same form behavior across registration pages.

---

## `components/charts/`

Reusable chart wrappers and visualization components.

Examples:

```text
LineChart
BarChart
DonutChart
Heatmap
```

Charts must follow `Design.md`.

---

## `components/feedback/`

User feedback components.

Examples:

```text
LoadingState
EmptyState
ErrorState
SuccessMessage
ConfirmationDialog
```

---

# 7. Feature Architecture

Business-domain functionality belongs inside:

```text
apps/web/src/features/
```

Use feature folders when a feature contains multiple components, hooks, types, services, or business rules.

---

# 8. Authentication Feature

```text
features/auth/
```

Responsibilities:

- login
- signup
- logout
- session handling
- authentication state
- role handling
- verification status
- password reset
- auth-related validation

Possible structure:

```text
features/auth/
├── components/
│   ├── LoginForm.tsx
│   ├── SignupRoleSelector.tsx
│   ├── SignupForm.tsx
│   └── PasswordField.tsx
│
├── hooks/
│   └── useAuth.ts
│
├── services/
│   └── auth.service.ts
│
├── types/
│   └── auth.types.ts
│
└── validators/
    └── auth.validators.ts
```

Authentication UI must not directly contain backend implementation details.

---

# 9. Student Feature

```text
features/student/
```

Expected future areas:

```text
profile/
portfolio/
assessment/
skills/
recommendations/
learning/
opportunities/
applications/
notifications/
```

The Student panel's core goal is:

```text
Assess skills
→ identify gaps
→ learn
→ apply
→ build verified portfolio
```

Student functionality must support the requirements in the SIH specification.

---

# 10. Industry Feature

```text
features/industry/
```

Expected future areas:

```text
company-profile/
opportunities/
programs/
candidates/
applications/
collaborations/
analytics/
```

The Industry panel's core goal is:

```text
Post opportunities
→ discover talent
→ recruit
→ run learning programs
→ collaborate with universities
```

---

# 11. Academician Feature

```text
features/academician/
```

Expected future areas:

```text
profile/
opportunities/
mentorship/
collaborations/
applications/
```

The Academician panel supports:

- faculty profile
- faculty internships
- industrial training
- FDPs
- mentorship
- guest lectures
- workshops
- live projects
- research collaboration
- application tracking

---

# 12. Institution Feature

```text
features/institution/
```

Expected future areas:

```text
institution-profile/
verification/
students/
faculty/
placements/
partnerships/
analytics/
reports/
```

The Institution panel supports:

- institution management
- student/faculty verification
- student monitoring
- placement/internship dashboards
- industry partnership management
- analytics and reports

---

# 13. Platform Admin Feature

```text
features/admin/
```

Expected future areas:

```text
verification/
users/
roles/
skills/
master-data/
moderation/
system-health/
audit-logs/
```

Platform Admin is responsible for:

- stakeholder verification
- user/role management
- skill taxonomy
- master data
- content moderation
- system analytics
- audit logs

---

# 14. Pages

Pages represent route-level screens.

```text
pages/
```

Pages should compose feature components rather than contain all business logic themselves.

---

## Public Pages

```text
pages/landing/
└── LandingPage.tsx
```

Route:

```text
/
```

---

## Authentication Pages

```text
pages/auth/
├── LoginPage.tsx
├── SignupPage.tsx
└── ForgotPasswordPage.tsx
```

Routes:

```text
/login
/signup
/forgot-password
```

---

## Future Student Pages

```text
pages/student/
├── StudentDashboardPage.tsx
├── StudentProfilePage.tsx
├── SkillAssessmentPage.tsx
├── SkillGapPage.tsx
├── RecommendationsPage.tsx
├── LearningHubPage.tsx
├── OpportunitiesPage.tsx
├── OpportunityDetailsPage.tsx
├── ApplicationsPage.tsx
└── PortfolioPage.tsx
```

---

## Future Industry Pages

```text
pages/industry/
├── IndustryDashboardPage.tsx
├── CompanyProfilePage.tsx
├── OpportunitiesPage.tsx
├── CreateOpportunityPage.tsx
├── OpportunityDetailsPage.tsx
├── CandidatesPage.tsx
├── ApplicationsPage.tsx
├── CollaborationsPage.tsx
└── AnalyticsPage.tsx
```

---

## Future Academician Pages

```text
pages/academician/
├── AcademicianDashboardPage.tsx
├── FacultyProfilePage.tsx
├── OpportunitiesPage.tsx
├── MentorshipPage.tsx
├── CollaborationsPage.tsx
└── ApplicationsPage.tsx
```

---

## Future Institution Pages

```text
pages/institution/
├── InstitutionDashboardPage.tsx
├── InstitutionProfilePage.tsx
├── VerificationPage.tsx
├── StudentsPage.tsx
├── FacultyPage.tsx
├── PlacementsPage.tsx
├── PartnershipsPage.tsx
└── AnalyticsPage.tsx
```

---

## Future Admin Pages

```text
pages/admin/
├── AdminDashboardPage.tsx
├── VerificationPage.tsx
├── UsersPage.tsx
├── RolesPage.tsx
├── SkillsPage.tsx
├── MasterDataPage.tsx
├── ModerationPage.tsx
├── SystemHealthPage.tsx
└── AuditLogsPage.tsx
```

Do not implement all of these during the initial UI phase.

Create them only as the corresponding product features are implemented.

---

# 15. Routing Architecture

Routes must be centralized.

```text
routes/
├── AppRoutes.tsx
├── PublicRoutes.tsx
├── AuthRoutes.tsx
├── ProtectedRoutes.tsx
└── RoleRoute.tsx
```

Target route structure:

```text
/
├── /login
├── /signup
├── /forgot-password
│
└── /app
    ├── /student/*
    ├── /industry/*
    ├── /academician/*
    ├── /institution/*
    └── /admin/*
```

Protected routes must eventually enforce authentication.

Role routes must eventually enforce RBAC.

Do not rely on hiding navigation items as the security mechanism.

Actual authorization must be enforced by the backend.

---

# 16. Services Layer

Frontend API communication belongs in:

```text
apps/web/src/services/
```

Example:

```text
services/
├── api.client.ts
├── auth.service.ts
├── user.service.ts
├── student.service.ts
├── industry.service.ts
├── institution.service.ts
├── opportunity.service.ts
├── application.service.ts
└── notification.service.ts
```

Components should not directly contain raw `fetch()` or Axios calls when a service abstraction is appropriate.

Example:

```ts
await authService.login(credentials)
```

instead of:

```ts
fetch("http://localhost:5000/api/auth/login")
```

inside a component.

---

# 17. Backend Architecture

Backend application:

```text
apps/api/
```

Structure:

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── validators/
├── utils/
├── types/
├── app.ts
└── server.ts
```

---

# 18. Backend Responsibilities

## `config/`

Database, environment, Cloudinary, email and other configuration.

---

## `controllers/`

HTTP request/response handling.

Controllers should remain thin.

Business logic belongs in services.

---

## `services/`

Business logic.

Examples:

```text
auth.service.ts
verification.service.ts
skill.service.ts
recommendation.service.ts
opportunity.service.ts
application.service.ts
collaboration.service.ts
notification.service.ts
analytics.service.ts
```

---

## `models/`

Mongoose models.

Expected future models include:

```text
User
StudentProfile
IndustryProfile
AcademicianProfile
InstitutionProfile
Skill
SkillAssessment
Opportunity
Application
LearningProgram
Mentorship
Collaboration
Notification
VerificationRequest
AuditLog
```

Only create models when the corresponding feature is actually implemented.

---

## `middleware/`

Examples:

```text
auth.middleware.ts
role.middleware.ts
error.middleware.ts
upload.middleware.ts
validation.middleware.ts
```

---

## `routes/`

Organize API routes by domain:

```text
routes/
├── auth.routes.ts
├── users.routes.ts
├── students.routes.ts
├── industry.routes.ts
├── academicians.routes.ts
├── institutions.routes.ts
├── opportunities.routes.ts
├── applications.routes.ts
├── collaborations.routes.ts
├── skills.routes.ts
├── notifications.routes.ts
└── analytics.routes.ts
```

---

# 19. Shared Package

Shared types and constants belong in:

```text
packages/shared/
```

Potential shared content:

```text
types/
├── user.ts
├── role.ts
├── opportunity.ts
├── application.ts
└── verification.ts

constants/
├── roles.ts
├── statuses.ts
└── visibility.ts

schemas/
├── auth.schema.ts
└── opportunity.schema.ts
```

The purpose is to prevent frontend and backend from independently redefining the same domain concepts.

---

# 20. Role Definitions

Use a centralized role definition.

```ts
type UserRole =
  | "student"
  | "industry"
  | "academician"
  | "institution"
  | "admin";
```

Do not use inconsistent names such as:

```text
company
college
faculty
universityAdmin
platformAdministrator
```

unless there is a specific domain reason.

Use the official project terminology consistently:

- Student
- Industry
- Academician
- Institution
- Platform Admin

---

# 21. Verification Status

Verification is a core platform concept.

Use centralized status definitions.

Possible states:

```text
pending
verified
rejected
suspended
```

Role-specific workflows may use additional states where required.

Examples from the project specification:

```text
Institution:
Pending Verification

Industry:
Pending Admin Verification

Student:
Pending University Verification

Academician:
Pending University Approval
```

Do not hardcode these strings throughout the UI.

Centralize them in shared constants/types.

---

# 22. Opportunity Visibility

The project defines three opportunity visibility types:

```text
Open to All
Selected Universities
Campus Drive
```

Centralize these values.

Example:

```ts
type OpportunityVisibility =
  | "open"
  | "selected_universities"
  | "campus_drive";
```

Visibility must eventually be enforced by backend authorization/business logic, not only by frontend filtering.

---

# 23. Authentication Architecture

Authentication must eventually follow:

```text
Frontend
   ↓
Login
   ↓
Backend Auth API
   ↓
Credential verification
   ↓
JWT
   ↓
Authenticated session
   ↓
Role-based route access
```

Never trust a frontend-provided role for authorization.

The backend must determine the authenticated user's actual role.

The frontend role is for UI/navigation and user experience.

---

# 24. Document Upload Architecture

Documents include:

- resumes
- certificates
- internship reports
- authorization letters
- official institution documents
- faculty supporting documents

Future flow:

```text
Frontend
   ↓
File validation
   ↓
Backend upload endpoint
   ↓
Multer
   ↓
Cloudinary
   ↓
Stored file URL / metadata
   ↓
MongoDB reference
```

Do not store large files directly in MongoDB unless an explicit architectural decision is made.

---

# 25. Notification Architecture

The platform requires:

- email notifications
- in-app notifications

Future architecture:

```text
Business Event
      ↓
Notification Service
      ├── In-App Notification
      └── Email / Nodemailer
```

Examples:

```text
Application status changed
Student verification approved
Faculty verification approved
Company verified
Institution verified
Opportunity deadline approaching
Collaboration request received
```

---

# 26. Skill Engine Architecture

The Skill Engine is a major product capability.

Future structure:

```text
Skill Assessment
      ↓
Questionnaire
      ↓
Scoring
      ↓
Skill Profile
      ↓
Strengths
      +
Skill Gaps
```

The project specification defines:

- technical skill questionnaire
- soft skill assessment
- optional aptitude/domain tests
- generated skill profile
- industry-demand comparison
- periodic reassessment

Do not implement recommendation logic inside UI components.

Skill calculations belong in the backend/service layer.

---

# 27. Recommendation Engine

The recommendation engine should eventually use:

```text
Skills
+
Interests
+
Eligibility
+
Industry Demand
```

to generate:

- job-role recommendations
- industry/company recommendations
- learning paths
- career guidance
- opportunity recommendations

Keep recommendation logic isolated from controllers and UI.

---

# 28. Analytics Architecture

Analytics are role-specific.

Examples:

### Student

```text
Skill progress
Skill gaps
Applications
Deadlines
Recommendations
```

### Industry

```text
Skill demand
Available talent
Applications
Recruitment outcomes
Active opportunities
```

### Institution

```text
Placement statistics
Company-wise hiring
Branch-wise performance
Skill-gap heatmaps
Placement trends
```

### Admin

```text
Users
Opportunities
Applications
Verification activity
System health
```

Charts should be reusable frontend components while data calculations remain outside presentation components.

---

# 29. Design System Rule

`Design.md` has higher priority than individual developer preference for visual implementation.

Before creating UI:

```text
Read Design.md
      ↓
Find existing token/component
      ↓
Reuse it
      ↓
Compose new UI
```

Do not:

- introduce random colors
- create a second typography system
- create arbitrary spacing values
- use unrelated component libraries
- add generic SaaS gradients
- create excessive shadows
- create inconsistent border radii
- copy Claude/Anthropic branding

If a new visual pattern is necessary, compose it using the existing design tokens.

---

# 30. Component Ownership Rule

Use this decision process:

### Is it visually generic?

Put it in:

```text
components/ui/
```

### Is it shared application layout?

Put it in:

```text
components/layout/
```

### Is it specific to authentication?

Put it in:

```text
features/auth/
```

### Is it specific to Student functionality?

Put it in:

```text
features/student/
```

### Is it a route-level screen?

Put it in:

```text
pages/
```

### Is it backend business logic?

Put it in:

```text
apps/api/src/services/
```

Do not put backend business logic into React components.

---

# 31. Naming Conventions

Use:

```text
PascalCase
```

for React components:

```text
StudentDashboard.tsx
OpportunityCard.tsx
LoginForm.tsx
```

Use:

```text
camelCase
```

for functions and variables:

```text
getUserProfile()
handleSubmit()
isVerified
```

Use:

```text
kebab-case
```

for folders where appropriate:

```text
skill-assessment/
opportunity-details/
user-verification/
```

Use `.service.ts` for service modules:

```text
auth.service.ts
opportunity.service.ts
```

Use `.types.ts` for domain-specific types:

```text
auth.types.ts
opportunity.types.ts
```

---

# 32. Anti-Patterns

Do NOT create:

```text
src/
├── everything.ts
├── helpers.ts
├── utils.ts
├── components.tsx
└── App.tsx
```

with hundreds of unrelated responsibilities.

Do NOT:

- put API calls directly in every component
- duplicate forms
- duplicate buttons/cards/tables
- hardcode roles everywhere
- hardcode status strings everywhere
- hardcode API URLs
- store secrets in source code
- trust frontend authorization
- create every future page before its feature is implemented
- install dependencies without a clear reason

---

# 33. Initial Development Scope

The first implementation phase is intentionally small.

Build:

```text
Landing Page
Login
Signup
```

with:

```text
Shared UI Foundation
+
Public Layout
+
Auth Layout
+
Routing
+
Form Validation
+
Auth Service Abstraction
```

Do NOT implement the full platform immediately.

The SIH specification identifies the MVP around:

1. Admin verifies universities and companies
2. University verifies students and faculty
3. Student profile and skill assessment
4. Company opportunity posting with visibility control
5. Student application and tracking
6. Basic university-industry collaboration

Advanced recommendations, Learning Hub, full Faculty panel and richer analytics can follow in Phase 2.

---

# 34. Development Order

Use this order:

```text
1. Repository setup
       ↓
2. Frontend foundation
       ↓
3. Design tokens
       ↓
4. Shared UI components
       ↓
5. Routing
       ↓
6. Landing page
       ↓
7. Login
       ↓
8. Signup
       ↓
9. Authentication abstraction
       ↓
10. Backend foundation
       ↓
11. Database models
       ↓
12. Authentication API
       ↓
13. Verification workflows
       ↓
14. Student MVP
       ↓
15. Industry MVP
       ↓
16. Institution MVP
       ↓
17. Collaboration
       ↓
18. Recommendation engine
       ↓
19. Academician panel
       ↓
20. Analytics
       ↓
21. Admin expansion
```

---

# 35. AI Coding-Agent Rules

Any AI coding agent working in this repository MUST:

1. Read `Project-Structure.md`.
2. Read `Design.md` before UI work.
3. Inspect the existing project before creating files.
4. Reuse existing components.
5. Avoid unnecessary dependencies.
6. Avoid duplicate implementations.
7. Follow the existing folder structure.
8. Preserve existing functionality.
9. Run type checking after significant changes.
10. Run the production build before claiming completion.
11. Report files changed.
12. Report assumptions.
13. Report unresolved errors honestly.
14. Never claim a feature is implemented if it is only mocked.
15. Never modify the design system casually.

When requirements are ambiguous, prefer the smallest architecture that keeps the system extensible.

---

# 36. Current Priority

At the beginning of the project, optimize for:

```text
Architecture correctness
        +
Design-system consistency
        +
Reusable components
        +
Fast iteration
```

Do not optimize for:

```text
Maximum number of screens
Maximum number of dependencies
Premature microservices
Premature optimization
```

The project should remain simple enough for a hackathon team to understand and maintain.

---

# 37. Definition of Done

A feature is not considered complete merely because the UI exists.

A feature is complete only when applicable:

```text
UI
+
Validation
+
Loading state
+
Error state
+
Empty state
+
Responsive behavior
+
Accessibility
+
API abstraction
+
Backend implementation
+
Database persistence
+
Authorization
+
Testing
```

For mocked prototype stages, clearly mark what is mocked.

Never disguise mocked functionality as production functionality.

---

# 38. Architectural Principle

The system should evolve around this boundary:

```text
UI
 ↓
Feature
 ↓
Service
 ↓
API
 ↓
Controller
 ↓
Business Service
 ↓
Model / Database
```

Each layer has one primary responsibility.

The goal is to allow us to replace mocked frontend behavior with real backend behavior without rewriting the UI.

---

# 39. Final Rule

This project is a unified academia–industry platform, not five unrelated dashboards.

Whenever a feature is added, ask:

1. Which stakeholder does it serve?
2. Which SIH requirement does it satisfy?
3. Which existing design-system components should it use?
4. Where does the business logic belong?
5. Does the backend need to enforce it?
6. Can the component be reused elsewhere?
7. Does it move the platform toward the MVP?

If a feature cannot answer these questions, do not add it merely because it looks impressive.

