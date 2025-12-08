import { CheckCircle2, Globe, Sparkles } from "lucide-react";
import React from "react";
import FadeIn from "./fadein";

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className="bg-secondary/10 py-24 md:py-32 border-y border-border"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">How it works</h2>
          <p className="text-muted-foreground mt-2">
            Three steps to social enlightenment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-border via-primary/20 to-border -z-10"></div>

          {[
            {
              step: "01",
              title: "Connect",
              desc: "Link LinkedIn & Twitter.",
              icon: Globe,
            },
            {
              step: "02",
              title: "Analyze",
              desc: "Engines tag content.",
              icon: Sparkles,
            },
            {
              step: "03",
              title: "Report",
              desc: "Daily digests to Slack.",
              icon: CheckCircle2,
            },
          ].map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 0.2}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 z-10">
                <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
