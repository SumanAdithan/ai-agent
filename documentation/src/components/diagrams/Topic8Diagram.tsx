'use client';

import React from "react";
import { ArrowRight, GitCommit, GitBranch } from "lucide-react";

export function ChainsVsAgentsDiagram() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden group mb-8 mt-4">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* Standard Chain Flow */}
      <div className="relative z-10">
        <h4 className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <GitCommit className="w-3 h-3" /> Standard Chain Pipeline
        </h4>
        
        <div className="flex items-center gap-2 text-xs font-mono w-full overflow-x-auto pb-2">
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">User Input</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">System Prompt</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">Call Model</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-emerald-500">Answer</div>
        </div>
      </div>

      <div className="h-px w-full bg-fd-border my-2 relative z-10" />

      {/* RAG Chain Flow */}
      <div className="relative z-10">
        <h4 className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <GitCommit className="w-3 h-3" /> RAG Chain Example
        </h4>
        
        <div className="flex items-center gap-2 text-xs font-mono w-full overflow-x-auto pb-2">
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">Retrieve Docs</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">Prompt + Docs</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">Call Model</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-emerald-500">Answer</div>
        </div>
      </div>

      <div className="h-px w-full bg-fd-border my-2 relative z-10" />

      {/* Agent Loop Flow */}
      <div className="relative z-10">
        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
          <GitBranch className="w-3 h-3" /> Agent Decision Flow
        </h4>
        
        <div className="flex flex-col text-xs font-mono w-full overflow-x-auto pb-2">
          <div className="flex items-start gap-2 min-w-max">
            {/* Start Point */}
            <div className="flex items-center gap-2 mt-3">
              <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">Input</div>
              <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
              <div className="bg-fd-secondary border border-primary/40 shadow-[0_0_10px_rgba(var(--primary),0.1)] px-3 py-2 rounded shrink-0 flex flex-col gap-1">
                <span className="text-primary font-bold">Decide: Strategy?</span>
              </div>
            </div>
            
            {/* Branching Container */}
            <div className="flex flex-col gap-3 relative pl-6 border-l border-fd-border ml-4 py-1">
              
              {/* Branch 1: Simple */}
              <div className="flex items-center gap-2 relative">
                <div className="absolute w-6 h-px bg-fd-border -left-6 top-1/2" />
                <span className="text-[10px] text-fd-muted-foreground italic shrink-0 w-16">Simple →</span>
                <div className="bg-fd-background px-3 py-1.5 rounded border border-fd-border shrink-0 text-emerald-500">Direct Output</div>
              </div>
              
              {/* Branch 2: Web Browse -> Decision Loop */}
              <div className="flex items-center gap-2 relative">
                <div className="absolute w-6 h-px bg-fd-border -left-6 top-1/2" />
                <span className="text-[10px] text-fd-muted-foreground italic shrink-0 w-16">Needs Web →</span>
                <div className="bg-fd-background px-3 py-1.5 rounded border border-fd-border shrink-0 flex items-center gap-2">
                  <span className="text-blue-400">Tool A</span> <span className="text-[10px] text-fd-muted-foreground">(Browse)</span>
                </div>
                <ArrowRight className="w-3 h-3 text-fd-muted-foreground shrink-0" />
                <div className="bg-fd-secondary px-3 py-1.5 rounded border border-primary/30 shrink-0 text-primary font-bold">
                  Decide Again
                </div>
                <ArrowRight className="w-3 h-3 text-fd-muted-foreground shrink-0" />
                <div className="bg-fd-background px-3 py-1.5 rounded border border-fd-border shrink-0 text-emerald-500">Output</div>
              </div>
              
              {/* Branch 3: Database / Calc */}
              <div className="flex items-center gap-2 relative">
                <div className="absolute w-6 h-px bg-fd-border -left-6 top-1/2" />
                <span className="text-[10px] text-fd-muted-foreground italic shrink-0 w-16">Math/DB →</span>
                <div className="bg-fd-background px-3 py-1.5 rounded border border-fd-border shrink-0 flex items-center gap-2">
                  <span className="text-emerald-500">Tool B</span> <span className="text-[10px] text-fd-muted-foreground">(Query)</span>
                </div>
                <ArrowRight className="w-3 h-3 text-fd-muted-foreground shrink-0" />
                <div className="bg-fd-background px-3 py-1.5 rounded border border-fd-border shrink-0 text-emerald-500">Output</div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
