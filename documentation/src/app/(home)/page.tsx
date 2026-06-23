import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, Terminal } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 py-20 mt-10 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AI Learning Material
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 max-w-4xl leading-[1.1]">
          Master the Next Generation of <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm px-2 py-2">
            AI Applications
          </span>
        </h1>

        <p className="text-lg md:text-xl text-fd-muted-foreground mb-10 max-w-2xl font-medium leading-relaxed">
          Move beyond simple ChatGPT wrappers. Learn to build robust, autonomous, and deterministic AI agents using LangChain and LangGraph.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/docs"
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300"
          >
            Start Learning <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-fd-secondary text-fd-foreground font-bold rounded-full border border-fd-border hover:border-fd-foreground/30 transition-colors duration-300"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-fd-card/50 backdrop-blur-sm border border-fd-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-fd-foreground">Foundations</h3>
            <p className="text-fd-muted-foreground text-sm leading-relaxed">
              Understand the core principles of the JSON-first mindset, separation of concerns, and when to use chains versus agents.
            </p>
          </div>

          <div className="bg-fd-card/50 backdrop-blur-sm border border-fd-border rounded-2xl p-8 hover:border-blue-500/50 transition-colors duration-300 group mt-0 md:mt-8">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-fd-foreground">Architecture</h3>
            <p className="text-fd-muted-foreground text-sm leading-relaxed">
              Learn the 3-layer and 4-layer stacks. Implement LangChain for the execution logic and LangGraph for complex state control flow.
            </p>
          </div>

          <div className="bg-fd-card/50 backdrop-blur-sm border border-fd-border rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300 group mt-0 md:mt-16">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Terminal className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-fd-foreground">Practical Execution</h3>
            <p className="text-fd-muted-foreground text-sm leading-relaxed">
              Write actual code. We'll build deterministic tools, implement Zod schema enforcement, and construct a multi-step agent from scratch.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
