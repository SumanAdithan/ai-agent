'use client';

import React from "react";

export function ArchitectureDiagram() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden group mb-8">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      
      <div className="flex-1 space-y-4 relative z-10 w-full">
        {/* Layer 1 */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-4 flex items-start gap-4">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
          <div>
            <h4 className="font-bold text-fd-foreground flex items-center gap-2">
              User Interface (UI) <span className="text-[10px] bg-fd-secondary text-fd-muted-foreground px-2 py-0.5 rounded font-mono">Frontend</span>
            </h4>
            <p className="text-xs text-fd-muted-foreground mt-1">Chat interfaces, CLI tools, and visual dashboards.</p>
          </div>
        </div>

        {/* Layer 2 */}
        <div className="bg-fd-background border border-primary/40 rounded-lg p-4 flex items-start gap-4 shadow-[0_0_15px_rgba(var(--primary),0.15)] relative transform md:-translate-x-2">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),1)]" />
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
          <div>
            <h4 className="font-bold text-fd-foreground flex items-center gap-2">
              Orchestration <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded font-mono border border-primary/30">The Brain</span>
            </h4>
            <p className="text-xs text-fd-muted-foreground mt-1">Decides which models to call and combining multiple steps into a flow.</p>
          </div>
        </div>

        {/* Layer 3 */}
        <div className="bg-fd-background border border-fd-border rounded-lg p-4 flex items-start gap-4">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
          <div>
            <h4 className="font-bold text-fd-foreground flex items-center gap-2">
              Models & Tools <span className="text-[10px] bg-fd-secondary text-fd-muted-foreground px-2 py-0.5 rounded font-mono">Infrastructure</span>
            </h4>
            <p className="text-xs text-fd-muted-foreground mt-1">LLMs (OpenAI, Gemini), Search APIs, and Vector DBs.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Generated Code */}
      <div className="flex-1 flex flex-col justify-center bg-fd-secondary rounded-lg p-4 md:p-5 border border-fd-border relative z-10 shadow-inner w-full md:w-auto mt-4 md:mt-0">
        <div className="flex items-center justify-between mb-3">
          <h5 className="font-mono text-primary text-xs font-bold tracking-wider">orchestrator.ts</h5>
          <span className="text-[10px] text-fd-muted-foreground uppercase tracking-widest font-semibold">Flow Map</span>
        </div>
        <p className="text-xs text-fd-muted-foreground mb-4 leading-relaxed">
          A generated map keeps the tools, DBs, models, and RAG outputs connected to the APIs you call every day.
        </p>

        <div className="space-y-3 font-mono text-xs">
          <div className="bg-fd-background border border-fd-border rounded p-2.5 text-fd-foreground">
            <span className="text-pink-500 font-semibold">await</span> <span className="text-blue-400">model.invoke</span>(prompt)
          </div>
          <div className="bg-fd-background border border-fd-border rounded p-2.5 text-fd-foreground">
            <span className="text-pink-500 font-semibold">await</span> <span className="text-blue-400">tool.webSearch</span>(query)
          </div>
          <div className="bg-fd-background border border-fd-border rounded p-2.5 text-fd-foreground">
            <span className="text-pink-500 font-semibold">await</span> <span className="text-blue-400">rag.retrieve</span>(docs)
          </div>
          <div className="bg-fd-background border border-fd-border rounded p-2.5 text-fd-foreground">
            <span className="text-pink-500 font-semibold">await</span> <span className="text-blue-400">db.query</span>(sql)
          </div>
        </div>
      </div>

    </div>
  );
}
