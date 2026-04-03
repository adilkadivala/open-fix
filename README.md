# OpenFix.AI – AI-Powered GitHub Issue Fixer
> Build intelligent, automated code-maintainers powered by OpenAI and GitHub.

OpenFix.AI is an **AI-driven GitHub Issue Fixer** that automatically:

- Reads a full GitHub repository  
- Understands issues using OpenAI  
- Generates step-by-step fix plans  
- Identifies files that need updates  
- (Optional) auto-opens Pull Requests

The entire pipeline is orchestrated cleanly using **Next.js**, **Prisma**, **Supabase**, and **OpenAI**.

---

#  Why OpenFix.AI?

GitHub maintainers spend **hours triaging & fixing issues**.  
This project automates the whole workflow:

1. Sync repo issues  
2. Understand an issue using OpenAI  
3. Generate step-by-step fix plan  
4. Identify files to update  
5. Allow maintainers to review and merge

Perfect for open-source teams, solo developers, hackathons, and agent-based development.

---

#  Tech Stack

## **Frontend**
- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Zustand (optional for UI state)**

## **Backend**
- **NextAuth (GitHub OAuth)**
- **Prisma ORM**
- **Supabase PostgreSQL**
- **Vercel (Deployment)**

## **AI Pipeline**
- **OpenAI** → Issue Analysis, Fix Planning, File Identification  

## **Integrations**
- GitHub OAuth (User Authentication)
- GitHub Repositories API
- GitHub Issues API
- GitHub Pull Requests API (optional future step)



# Setup Instructions

## 1. Clone Repo

```bash
git clone https://github.com/<yourname>/openfix-ai
cd openfix-ai
````

---

## 2. Install Dependencies

```bash
pnpm install
```

---

## 3. Configure Environment

Create `.env.local`:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret

DATABASE_URL=postgresql://<user>:<password>@<host>/<db>

GROQ_API_KEY=your_groq_api_key
GITHUB_PERSONAL_TOKEN=your_github_pat_for_pr_creation_optional

```

---

## 4. Setup Prisma

```bash
pnpm db:migrate
pnpm db:generate
```

---

## 5. Run Dev Server

```bash
pnpm dev
```

## Docker

Build and run the full stack with Docker Compose:

```bash
cp .env.docker.example .env.docker
docker compose --env-file .env.docker up --build
```

This starts:

- `app` on `http://localhost:3000`
- `db` on `localhost:5432`

The app container runs `prisma migrate deploy` on startup before launching Next.js.

## GitHub Actions

Two workflows are included:

- `CI`: installs dependencies, generates Prisma client, type-checks, and builds on pushes and pull requests
- `CD`: builds the production Docker image and publishes it to GitHub Container Registry (`ghcr.io`) on pushes to `main` and version tags

Set these repository secrets before enabling the workflows:

- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GROQ_API_KEY`
- `GITHUB_PERSONAL_TOKEN` (only if PR creation is used)

The CD workflow uses the built-in `GITHUB_TOKEN` to publish images to GHCR.

---

# How to Use

## 1. Sign in with GitHub

Using **NextAuth + GitHub OAuth**.

## 2. View your GitHub repositories

Fetched from `/api/github/repos`.

## 3. Select a repo → Save to Projects

Stored in Prisma.

## 4. Sync Issues

Fetch & store GitHub issues using `/api/github/issues`.

## 5. Run AI Agent

Triggers:

* Create `AgentRun`
* Call OpenAI to analyze the issue
* Generate step-by-step fix plan
* Identify files to update
* Prisma stores results

## 6. View Output

Dashboard displays:

* AI analysis and explanation
* Step-by-step fix instructions
* Files that need updates

---

# 🧪 AI Pipeline Responsibilities

### ✔ OpenAI

* Reads issue description
* Analyzes the problem
* Generates step-by-step solution
* Identifies affected files
* Provides detailed instructions

### ✔ Your Backend

* Stores all runs
* Provides dashboard UI
* Handles GitHub API integrations

---

#  Tools Used

| Tool / Platform  | Purpose                                |
| ---------------- | -------------------------------------- |
| **Next.js 14**   | UI + Routing + API                     |
| **ShadCN UI**    | Modern dashboard components            |
| **Prisma**       | ORM for PostgreSQL                     |
| **Supabase**     | Hosted PostgreSQL database             |
| **NextAuth**     | GitHub OAuth                           |
| **OpenAI**       | AI-powered issue analysis              |
| **Tailwind CSS** | Styling                                |
| **TypeScript**   | Type safety                            |
| **GitHub API**   | Repo, Issues, PR automation            |
