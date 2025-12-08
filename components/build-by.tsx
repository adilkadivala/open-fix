import React from "react";

const BuildBy = () => {
  return (
    <section className="border-y border-border bg-card overflow-hidden py-10">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Trusted by modern data teams
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-12 md:gap-24 items-center whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                "Acme Corp",
                "Linear",
                "Vercel",
                "Raycast",
                "Notion",
                "Scale",
                "Retool",
                "Ramp",
              ].map((brand) => (
                <div
                  key={brand}
                  className="text-xl font-bold font-mono text-foreground flex items-center gap-2 cursor-default"
                >
                  <div className="w-4 h-4 bg-foreground rounded-full" /> {brand}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex gap-12 md:gap-24 items-center whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                "Acme Corp",
                "Linear",
                "Vercel",
                "Raycast",
                "Notion",
                "Scale",
                "Retool",
                "Ramp",
              ].map((brand) => (
                <div
                  key={brand}
                  className="text-xl font-bold font-mono text-foreground flex items-center gap-2 cursor-default"
                >
                  <div className="w-4 h-4 bg-foreground rounded-full" /> {brand}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildBy;
