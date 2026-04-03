FROM node:22-alpine

WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
RUN corepack enable

ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/openfix
ENV NEXTAUTH_URL=http://localhost:3000
ENV NEXTAUTH_SECRET=build-time-placeholder
ENV GITHUB_CLIENT_ID=build-time-placeholder
ENV GITHUB_CLIENT_SECRET=build-time-placeholder
ENV GROQ_API_KEY=build-time-placeholder
ENV GITHUB_PERSONAL_TOKEN=build-time-placeholder

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && pnpm start"]
