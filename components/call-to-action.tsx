import React from "react";
import FadeIn from "./fadein";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Stop scrolling. <br />
          <span className="text-primary">Start synthesizing.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join 10,000+ modern teams using Social to track trends like tasks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Started for Free
          </Button>
        </div>
      </FadeIn>
    </section>
  );
};

export default CTA;
