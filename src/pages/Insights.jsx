import React, { useState } from 'react';

export default function Insights() {
  const signalBriefs = [
    {
      id: 1,
      category: "Macro Cycle Analysis",
      date: "June 2026",
      title: "The Five-Decade Supercycle Convergence",
      description: "How structural timing alignments are preparing global markets for a generational inflection point, and the positioning required for early movers.",
      readTime: "7 min read",
      gradient: "from-[#10213D] via-[#142A4A] to-[#1C3055]"
    },
    {
      id: 2,
      category: "Liquidity Dynamics",
      date: "May 2026",
      title: "Mapping Capital Flows via The Timing Aggregator™",
      description: "An operational breakdown of liquidity signals and how institutional managers are utilizing TAGG indicators to optimize cross-asset allocations.",
      readTime: "5 min read",
      gradient: "from-[#1C3055] via-[#142A4A] to-[#0A1628]"
    },
    {
      id: 3,
      category: "Holistic Wealth",
      date: "April 2026",
      title: "Bio-Energetics: The Silent Multiplier of Executive Output",
      description: "Exploring the critical link between systemic biological rhythmicity, nutritional alignment, and high-stakes decision accuracy under market pressure.",
      readTime: "6 min read",
      gradient: "from-[#0A1628] via-[#10213D] to-[#1C3055]"
    }
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1628] overflow-hidden -mt-12 text-slate-100">
      
      {/* Decorative premium radial mesh glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#1C3055]/30 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-60 z-0"></div>
      <div className="absolute top-[50%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-[#142A4A]/40 to-transparent rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-50 z-0"></div>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 w-full flex flex-col">
        
        {}
        <div className="text-center mb-16 md:mb-24 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/20 bg-[#10213D]/60 backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse"></span>
            <span className="font-['Outfit'] text-xs font-semibold uppercase tracking-widest text-[#FFCF40]">Timing Intelligence Hub</span>
          </div>
          <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] font-normal">
            Timing Intelligence For Founders, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40] font-bold">
              Investors, And Operators.
            </span>
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Insights, market-cycle commentary, and signal briefs curated for those who move first. Learn how to transform macro volatility into structural leverage.
          </p>
        </div>

        {}
        <div className="max-w-4xl mx-auto w-full mb-28 relative">
          {/* Accent golden background back-glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F6C542]/10 via-[#FFD700]/5 to-[#FFCF40]/10 rounded-3xl blur-xl opacity-70"></div>
          
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#10213D] via-[#142A4A]/80 to-[#0A1628]/95 border border-[#1C3055] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-lg overflow-hidden text-center">
            
            {/* Subtle premium geometric background layer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L50 20 L100 100" fill="none" stroke="#FFD700" strokeWidth="0.25"></path>
                <path d="M0 80 L50 40 L100 80" fill="none" stroke="#FFD700" strokeWidth="0.15"></path>
              </svg>
            </div>

            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <h2 className="font-['Outfit'] text-2xl md:text-3xl text-white font-semibold tracking-wide">
                Expand Your Timing Advantage
              </h2>
              <p className="font-['Inter'] text-sm md:text-base text-slate-300 font-light leading-relaxed">
                Connect with institutional intelligence. Subscribe to our digital commentary for regular reports, or access the active analytics workspace inside our performance dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
                <a 
                  href="https://lexisjohnson.substack.com/subscribe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto font-['Outfit'] font-bold tracking-wider uppercase text-xs sm:text-sm text-[#0A1628] bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40] px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(255,215,0,0.25)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  Read The Free Newsletter
                </a>
                <a 
                  href="https://user-dashboard-timingaggregator.replit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto font-['Outfit'] font-bold tracking-wider uppercase text-xs sm:text-sm text-[#FFD700] border border-[#FFD700]/40 bg-[#10213D]/40 px-8 py-4 rounded-lg hover:border-[#FFD700] hover:bg-[#FFD700]/5 hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  Access TAGG
                </a>
              </div>
            </div>
          </div>
        </div>

        {}
        <section className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1C3055] pb-6">
            <div>
              <span className="font-['Outfit'] text-[#FFD700] text-xs font-bold uppercase tracking-widest block mb-2">Written Analysis</span>
              <h3 className="font-['Outfit'] text-2xl md:text-3xl text-white font-normal">
                Signal Briefs & Market-Cycle Commentary
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-[#FFD700]/30 hidden sm:block"></span>
              <span className="font-['Inter'] text-xs text-slate-400 uppercase tracking-widest font-semibold">Decades of Intelligence</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signalBriefs.map((brief) => (
              <article 
                key={brief.id} 
                className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#10213D]/40 to-[#0A1628]/80 border border-[#142A4A] hover:border-[#F6C542]/30 overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Stylized premium header vector card */}
                <div className={`h-44 w-full bg-gradient-to-br ${brief.gradient} relative overflow-hidden flex items-center justify-center border-b border-[#142A4A]`}>
                  {/* Visual abstract math lines instead of empty dark block */}
                  <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,80 T100,20" fill="none" stroke="#FFD700" strokeWidth="2" />
                      <path d="M0,70 Q20,30 60,60 T100,40" fill="none" stroke="#F6C542" strokeWidth="1" />
                    </svg>
                  </div>
                  {/* Subtle inner card vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent"></div>
                  <span className="relative font-['Outfit'] text-xs uppercase tracking-widest text-[#FFCF40]/80 font-bold bg-[#0A1628]/90 px-3 py-1.5 rounded border border-[#FFD700]/10">
                    Cycle Report 0{brief.id}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-['Inter'] font-semibold text-[#FFD700] tracking-wider uppercase">
                      <span>{brief.category}</span>
                      <span className="text-slate-500 font-normal">{brief.date}</span>
                    </div>
                    <h4 className="font-['Outfit'] text-xl text-white font-semibold leading-snug group-hover:text-[#FFCF40] transition-colors duration-200">
                      {brief.title}
                    </h4>
                    <p className="font-['Inter'] text-sm text-slate-400 font-light leading-relaxed line-clamp-3">
                      {brief.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#142A4A] flex items-center justify-between text-xs font-['Inter'] text-slate-400">
                    <span>{brief.readTime}</span>
                    <span className="group-hover:text-[#FFD700] flex items-center gap-1 transition-colors font-bold uppercase tracking-widest text-[10px]">
                      Explore Brief 
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1C3055] pb-6">
            <div>
              <span className="font-['Outfit'] text-[#FFD700] text-xs font-bold uppercase tracking-widest block mb-2">Featured Broadcasts</span>
              <h3 className="font-['Outfit'] text-2xl md:text-3xl text-white font-normal">
                The TIMING HOUR & Vibe It Up Series
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-[#FFD700]/30 hidden sm:block"></span>
              <span className="font-['Inter'] text-xs text-slate-400 uppercase tracking-widest font-semibold">Audio & Video Content</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The TIMING HOUR Feature Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#10213D]/70 via-[#142A4A]/50 to-[#0A1628]/95 border border-[#1C3055] hover:border-[#FFD700]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-['Inter'] text-xs text-[#FFD700] font-bold tracking-wider uppercase block">Guest Luminary Experts</span>
                <h4 className="font-['Outfit'] text-2xl text-white font-semibold">The TIMING HOUR</h4>
                <p className="font-['Inter'] text-sm md:text-base text-slate-300 font-light leading-relaxed">
                  Deep-dive interviews and strategic masterclasses with industry luminaries, institutional asset operators, and cycle technicians who have mastered the art of market execution.
                </p>
              </div>

              {/* Premium interactive video placeholder container */}
              <div className="relative w-full h-64 bg-[#0A1628]/90 rounded-xl overflow-hidden border border-[#1C3055] flex items-center justify-center group/player shadow-inner">
                {/* Audio waves visual elements in the background */}
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-10 px-8">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-[#FFD700] rounded-full transition-all duration-300"
                      style={{ 
                        height: `${Math.floor(Math.random() * 80) + 10}%`,
                      }}
                    ></div>
                  ))}
                </div>
                {/* Foreground visual deck */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#10213D]/40 to-transparent z-0"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1C3055]/90 border border-[#F6C542]/40 text-[#FFCF40] flex items-center justify-center mx-auto group-hover/player:bg-[#FFCF40] group-hover/player:text-[#0A1628] group-hover/player:scale-105 transition-all duration-300 shadow-lg shadow-[#0A1628]">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-['Outfit'] text-sm font-semibold tracking-wide text-white block">Episode Masterclass Series</span>
                    <span className="font-['Inter'] text-xs text-slate-500 uppercase tracking-widest block">Broadcast launching Fall 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vibe It Up Series Feature Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#10213D]/70 via-[#142A4A]/50 to-[#0A1628]/95 border border-[#1C3055] hover:border-[#FFD700]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-['Inter'] text-xs text-[#FFD700] font-bold tracking-wider uppercase block">Multiple Streams</span>
                <h4 className="font-['Outfit'] text-2xl text-white font-semibold">Vibe It Up Series</h4>
                <p className="font-['Inter'] text-sm md:text-base text-slate-300 font-light leading-relaxed">
                  An exploration of holistic energy frameworks, vitality preservation for business leaders, high-frequency thinking patterns, and the integration of sustainable wealth mechanics.
                </p>
              </div>

              {/* Premium interactive player placeholder container */}
              <div className="relative w-full h-64 bg-[#0A1628]/90 rounded-xl overflow-hidden border border-[#1C3055] flex items-center justify-center group/player shadow-inner">
                {/* Audio waves visual elements in the background */}
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-10 px-8">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-[#FFD700] rounded-full"
                      style={{ 
                        height: `${Math.floor(Math.random() * 80) + 10}%`,
                      }}
                    ></div>
                  ))}
                </div>
                {/* Foreground visual deck */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#10213D]/40 to-transparent z-0"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1C3055]/90 border border-[#F6C542]/40 text-[#FFCF40] flex items-center justify-center mx-auto group-hover/player:bg-[#FFCF40] group-hover/player:text-[#0A1628] group-hover/player:scale-105 transition-all duration-300 shadow-lg shadow-[#0A1628]">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-['Outfit'] text-sm font-semibold tracking-wide text-white block">Integrative Bio-Metrics Segment</span>
                    <span className="font-['Inter'] text-xs text-slate-500 uppercase tracking-widest block">Broadcast launching Fall 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
    </div>
  );
}