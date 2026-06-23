'use client';

import React from "react";
import { ArrowRight, Layers } from "lucide-react";

export function LangChainStackDiagram() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden group mb-8 mt-4">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* Architecture Stack Diagram */}
      <div className="relative z-10 flex flex-col gap-3">
        
        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
          <Layers className="w-3 h-3" /> Stack Architecture
        </h4>
        
        {/* Layer 1: UI */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-fd-foreground">1. User Interface (UI)</span>
          <span className="text-[10px] text-fd-muted-foreground">Chat / Dashboard / CLI</span>
        </div>
        
        <div className="flex justify-center text-fd-muted-foreground my-[-4px]">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Layer 2: Orchestration (LangChain) */}
        <div className="bg-fd-secondary border border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.15)] rounded-lg p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500" />
          <span className="text-sm font-bold text-primary mb-1">2. Orchestration Layer</span>
          <div className="bg-fd-background border border-fd-border rounded px-4 py-2 mt-2 flex items-center gap-2">
            <span className="text-xl">🦜🔗</span>
            <span className="font-black text-fd-foreground tracking-wider">LangChain</span>
          </div>
          <span className="text-[10px] text-fd-muted-foreground mt-2">Prompts, Memory, Routing, LCEL</span>
        </div>

        <div className="flex justify-center text-primary/50 my-[-4px]">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Layer 3: Infrastructure */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-fd-foreground mb-2">3. Infrastructure</span>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">Models (LLMs)</span>
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">Tools (APIs)</span>
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">Vector DBs</span>
          </div>
        </div>

      </div>

    </div>
  );
}
