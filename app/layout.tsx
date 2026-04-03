import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/hooks/providers/session-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "OpenFix.AI",
  description: "AI-powered GitHub Issue Resolver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
