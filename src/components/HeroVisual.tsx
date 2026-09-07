import React, { useState, useMemo } from 'react';
import { Filter, BarChart3, CheckCircle2, RefreshCw } from 'lucide-react';

interface DataRow {
  id: string;
  source: string;
  category: 'Database' | 'Pipeline' | 'Automation';
  records: number;
  latencyMs: number;
  status: 'Optimized' | 'Standard';
  costScore: number;
}

const INITIAL_DATASET: DataRow[] = [
  { id: 'REC-101', source: 'dept_records_idx', category: 'Database', records: 4820, latencyMs: 14.2, status: 'Optimized', costScore: 94 },
  { id: 'REC-102', source: 'csv_batch_ingest', category: 'Pipeline', records: 8200, latencyMs: 38.6, status: 'Standard', costScore: 78 },
  { id: 'REC-103', source: 'null_imputer_clean', category: 'Automation', records: 3450, latencyMs: 11.5, status: 'Optimized', costScore: 92 },
  { id: 'REC-104', source: 'b_tree_join_eval', category: 'Database', records: 6100, latencyMs: 19.8, status: 'Optimized', costScore: 89 },
  { id: 'REC-105', source: 'json_schema_normalizer', category: 'Automation', records: 5120, latencyMs: 24.1, status: 'Standard', costScore: 82 },
  { id: 'REC-106', source: 'daily_rollup_agg', category: 'Pipeline', records: 9400, latencyMs: 29.4, status: 'Optimized', costScore: 91 },
];

export const HeroVisual: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'latency' | 'records'>('latency');
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Raw, 1: Filter, 2: Analyze, 3: Insight

  const categories = ['All', 'Database', 'Pipeline', 'Automation'];

  const filteredData = useMemo(() => {
    return INITIAL_DATASET.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchStatus = statusFilter === 'All' || item.status === statusFilter;
      return matchCat && matchStatus;
    }).sort((a, b) => {
      if (sortBy === 'latency') return a.latencyMs - b.latencyMs;
      return b.records - a.records;
    });
  }, [selectedCategory, statusFilter, sortBy]);

  const metrics = useMemo(() => {
    const totalRecords = filteredData.reduce((acc, curr) => acc + curr.records, 0);
    const avgLatency = filteredData.length
      ? (filteredData.reduce((acc, curr) => acc + curr.latencyMs, 0) / filteredData.length).toFixed(1)
      : '0.0';
    const optimizedPercent = filteredData.length
      ? Math.round((filteredData.filter((d) => d.status === 'Optimized').length / filteredData.length) * 100)
      : 0;

    return { totalRecords, avgLatency, optimizedPercent };
  }, [filteredData]);

  const maxLatency = Math.max(...INITIAL_DATASET.map(d => d.latencyMs), 45);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#0C1220] shadow-2xl shadow-black/60 overflow-hidden font-mono">
      {/* Visual Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0E18]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 pl-2">
            analytical_sandbox.py
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Live State</span>
        </div>
      </div>

      {/* Analytical Pipeline Steps */}
      <div className="px-4 py-3 bg-[#0E1526] border-b border-white/5 flex items-center justify-between overflow-x-auto text-[11px] text-slate-400 space-x-2">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-slate-500 uppercase tracking-widest text-[10px]">Pipeline:</span>
          <button 
            onClick={() => setActiveStep(0)}
            className={`px-2 py-0.5 rounded transition-colors ${activeStep === 0 ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40' : 'hover:text-slate-200'}`}
          >
            01. Raw Data
          </button>
          <span className="text-slate-600">→</span>
          <button 
            onClick={() => setActiveStep(1)}
            className={`px-2 py-0.5 rounded transition-colors ${activeStep === 1 ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40' : 'hover:text-slate-200'}`}
          >
            02. Filter
          </button>
          <span className="text-slate-600">→</span>
          <button 
            onClick={() => setActiveStep(2)}
            className={`px-2 py-0.5 rounded transition-colors ${activeStep === 2 ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40' : 'hover:text-slate-200'}`}
          >
            03. Analyze
          </button>
          <span className="text-slate-600">→</span>
          <button 
            onClick={() => setActiveStep(3)}
            className={`px-2 py-0.5 rounded transition-colors ${activeStep === 3 ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40' : 'hover:text-slate-200'}`}
          >
            04. Live Insight
          </button>
        </div>
        <div className="text-[10px] text-slate-500 hidden sm:block">
          Interactive Analytical Demo
        </div>
      </div>

      {/* Controls Bar */}
      <div className="p-4 border-b border-white/5 bg-[#0D1424] flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Category toggles */}
        <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
          <span className="text-[11px] text-slate-400 flex items-center mr-1">
            <Filter size={12} className="mr-1" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded text-xs transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort and Status controls */}
        <div className="flex items-center space-x-3 text-[11px]">
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latency' | 'records')}
              className="bg-[#141B2D] border border-white/10 rounded px-2 py-1 text-slate-300 focus:outline-none focus:border-blue-500"
            >
              <option value="latency">Latency (Fastest First)</option>
              <option value="records">Records (Volume First)</option>
            </select>
          </div>

          <button
            onClick={() => setStatusFilter(prev => prev === 'All' ? 'Optimized' : 'All')}
            className={`px-2 py-1 rounded border transition-colors ${
              statusFilter === 'Optimized'
                ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-slate-200'
            }`}
          >
            {statusFilter === 'Optimized' ? '✓ Optimized Only' : 'Status: All'}
          </button>
        </div>
      </div>

      {/* Computed Summary Metric Badges */}
      <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5 bg-[#0A0F1D]">
        <div className="p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-slate-400">Total Records</div>
          <div className="text-base font-bold text-slate-100 mt-0.5">
            {metrics.totalRecords.toLocaleString()}
          </div>
        </div>
        <div className="p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-slate-400">Avg Latency</div>
          <div className="text-base font-bold text-blue-400 mt-0.5">
            {metrics.avgLatency} <span className="text-xs font-normal text-slate-400">ms</span>
          </div>
        </div>
        <div className="p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-slate-400">Efficiency Ratio</div>
          <div className="text-base font-bold text-emerald-400 mt-0.5">
            {metrics.optimizedPercent}% <span className="text-xs font-normal text-slate-400">opt</span>
          </div>
        </div>
      </div>

      {/* Visual Representation & Data Table */}
      <div className="p-4 space-y-3">
        <div className="text-[11px] text-slate-400 flex items-center justify-between">
          <span className="flex items-center">
            <BarChart3 size={13} className="mr-1.5 text-blue-400" />
            Execution Latency Benchmark (ms)
          </span>
          <span className="text-[10px] text-slate-400">
            Showing {filteredData.length} records
          </span>
        </div>

        {/* Dynamic Horizontal Benchmark Bars */}
        <div className="space-y-2 pt-1">
          {filteredData.map((item) => {
            const widthPercent = Math.max((item.latencyMs / maxLatency) * 100, 10);
            return (
              <div key={item.id} className="group flex flex-col space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="text-slate-400 font-mono text-[10px]">{item.id}</span>
                    <span className="text-slate-200 font-medium truncate">{item.source}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="text-slate-400 text-[10px]">
                      {item.records.toLocaleString()} rows
                    </span>
                    <span className="font-semibold text-blue-300">
                      {item.latencyMs} ms
                    </span>
                  </div>
                </div>

                {/* Bar visualization */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      item.status === 'Optimized'
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-400'
                        : 'bg-gradient-to-r from-slate-500 to-blue-500'
                    }`}
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer footnote */}
      <div className="px-4 py-2.5 bg-[#090D18] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span>Interactive data state compiled locally via React hook logic</span>
        </div>
        <button 
          onClick={() => {
            setSelectedCategory('All');
            setStatusFilter('All');
            setSortBy('latency');
          }}
          className="text-slate-400 hover:text-slate-200 flex items-center space-x-1 transition-colors"
        >
          <RefreshCw size={10} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
