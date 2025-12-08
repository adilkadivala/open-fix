import { motion, } from "framer-motion";

import FadeIn from './fadein'
import { ArrowRight, Command } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
  return (
     <section className="container mx-auto px-4 text-center max-w-5xl mb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm text-xs text-muted-foreground mb-8 hover:bg-secondary transition-colors cursor-pointer group">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-foreground">New:</span> LinkedIn
              Analytics
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Manage social trends <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-muted-foreground via-foreground to-muted-foreground">
                like engineering tasks.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              The first social intelligence platform built for workflow. Track
              viral moments, assign sentiment analysis, and execute your
              strategy without the noise.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.3}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Start Tracking Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base shadow-sm bg-background hover:bg-secondary/50"
            >
              <Command className="w-4 h-4 mr-2" /> View Demo
            </Button>
          </FadeIn>

          {/* --- Interactive Hero Dashboard (Floating Image) --- */}
          <FadeIn delay={0.5} className="mt-20 px-2 md:px-0 relative z-20">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden max-w-6xl mx-auto group"
            >
              {/* Replace 'dashboard.png' with your actual file name in the public folder */}
              <img
                src="/dashboard.png"
                alt="Social Dashboard Preview"
                className="w-full h-auto object-cover"
              />

              {/* Overlay for glass effect shine */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </FadeIn>
        </section>
  )
}

export default Hero