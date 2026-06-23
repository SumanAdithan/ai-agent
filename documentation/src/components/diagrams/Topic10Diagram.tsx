'use client';

import React from "react";
import { ArrowRight, Layers, Network } from "lucide-react";

export function LangGraphStackDiagram() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden group mb-8 mt-4">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* Architecture Stack Diagram */}
      <div className="relative z-10 flex flex-col gap-2">
        
        <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Layers className="w-3 h-3" /> Agent Stack Architecture
        </h4>
        
        {/* Layer 1: UI */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-fd-foreground">1. User Interface (UI)</span>
        </div>
        
        <div className="flex justify-center text-fd-muted-foreground my-[-6px]">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Layer 2: LangGraph */}
        <div className="bg-fd-secondary border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-lg p-3 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
          <span className="text-sm font-bold text-emerald-500 mb-1">2. State & Control Flow</span>
          <div className="bg-fd-background border border-emerald-900 rounded px-4 py-1.5 mt-1 flex items-center gap-2">
            <Network className="w-4 h-4 text-emerald-500" />
            <span className="font-black text-fd-foreground tracking-wider">LangGraph</span>
          </div>
          <span className="text-[10px] text-fd-muted-foreground mt-2">Defines Graph, State, Routing, HITL</span>
        </div>

        <div className="flex justify-center text-primary/50 my-[-6px]">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Layer 3: LangChain */}
        <div className="bg-fd-secondary border border-primary/30 rounded-lg p-3 flex flex-col items-center justify-center text-center relative">
          <span className="text-sm font-bold text-primary mb-1">3. Logic Execution</span>
          <div className="bg-fd-background border border-fd-border rounded px-4 py-1.5 mt-1 flex items-center gap-2 opacity-80">
            <span className="text-sm">🦜🔗</span>
            <span className="font-bold text-fd-foreground tracking-wider">LangChain</span>
          </div>
          <span className="text-[10px] text-fd-muted-foreground mt-2">Calls specific Tools, Prompts, Parsers</span>
        </div>

        <div className="flex justify-center text-fd-muted-foreground my-[-6px]">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Layer 4: Infrastructure */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-fd-foreground mb-2">4. Infrastructure</span>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">Models</span>
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">APIs</span>
            <span className="text-[10px] bg-fd-secondary text-fd-foreground px-2 py-1 rounded border border-fd-border">DBs</span>
          </div>
        </div>

      </div>

    </div>
  );
}
