'use client';

import React from "react";
import { ArrowRight, Database, MessageSquare, CheckCircle } from "lucide-react";

export function StandardAgentFlow() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden group mb-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* Standard Diagram Flow */}
      <div className="relative z-10">
        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
          <ArrowRight className="w-3 h-3" /> Standard Agent Flow
        </h4>
        
        <div className="flex items-center justify-center gap-2 text-xs font-mono w-full overflow-x-auto pb-2">
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-fd-foreground">User Request</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background border border-primary/40 shadow-[0_0_10px_rgba(var(--primary),0.1)] px-3 py-2 rounded shrink-0 flex flex-col gap-1">
            <span className="text-primary font-bold">Agent Logic</span>
            <span className="text-[10px] text-fd-muted-foreground">Context → Tools → Draft</span>
          </div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-pink-500">Ask Approval</div>
          <ArrowRight className="w-4 h-4 text-fd-muted-foreground shrink-0" />
          <div className="bg-fd-background px-3 py-2 rounded border border-fd-border shrink-0 text-emerald-500">Final Response</div>
        </div>
      </div>

      <div className="h-px w-full bg-fd-border my-2 relative z-10" />

      {/* Real World Example */}
      <div className="relative z-10">
        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
          <Database className="w-3 h-3" /> Real Example: Support Agent
        </h4>
        
        <div className="space-y-0">
            
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-fd-background border border-fd-border flex items-center justify-center text-fd-muted-foreground z-10 relative">
                  <MessageSquare className="w-4 h-4" />
              </div>
              <div className="w-px h-full bg-fd-border -my-2" />
            </div>
            <div className="pb-6 pt-1">
              <div className="font-bold text-fd-foreground text-sm">1. Message Received</div>
              <div className="text-xs text-fd-muted-foreground mt-1">User asks a support question.</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary z-10 relative shadow-sm">
                <Database className="w-4 h-4" />
              </div>
              <div className="w-px h-full bg-fd-border -my-2" />
            </div>
            <div className="pb-6 pt-1">
              <div className="font-bold text-primary text-sm">2. Query KB & Web</div>
              <div className="text-xs text-fd-muted-foreground mt-1">Agent searches the Knowledge Base (KB) and sources.</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-fd-background border border-fd-border flex items-center justify-center text-fd-muted-foreground z-10 relative">
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="pt-1">
              <div className="font-bold text-fd-foreground text-sm">3. Draft & Approve</div>
              <div className="text-xs text-fd-muted-foreground mt-1">Drafts reply with citations. Awaits human approval.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
