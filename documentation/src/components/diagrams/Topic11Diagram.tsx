'use client';

import React from "react";
import { FileJson } from "lucide-react";

export function JsonMindsetDiagram() {
  const jsonContent = `{
  "intent": "flight_booking",
  "destination": "Paris",
  "sentiment": "positive",
  "confidence_score": 0.95
}`;

  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden group mb-8 mt-4">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* The Transformation */}
      <div className="relative z-10 flex flex-col gap-4">
        
        <h4 className="text-xs font-bold text-fd-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
          Unpredictable String <span className="text-red-500">(Bad)</span>
        </h4>
        <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-4 font-mono text-xs text-fd-muted-foreground leading-relaxed">
          <span>"Sure, I can help with that! The user's intent seems to be booking a flight to Paris, and their sentiment is highly positive."</span>
        </div>
        
        <div className="flex justify-center text-primary py-1">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/30 rounded-full">
            Zod Schema Enforcement
          </div>
        </div>

        <h4 className="text-xs font-bold text-fd-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2 mt-2">
          Structured JSON <span className="text-emerald-500">(Good)</span>
        </h4>
        
        <div className="bg-fd-background border border-fd-border rounded-lg p-4 font-mono text-xs text-emerald-500 overflow-x-auto relative">
          <div className="absolute top-2 right-3 opacity-50"><FileJson className="w-4 h-4" /></div>
          <div className="whitespace-pre">{jsonContent}</div>
        </div>

      </div>

    </div>
  );
}
