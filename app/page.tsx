"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Command,
  Filter,
  Globe,
  PieChart,
  Sparkles,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import BentoCard from "@/components/bento-card";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FadeIn from "@/components/fadein";
import BuildBy from "@/components/build-by";
import Bento from "@/components/bento";
import WorkFlow from "@/components/work-flow";
import CTA from "@/components/call-to-action";
import Footer from "@/components/footer";

// --- Components ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* --- Ambient Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size:[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] text-foreground"></div>
        {/* Subtle Gradient Spotlights */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <Hero />
        <BuildBy />
        <Bento />
        <WorkFlow />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
