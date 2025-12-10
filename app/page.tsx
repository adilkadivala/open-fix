"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Layout,
  CalendarDays,
  BarChart3,
  Users,
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  Command,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// --- Main Page Component ---

export default function TaskFlowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-slate-100">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300",
          scrolled &&
            "bg-white/80 backdrop-blur-md border-slate-200 upports-backdrop-filter:bg-white/60"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Command className="h-5 w-5" />
            </div>
            TaskFlow
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#features"
              className="hover:text-slate-950 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-slate-950 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-950 transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              <a
                href="#features"
                className="block px-2 py-1 hover:text-slate-950"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-2 py-1 hover:text-slate-950"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-2 py-1 hover:text-slate-950"
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Button className="w-full justify-center">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-8">
          <Badge
            variant="secondary"
            className="px-3 py-1 text-sm rounded-full animate-in fade-in zoom-in duration-500"
          >
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            v1.0 is now live
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in">
            Manage your tasks <br className="hidden sm:inline" />
            <span className="text-slate-500">with absolute clarity.</span>
          </h1>

          <p className="max-w-2xl leading-normal text-slate-500 sm:text-xl sm:leading-8 animate-in slide-in-from-bottom-5 duration-700 fade-in delay-150">
            Taskflow is a task management dashboard designed to streamline your
            workflow and boost productivity. Organize tasks, track progress, and
            meet deadlines with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300">
            <Button size="lg" className="h-12 px-8 text-base gap-2">
              Get Started for Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              View Demo
            </Button>
          </div>

          {/* Hero Image / Dashboard Mockup */}
          <div className="relative w-full max-w-5xl mt-16 p-2 rounded-xl bg-slate-900/5 ring-1 ring-inset ring-slate-900/10 lg:rounded-2xl lg:p-4 animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-500">
            <div className="rounded-lg bg-white shadow-2xl overflow-hidden border border-slate-200">
              {/* Mock Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto w-1/3 h-5 rounded-md bg-white border border-slate-200"></div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="flex h-[400px] md:h-[600px] bg-white">
                {/* Sidebar */}
                <div className="w-16 md:w-64 border-r border-slate-100 p-4 flex flex-col gap-6 hidden sm:flex">
                  <div className="space-y-1">
                    <div className="h-8 rounded-md bg-slate-100 w-full animate-pulse"></div>
                    <div className="h-8 rounded-md bg-white w-full"></div>
                    <div className="h-8 rounded-md bg-white w-full"></div>
                  </div>
                  <div className="space-y-1 mt-auto">
                    <div className="h-8 rounded-md bg-white w-full"></div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 p-6 md:p-8 bg-slate-50/50">
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-8 w-48 bg-slate-200 rounded-md"></div>
                    <div className="h-8 w-24 bg-slate-900 rounded-md"></div>
                  </div>

                  {/* Kanban Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
                        <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                        <div className="h-16 w-full bg-slate-50 rounded"></div>
                        <div className="flex justify-between">
                          <div className="h-4 w-8 bg-slate-100 rounded"></div>
                          <div className="h-6 w-6 rounded-full bg-blue-100"></div>
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3 opacity-75">
                        <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                        <div className="h-12 w-full bg-slate-50 rounded"></div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4 hidden md:block">
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
                        <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                        <div className="h-20 w-full bg-slate-50 rounded"></div>
                        <div className="flex justify-between">
                          <div className="h-4 w-12 bg-red-50 rounded text-[10px] text-red-500 flex items-center px-1">
                            Urgent
                          </div>
                          <div className="h-6 w-6 rounded-full bg-purple-100"></div>
                        </div>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4 hidden lg:block">
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
                        <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full bg-slate-200 ring-2 ring-white"></div>
                          <div className="h-6 w-6 rounded-full bg-slate-300 ring-2 ring-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoration Gradients */}
            <div className="absolute -top-12 -left-12 h-[300px] w-[300px] bg-purple-500/20 blur-[100px] rounded-full mix-blend-multiply"></div>
            <div className="absolute -bottom-12 -right-12 h-[300px] w-[300px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-multiply"></div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto px-4 md:px-6 py-12 md:py-24 space-y-12"
        >
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need to ship projects
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              TaskFlow provides all the tools you need to manage projects,
              collaborate with your team, and stay on track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Layout className="h-6 w-6" />
                </div>
                <CardTitle>Kanban Boards</CardTitle>
                <CardDescription>
                  Visualize your workflow with flexible Kanban boards. Drag and
                  drop tasks to update status instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>
                  Plan your schedule with an integrated calendar. Never miss a
                  deadline with smart reminders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Assign tasks, leave comments, and share files in real-time.
                  Keep everyone on the same page.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>
                  Gain insights into team performance with detailed analytics.
                  Track velocity and completion rates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <CardTitle>Task Automation</CardTitle>
                <CardDescription>
                  Automate repetitive tasks with custom rules. Focus on what
                  matters while TaskFlow handles the rest.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Command className="h-6 w-6" />
                </div>
                <CardTitle>Keyboard Shortcuts</CardTitle>
                <CardDescription>
                  Navigate TaskFlow with speed using intuitive keyboard
                  shortcuts designed for power users.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Pricing/CTA Section */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Start organizing your work today
            </h2>
            <p className="mx-auto max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Join thousands of teams who rely on TaskFlow to deliver projects
              on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8">
                Get Started for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 bg-white"
              >
                Contact Sales
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> No credit card
                required
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> 14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-12 border-t border-slate-200 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Command className="h-5 w-5" />
              </div>
              TaskFlow
            </div>
            <p className="text-sm text-slate-500 max-w-xs mb-4">
              Built with Next.js, Tailwind CSS, and Shadcn UI. The ultimate tool
              for modern task management.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Product</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Features
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Pricing
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Changelog
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Docs
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Company</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              About
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Blog
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Careers
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Legal</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-8 text-sm text-slate-500">
          <p>© 2024 TaskFlow Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Design inspired by TaskFlow</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
