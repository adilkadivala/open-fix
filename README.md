
# 🚀 OpenFix.AI – Autonomous AI Agent for Fixing GitHub Issues  
> Build intelligent, automated code-maintainers powered by Cline + Kestra + GitHub.

OpenFix.AI is an **AI-driven GitHub Issue Fixer** that automatically:

- Reads a full GitHub repository  
- Understands issues  
- Plans a fix  
- Generates patches using **Cline Autonomous Developer**  
- Evaluates & summarizes using **Kestra AI Agent**  
- Prepares production-ready patches  
- (Optional) auto-opens Pull Requests

The entire pipeline is orchestrated cleanly using **Next.js**, **Prisma**, **Supabase**, **Kestra**, and **Cline**.

---

# 🧠 Why OpenFix.AI?

GitHub maintainers spend **hours triaging & fixing issues**.  
This project automates the whole workflow:

1. Sync repo issues  
2. Understand an issue using Kestra agent  
3. Let Cline autonomously produce the fix  
4. Save logs, patch, reasoning  
5. Allow maintainers to review and merge

Perfect for open-source teams, solo developers, hackathons, and agent-based development.

---

# 🛠️ Tech Stack

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
- **Kestra** → AI Orchestration, Summarization, Evaluation  
- **Cline** → Autonomous Coding Agent (uses Together Models internally)  
- **No Together / Oumi in backend — Cline handles reasoning**

## **Integrations**
- GitHub OAuth (User Authentication)
- GitHub Repositories API
- GitHub Issues API
- GitHub Pull Requests API (optional future step)



# ⚙️ Setup Instructions

## 1. Clone Repo

```bash
git clone https://github.com/<yourname>/openfix-ai
cd openfix-ai
````

---

## 2. Install Dependencies

```bash
npm install
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

KESTRA_URL=http://localhost:8080

```

---

## 4. Setup Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 5. Run Dev Server

```bash
npm run dev
```

---

# 🚀 How to Use

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
* Trigger Kestra workflow
* Kestra triggers Cline
* Cline produces final patch
* Prisma stores results

## 6. View Output

Dashboard displays:

* Patch
* Reasoning log
* Kestra summary
* Kestra evaluation
* Cline logs

---

# 🧪 AI Pipeline Responsibilities

### ✔ Cline

* Reads repo
* Generates plan
* Writes code
* Creates patch
* Provides reasoning
* Uses Together model internally (optional)

### ✔ Kestra

* Coordinates pipeline
* Summarizes repository context
* Evaluates patch (replaces Oumi)
* Logs workflow activities
* Triggers Cline

### ✔ Your Backend

* Stores all runs
* Provides dashboard UI

---

# 🛠️ Tools Used

| Tool / Platform  | Purpose                                |
| ---------------- | -------------------------------------- |
| **Next.js 14**   | UI + Routing + API                     |
| **ShadCN UI**    | Modern dashboard components            |
| **Prisma**       | ORM for PostgreSQL                     |
| **Supabase**     | Hosted PostgreSQL database             |
| **NextAuth**     | GitHub OAuth                           |
| **Cline CLI**    | Autonomous coding agent                |
| **Kestra**       | Workflow automation & AI orchestration |
| **Tailwind CSS** | Styling                                |
| **TypeScript**   | Type safety                            |
| **GitHub API**   | Repo, Issues, PR automation            |

---

# 🧩 Roadmap

### Phase 1 – Core Functionality (Complete)

* GitHub OAuth
* Repo selection
* Issue syncing
* AgentRun model
* Kestra integration
* Cline integration

### Phase 2 – Advanced Features

* PR creation
* Diff viewer
* AgentRun timeline UI
* Real-time log streaming

### Phase 3 – Optional Expansions

* Multi-model support
* Repository embeddings
* Agent collaboration mode
* Multi-step patch validation

