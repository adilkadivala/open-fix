import { WorkflowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="grid min-h-screen lg:grid-cols-2 ">
      <div className="flex flex-col gap-4 p-2 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="text-primary flex size-6 items-center justify-center rounded-md">
              <WorkflowIcon className="size-4" />
            </div>
            TaskFlow.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full md:max-w-1/2">{children}</div>
        </div>
      </div>
      <div className="w-full h-full bg-linear-to-tl from-accent to-accent-foreground/10  hidden lg:flex items-center justify-center overflow-hidden relative">
        <div className="top-15 bottom-15 left-15 w-full h-full absolute">
          <Image
            width={1000}
            height={5000}
            src="/dashboard.png"
            alt="dashboard-img"
            className="object-cover w-fit h-fit rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}
