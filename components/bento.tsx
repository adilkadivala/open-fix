import FadeIn from './fadein'
import BentoCard from './bento-card'
import { BarChart3, Filter, PieChart, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const Bento = () => {
  return (
     <section
          id="features"
          className="container mx-auto px-4 py-24 md:py-32"
        >
          <FadeIn className="mb-16 md:mb-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Everything you need to <br />
              <span className="text-muted-foreground">master the noise.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful filters, AI analysis, and real-time alerts. Designed for
              teams who need clarity, not just data.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Feature 1: Real-time Sync (Live Feed Mockup) */}
            <BentoCard className="md:col-span-2 relative overflow-hidden group">
              <div className="flex flex-col justify-between h-full relative z-10">
                <div className="p-6">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Real-time Sync
                  </h3>
                  <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                    Posts appear on your board milliseconds after they are
                    published via our WebSocket architecture.
                  </p>
                </div>

                {/* Visual: Live Feed Stream */}
                <div
                  className="relative h-48 mt-4 overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent z-10 h-20 bottom-0 w-full" />
                  <div className="px-6 space-y-3 pt-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:bg-secondary/70"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <div className="space-y-1.5 flex-1">
                          <div className="h-1.5 w-20 bg-foreground/10 rounded-full" />
                          <div className="h-1.5 w-full bg-foreground/5 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature 2: AI Sentiment (Gauge/Donut Mockup) */}
            <BentoCard className="md:row-span-2 flex flex-col group">
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <PieChart className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  AI Sentiment
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Automatically tag posts as Positive, Negative, or
                  Controversial.
                </p>

                <div className="flex-1 flex items-center justify-center py-6">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <svg className="w-full h-full -rotate-90 transform transition-transform duration-700 group-hover:scale-105">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        className="stroke-secondary transition-all duration-500 group-hover:stroke-secondary/80"
                        strokeWidth="6"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        className="stroke-primary transition-all duration-700 ease-out group-hover:opacity-100 opacity-80"
                        strokeWidth="6"
                        strokeDasharray="251.2"
                        strokeDashoffset="30"
                        strokeLinecap="round"
                        style={{ transitionDelay: "100ms" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="text-4xl font-bold text-foreground tracking-tighter transition-all duration-500 group-hover:scale-110 group-hover:text-primary"
                        style={{ transitionDelay: "200ms" }}
                      >
                        88%
                      </span>
                      <span
                        className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1 transition-all duration-500 group-hover:translate-y-1"
                        style={{ transitionDelay: "300ms" }}
                      >
                        Accuracy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature 3: Smart Filters (Tags Mockup) */}
            <BentoCard className="flex flex-col justify-between overflow-hidden group">
              <div className="p-6 relative z-10">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Filter className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Smart Filters
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Create custom views based on velocity.
                </p>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2">
                  {["#Viral", "High Velocity", "@Mentions", "Competitors"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-[10px] font-medium border transition-all duration-300 cursor-default",
                          "bg-secondary/50 text-muted-foreground border-border",
                          "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                        )}
                        style={{ transitionDelay: `${i * 75}ms` }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </BentoCard>

            {/* Feature 4: Analytics (Bar Chart Mockup) */}
            <BentoCard className="flex flex-col justify-between overflow-hidden group">
              <div className="p-6 relative z-10">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Analytics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Weekly digests for your team.
                </p>
              </div>
              <div className="relative h-24 mt-2 w-full flex items-end px-6 pb-6 gap-1.5">
                {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-secondary rounded-t-sm transition-all duration-500 group-hover:bg-primary/80 group-hover:scale-y-110 origin-bottom"
                    style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </BentoCard>
          </div>
        </section>

  )
}

export default Bento