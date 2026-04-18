import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 flex justify-between items-end border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 tracking-tight">AlgoTrade Pro</h1>
            <p className="text-slate-400 mt-2">Live Strategy Testing Environment</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 uppercase tracking-widest">System Status</p>
            <p className="text-emerald-400 font-mono font-bold flex items-center justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ONLINE
            </p>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Total Portfolio Value</h3>
            <p className="text-3xl font-mono font-bold text-white">$124,592.45</p>
            <p className="text-emerald-400 text-sm mt-2 font-mono">+2.4% Today</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Active Trading Bots</h3>
            <p className="text-3xl font-mono font-bold text-white">4 / 5</p>
            <p className="text-slate-400 text-sm mt-2">Mean Reversion, Momentum...</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Win Rate (7 Days)</h3>
            <p className="text-3xl font-mono font-bold text-white">68.2%</p>
            <p className="text-rose-400 text-sm mt-2 font-mono">-1.1% vs Last Week</p>
          </div>
        </div>

        {/* Mock Chart Area */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg h-80 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <p className="text-slate-500 font-mono z-10">[ Interactive Chart Module Loading ]</p>
          <p className="text-slate-600 text-sm z-10 mt-2">Deploy code to see updates in real-time.</p>
        </div>

      </div>
    </main>
  );
}
