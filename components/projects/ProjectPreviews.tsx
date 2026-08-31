import React from "react";

interface ProjectPreviewProps {
  type: "lims" | "insurance" | "bill-ocr";
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type }) => {
  if (type === "lims") {
    return (
      <div className="w-full h-48 sm:h-52 bg-slate-900 rounded-xl overflow-hidden p-3 text-slate-100 flex flex-col justify-between font-mono text-xs border border-slate-800 shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-[11px] font-semibold text-slate-300 font-sans tracking-wide">
              LIMS Workflow Studio
            </span>
          </div>
          <span className="text-[10px] bg-primary/20 text-primary-soft px-2 py-0.5 rounded border border-primary/30 font-sans">
            FSSAI Regulated
          </span>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-12 gap-2 my-auto py-1 font-sans">
          {/* Mini Sidebar */}
          <div className="col-span-3 bg-slate-800/60 rounded-lg p-1.5 space-y-1.5 border border-slate-700/50">
            <div className="h-2 w-12 bg-primary/60 rounded"></div>
            <div className="h-1.5 w-16 bg-slate-600 rounded"></div>
            <div className="h-1.5 w-10 bg-slate-700 rounded"></div>
            <div className="h-1.5 w-14 bg-slate-700 rounded"></div>
          </div>

          {/* Main Area */}
          <div className="col-span-9 space-y-1.5">
            <div className="flex items-center justify-between bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60">
              <span className="text-[10px] text-slate-300">Sample #LAB-8492</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-medium">Stage: Validation</span>
            </div>
            
            {/* Rows */}
            <div className="bg-slate-950/60 rounded p-1.5 space-y-1 border border-slate-800/80 text-[10px]">
              <div className="flex justify-between items-center text-slate-400">
                <span>Microbiological Assay</span>
                <span className="text-emerald-400">Passed (0.01 CFU)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Heavy Metal Screen</span>
                <span className="text-primary-soft">Within Limit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-1.5 font-sans">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>RBAC + UBAC Active</span>
          </div>
          <span className="text-slate-500">JWT Authorized</span>
        </div>
      </div>
    );
  }

  if (type === "insurance") {
    return (
      <div className="w-full h-48 sm:h-52 bg-slate-900 rounded-xl overflow-hidden p-3 text-slate-100 flex flex-col justify-between font-mono text-xs border border-slate-800 shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-[11px] font-semibold text-slate-300 font-sans tracking-wide">
              TPA Insurance Gateway
            </span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-sans">
            SLA: 99.9%
          </span>
        </div>

        {/* Middle API pipeline */}
        <div className="space-y-1.5 my-auto py-1 font-sans">
          <div className="flex items-center justify-between bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="text-primary-soft font-mono font-semibold">POST</span>
              <span className="text-slate-200">/api/v1/claims/sync</span>
            </div>
            <span className="text-emerald-400 font-mono">200 OK</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
              <div className="text-slate-400 text-[9px]">Transactions</div>
              <div className="text-slate-100 font-bold font-mono">14.8k/day</div>
            </div>
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
              <div className="text-slate-400 text-[9px]">Avg Latency</div>
              <div className="text-primary-soft font-bold font-mono">42ms</div>
            </div>
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
              <div className="text-slate-400 text-[9px]">Security</div>
              <div className="text-emerald-400 font-bold font-mono">IRDA Compliant</div>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-1.5 font-sans">
          <span className="text-slate-400 font-mono">IC Data Sync: Active</span>
          <span className="text-slate-500">ASP.NET Core REST</span>
        </div>
      </div>
    );
  }

  // Bill Entry Automation
  return (
    <div className="w-full h-48 sm:h-52 bg-slate-900 rounded-xl overflow-hidden p-3 text-slate-100 flex flex-col justify-between font-mono text-xs border border-slate-800 shadow-inner group-hover:border-primary/40 transition-colors">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 text-[11px] font-semibold text-slate-300 font-sans tracking-wide">
            OCR & Bill Pipeline
          </span>
        </div>
        <span className="text-[10px] bg-primary/20 text-primary-soft px-2 py-0.5 rounded border border-primary/30 font-sans">
          JSON ➔ XML
        </span>
      </div>

      {/* Main OCR Mock */}
      <div className="grid grid-cols-12 gap-2 my-auto py-1 font-sans">
        {/* Document Scanner Box */}
        <div className="col-span-5 bg-slate-950/80 rounded border border-slate-800 p-1.5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-primary animate-pulse"></div>
          <div className="space-y-1">
            <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
            <div className="h-1 w-16 bg-slate-700 rounded"></div>
            <div className="h-1 w-14 bg-slate-700 rounded"></div>
          </div>
          <div className="text-[9px] text-primary-soft font-mono">Confidence: 98.6%</div>
        </div>

        {/* Extracted Fields */}
        <div className="col-span-7 bg-slate-800/60 rounded p-1.5 space-y-1 text-[10px] border border-slate-700/50">
          <div className="flex justify-between">
            <span className="text-slate-400">Bill #</span>
            <span className="text-slate-200 font-mono">INV-8902</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Total Amt</span>
            <span className="text-emerald-400 font-mono">₹48,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Status</span>
            <span className="text-primary-soft font-medium">Auto-Queued</span>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-1.5 font-sans">
        <span className="text-slate-400 font-mono">Scheduler: Active</span>
        <span className="text-slate-500">SQL Server Stored Proc</span>
      </div>
    </div>
  );
};
