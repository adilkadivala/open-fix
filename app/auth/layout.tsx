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
      <body>{children}</body>
    </html>
  );
}
