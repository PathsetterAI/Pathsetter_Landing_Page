import React, { useState, useEffect } from 'react';

export default function DecisionCalculator() {
  const [burnRate, setBurnRate] = useState(45662);
  const [projectValue, setProjectValue] = useState(50000000);
  const [decisions, setDecisions] = useState(3);
  const [days, setDays] = useState(12);

  const [totalCost, setTotalCost] = useState("$0");
  const [pctValue, setPctValue] = useState("0%");
  const [cascadeCost, setCascadeCost] = useState("$0");
  const [verdictHtml, setVerdictHtml] = useState("");
  const [pctColor, setPctColor] = useState("text-white");

  const fmt = (n) => {
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
    if (n >= 1e3) return '$' + Math.round(n).toLocaleString('en-US');
    return '$' + Math.round(n);
  };

  useEffect(() => {
    const direct = burnRate * decisions * days;
    const pct = (direct / projectValue * 100).toFixed(1);
    const cascade = direct * 1.5;

    setTotalCost(fmt(direct));
    setPctValue(pct + '%');
    setCascadeCost(fmt(cascade));

    if (parseFloat(pct) >= 10) setPctColor("text-red-400");
    else if (parseFloat(pct) >= 5) setPctColor("text-yellow-400");
    else setPctColor("text-white");

    const daily_total = burnRate * decisions;
    let verdict = '';
    if (parseFloat(pct) >= 15) {
      verdict = `<strong class="text-red-400 font-semibold">Critical exposure.</strong> Your stalled decisions are burning an estimated ${fmt(direct)} — ${pct}% of total project value. At this level, the delay tax alone likely exceeds your original contingency. Immediate decision architecture review is warranted.`;
    } else if (parseFloat(pct) >= 5) {
      verdict = `<strong class="text-yellow-400 font-semibold">Significant exposure.</strong> At ${fmt(daily_total)} per day in combined decision latency burn, your project is carrying a hidden overrun risk of ${fmt(direct)} in direct costs alone — before cascade effects. This is recoverable, but requires structured intervention.`;
    } else {
      verdict = `Your current estimate of <strong class="text-accent font-semibold">${fmt(direct)}</strong> represents ${pct}% of project value — within a manageable range, but compounding daily. Even at this level, compressing your average decision cycle from ${days} to 4 days (AI-enabled benchmark) would recover ${fmt(burnRate * decisions * (days - 4))} in direct burn.`;
    }
    setVerdictHtml(verdict);
  }, [burnRate, projectValue, decisions, days]);

  return (
    <div className="w-full max-w-3xl mx-auto bg-primary-light border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-12">
      {/* Header */}
      <div className="bg-white/5 p-6 sm:p-8 border-b border-white/10 border-t-4 border-t-accent relative">
        <div className="text-[10px] font-bold tracking-[2px] text-accent uppercase mb-3 font-mono">
          Pathsetter AI · Project Intelligence
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2 font-accent">
          Decision Latency<br />Cost Calculator
        </h2>
        <p className="text-sm text-secondary-mid">
          Find out what stalled decisions are costing your project — every day the clock runs.
        </p>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8">
        {/* Input Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold tracking-[0.8px] text-secondary-mid uppercase font-primary">
              Daily Project Burn Rate
            </label>
            <span className="text-[11px] text-secondary-dark -mt-1 mb-1">
              Total daily spend (labour, plant, overhead)
            </span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-mid font-semibold text-sm pointer-events-none">
                $
              </span>
              <input
                type="number"
                value={burnRate}
                min="1000"
                step="1000"
                onChange={(e) => setBurnRate(Number(e.target.value) || 0)}
                className="w-full h-11 bg-white/5 border border-white/10 rounded-md text-sm font-semibold text-white pl-7 pr-3 focus:border-accent focus:bg-white/10 outline-none transition-all duration-200 font-primary"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold tracking-[0.8px] text-secondary-mid uppercase font-primary">
              Project Contract Value
            </label>
            <span className="text-[11px] text-secondary-dark -mt-1 mb-1">
              Total EPC contract or project budget
            </span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-mid font-semibold text-sm pointer-events-none">
                $
              </span>
              <input
                type="number"
                value={projectValue}
                min="100000"
                step="500000"
                onChange={(e) => setProjectValue(Number(e.target.value) || 0)}
                className="w-full h-11 bg-white/5 border border-white/10 rounded-md text-sm font-semibold text-white pl-7 pr-3 focus:border-accent focus:bg-white/10 outline-none transition-all duration-200 font-primary"
              />
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold tracking-[0.8px] text-secondary-mid uppercase flex justify-between items-center font-primary">
              Stalled Decisions
              <span className="text-[15px] font-bold text-accent bg-accent/10 border border-accent/20 rounded-md px-2 py-0.5 min-w-[3rem] text-center">
                {decisions}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={decisions}
              onChange={(e) => setDecisions(Number(e.target.value))}
              className="w-full h-1.5 rounded-full bg-white/10 appearance-none cursor-pointer accent-accent"
              style={{ accentColor: '#00bf99' }}
            />
            <span className="text-[11px] text-secondary-dark mt-1">Open approvals / blocked actions</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold tracking-[0.8px] text-secondary-mid uppercase flex justify-between items-center font-primary">
              Average Days Stalled
              <span className="text-[15px] font-bold text-accent bg-accent/10 border border-accent/20 rounded-md px-2 py-0.5 min-w-[3rem] text-center">
                {days}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="60"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full h-1.5 rounded-full bg-white/10 appearance-none cursor-pointer accent-accent"
              style={{ accentColor: '#00bf99' }}
            />
            <span className="text-[11px] text-secondary-dark mt-1">Days per stalled decision</span>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-8" />

        {/* Results */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
          <div className="text-[10px] font-bold tracking-[1.5px] text-accent uppercase mb-4 font-primary">
            Your Decision Latency Cost Estimate
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-accent/10 border border-accent/20 rounded-md p-3.5">
              <div className="text-[10px] text-secondary-mid uppercase tracking-[0.8px] mb-1.5 font-primary">Total Direct Cost</div>
              <div className="text-2xl font-bold text-accent leading-tight font-accent">{totalCost}</div>
              <div className="text-[10px] text-secondary-dark mt-1">burn rate × decisions × days</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-md p-3.5">
              <div className="text-[10px] text-secondary-mid uppercase tracking-[0.8px] mb-1.5 font-primary">% of Project Value</div>
              <div className={`text-2xl font-bold leading-tight font-accent ${pctColor}`}>{pctValue}</div>
              <div className="text-[10px] text-secondary-dark mt-1">of total contract value</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-md p-3.5">
              <div className="text-[10px] text-secondary-mid uppercase tracking-[0.8px] mb-1.5 font-primary">Cascade Multiplier Est.</div>
              <div className="text-2xl font-bold text-white leading-tight font-accent">{cascadeCost}</div>
              <div className="text-[10px] text-secondary-dark mt-1">at 1.5× direct cost (industry avg.)</div>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-accent/5 border border-accent/20 border-l-4 border-l-accent rounded-md p-4 mb-3">
          <p 
            className="text-[13px] text-secondary-light leading-relaxed font-primary"
            dangerouslySetInnerHTML={{ __html: verdictHtml }} 
          />
        </div>

        {/* Footer Note */}
        <div className="text-[10.5px] text-secondary-dark leading-relaxed pt-3 border-t border-white/10 mt-2 font-primary">
          <strong className="text-secondary-mid">Methodology:</strong> Direct cost = daily burn rate × number of stalled decisions × average days stalled.
          Cascade multiplier of 1.5× approximates first and second-order downstream delays based on Agile Innovation Group
          and Arcadis industry benchmarks. This calculator provides a directional estimate only; actual costs depend on
          schedule criticality, contract structure, and cascade depth. Industry benchmark: $45,662/day average burn rate (Deltek, 2024).
        </div>
      </div>
    </div>
  );
}
