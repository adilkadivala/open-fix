import { prisma } from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/auth/sign-in",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (!account || !user) return false;

      const existing = await prisma.user.findUnique({
        where: { githubId: account.providerAccountId },
      });

      if (!existing) {
        await prisma.user.create({
          data: {
            githubId: account.providerAccountId,
            name: user.name,
            email: user.email,
            image: user.image,
          },
        });
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      (session as any).access_token = token.access_token;
      return session;
    },
  },

  events: {
    async signOut({ token }) {
      if (!token?.access_token) return;

      try {
        await fetch(
          `https://api.github.com/applications/${process.env.GITHUB_CLIENT_ID}/grant`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${token.access_token}`,
            },
            body: JSON.stringify({
              access_token: token.access_token,
            }),
          }
        );
      } catch (err) {
        console.error("Failed to revoke GitHub token:", err);
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
