import NextAuthProvider from "@/hooks/providers/session-provider";

export const metadata = {
  title: "OpenFix.AI",
  description: "AI-powered GitHub Issue Resolver",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
