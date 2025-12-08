'use client'

import { Command, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Command className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-lg">Social.</span>
          <Badge
            variant="secondary"
            className="hidden sm:flex h-5 px-1.5 text-[10px] gap-1 bg-secondary text-secondary-foreground border-border"
          >
            <span>Beta 2.0</span>
          </Badge>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#workflow"
            className="hover:text-foreground transition-colors"
          >
            Workflow
          </Link>
          <Link
            href="#pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Button
            size="sm"
            className="h-9 rounded-md px-4 text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-muted-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-background border-t border-border flex flex-col p-6 gap-6 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#workflow" onClick={() => setIsMobileMenuOpen(false)}>
                Workflow
              </Link>
              <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button className="w-full">Get Started</Button>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
