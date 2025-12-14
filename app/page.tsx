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
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function TaskFlowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is authenticated
  const isAuthenticated = status === "authenticated";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-slate-100">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300",
          scrolled &&
            "bg-white/80 backdrop-blur-md border-slate-200 supports-backdrop-filter:bg-white/60"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Command className="h-5 w-5" />
            </div>
            OpenFix.AI
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
              href="#how-it-works"
              className="hover:text-slate-950 transition-colors"
            >
              How It Works
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-slate-600">
                  {session?.user?.name}
                </span>
                <Button size="sm" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth/sign-in">Log in</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/auth/sign-in">Get Started</Link>
                </Button>
              </>
            )}
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
                href="#how-it-works"
                className="block px-2 py-1 hover:text-slate-950"
              >
                How It Works
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                {isAuthenticated ? (
                  <Button className="w-full justify-center" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      asChild
                    >
                      <Link href="/auth/sign-in">Log in</Link>
                    </Button>
                    <Button className="w-full justify-center" asChild>
                      <Link href="/auth/sign-in">Get Started</Link>
                    </Button>
                  </>
                )}
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
            Powered by AI
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in">
            Fix GitHub Issues <br className="hidden sm:inline" />
            <span className="text-slate-500">Automatically with AI.</span>
          </h1>

          <p className="max-w-2xl leading-normal text-slate-500 sm:text-xl sm:leading-8 animate-in slide-in-from-bottom-5 duration-700 fade-in delay-150">
            OpenFix.AI uses Kestra, Cline, and powerful LLMs to understand your
            codebase, analyze issues, and generate step-by-step fix plans with
            automated PRs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300">
            {isAuthenticated ? (
              <Button size="lg" className="h-12 px-8 text-base gap-2" asChild>
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" className="h-12 px-8 text-base gap-2" asChild>
                  <Link href="/auth/sign-in">
                    Get Started for Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base"
                >
                  View Demo
                </Button>
              </>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto px-4 md:px-6 py-12 md:py-24 space-y-12"
        >
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need to fix issues faster
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              OpenFix.AI provides intelligent code analysis, automated fix
              generation, and seamless GitHub integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Github className="h-6 w-6" />
                </div>
                <CardTitle>GitHub Integration</CardTitle>
                <CardDescription>
                  Connect your repositories with OAuth. Automatically sync
                  issues and create PRs with AI-generated fixes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Layout className="h-6 w-6" />
                </div>
                <CardTitle>Repo Indexing</CardTitle>
                <CardDescription>
                  Kestra scans your entire codebase, creates embeddings, and
                  builds a code graph for deep understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle>Issue Analysis</CardTitle>
                <CardDescription>
                  AI reads issue descriptions, links affected code sections, and
                  extracts stack traces automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <CardTitle>Fix Plan Generation</CardTitle>
                <CardDescription>
                  Together.ai and Oumi LLMs produce detailed solutions with
                  file-by-file instructions and edge case analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Cline Agents</CardTitle>
                <CardDescription>
                  Auto-label PRs (bug, feature, docs) and generate clean commit
                  messages following Conventional Commits.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <CardTitle>CodeRabbit Review</CardTitle>
                <CardDescription>
                  Automated code reviews on every PR to ensure quality and catch
                  potential issues before merge.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Start fixing issues with AI today
            </h2>
            <p className="mx-auto max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Connect your GitHub account and let AI handle the heavy lifting of
              understanding and fixing code issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/dashboard">Open Dashboard</Link>
                </Button>
              ) : (
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/auth/sign-in">Get Started for Free</Link>
                </Button>
              )}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> No credit card
                required
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Free for open
                source
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Unlimited repos
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-12 border-t border-slate-200 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Command className="h-5 w-5" />
              </div>
              OpenFix.AI
            </div>
            <p className="text-sm text-slate-500 max-w-xs mb-4">
              AI-powered GitHub issue resolver using Kestra, Cline, Together.ai,
              and Oumi. Built for the hackathon.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/adilkadivala/open-fix"
                target="_blank"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Product</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Features
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Documentation
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
          <p>© 2024 OpenFix.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
