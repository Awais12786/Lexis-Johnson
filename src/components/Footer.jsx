import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const ecosystemPortals = [
    {
      name: "The Timing Aggregator™",
      url: "https://timingaggregator.com",
      description: "Global structural timing aggregator & strategic execution engines."
    },
    {
      name: "Holistica Institute Higher Ascension",
      url: "https://hi-ha.org",
      description: "Advanced bio-energetics, systemic vitality, and executive optimization."
    },
    {
      name: "Coaches Multiple Streams of Income LLC",
      url: "https://avcimp.com",
      description: "Sustainable wealth mechanics, publishing authority, and asset multi-positioning."
    }
  ];

  const quickLinks = [
    { label: "Privacy Protocol", path: "/privacy-protocol", external: false },
    { label: "Terms of Service", path: "/terms-of-service", external: false },
    { label: "Methodology", path: "/methodology", external: false },
    { label: "Press Kit", path: "/press-kit", external: false },
    { label: "Contact", path: "/contact", external: false },
    { label: "Access TAGG", path: "https://user-dashboard-timingaggregator.replit.app/", external: true }
  ];

  return (
    <footer className="w-full bg-[#0A1628] border-t border-[#1C3055]/80 relative overflow-hidden text-slate-100 font-['Inter']">
      
      {/* Custom Styles for premium cards and scrolling marquee */}
      <style>{`
        .premium-card-border {
          background: linear-gradient(135deg, rgba(28,48,85,0.6) 0%, rgba(10,22,40,0.8) 100%);
          border-left: 2px solid #FFCF40;
        }

        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .fluid-wave-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 24s linear infinite;
        }
        
        .fluid-wave-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative premium ambient glow to enhance deep visual depth */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-t from-[#10213D]/40 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50"></div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Lexis Johnson Ecosystem Portals */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-1">
              <h4 className="font-['Outfit'] text-sm font-bold uppercase tracking-[0.2em] text-[#FFD700]">
                Lexis Johnson Ecosystem
              </h4>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
            </div>
            
            <ul className="space-y-6">
              {ecosystemPortals.map((portal, index) => (
                <li key={index} className="transition-all duration-300 transform hover:translate-x-1">
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col space-y-1.5 p-4 rounded-xl premium-card-border hover:bg-[#10213D]/40 transition-colors duration-300"
                  >
                    <span className="font-['Outfit'] text-lg md:text-xl font-bold text-white group-hover:text-[#FFCF40] transition-colors flex items-center gap-2">
                      {portal.name}
                      <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FFCF40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-300 font-light max-w-2xl leading-relaxed">{portal.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Navigation & Protocol Access */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-1">
              <h4 className="font-['Outfit'] text-sm font-bold uppercase tracking-[0.2em] text-[#FFD700]">
                Institutional Navigation
              </h4>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base font-normal text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  {link.external ? (
                    <a 
                      href={link.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group hover:text-[#FFCF40] transition-colors font-semibold flex items-center gap-2 text-base"
                    >
                      {link.label}
                      <span className="text-[10px] bg-[#1C3055] text-[#FFCF40] px-2 py-0.5 rounded font-mono font-black tracking-wider uppercase border border-[#FFCF40]/20 group-hover:border-[#FFD700]">
                        PORTAL
                      </span>
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="relative py-1 hover:text-[#FFCF40] transition-colors duration-300 group text-base"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFCF40] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-xl bg-[#10213D]/20 border border-[#142A4A]/60 space-y-2 mt-6">
              <span className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#FFCF40] block">
                Security Standard
              </span>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                All digital architecture is processed with institutional grade security systems and premium telemetry indicators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE SECTION: Yellow Background with Original Font Size */}
      <div 
        className="w-full border-y border-black/10 py-4 relative z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] overflow-hidden"
        style={{ backgroundColor: '#FFD413' }}
      >
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FFD413] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FFD413] to-transparent z-10 pointer-events-none"></div>
        
        <div className="fluid-wave-marquee cursor-default">
          {/* First Copy */}
          <div className="flex items-center space-x-6 shrink-0 pr-6">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/10 border border-black/20 font-['Outfit'] text-[11px] font-bold uppercase tracking-[0.2em] text-black">
              <span className="mr-2 text-sm leading-none">✦</span> Disclaimer
            </span>
            {/* Font size reverted to text-[13px] sm:text-sm */}
            <span className="text-[13px] sm:text-sm text-black font-light font-['Inter']">
              Lexis Johnson is not a financial advisor. Nothing on this site constitutes financial, legal, or investment advice. The Timing Aggregator™ shows timing patterns. You make the final decisions.
            </span>
            <span className="text-black/40 text-lg ml-6">✦</span>
          </div>
          
          {/* Second Copy for Seamless Loop */}
          <div className="flex items-center space-x-6 shrink-0 pr-6">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/10 border border-black/20 font-['Outfit'] text-[11px] font-bold uppercase tracking-[0.2em] text-black">
              <span className="mr-2 text-sm leading-none">✦</span> Disclaimer
            </span>
            {/* Font size reverted to text-[13px] sm:text-sm */}
            <span className="text-[13px] sm:text-sm text-black font-light font-['Inter']">
              Lexis Johnson is not a financial advisor. Nothing on this site constitutes financial, legal, or investment advice. The Timing Aggregator™ shows timing patterns. You make the final decisions.
            </span>
            <span className="text-black/40 text-lg ml-6">✦</span>
          </div>
        </div>
      </div>

      {/* Copyright Footer Sub-section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="font-['Inter'] tracking-wide">
          © 2026 Lexis Johnson · All Rights Reserved
        </p>
        <div className="flex items-center gap-2 text-slate-600">
          <span className="w-1.5 h-1.5 bg-[#FFCF40]/50 rounded-full animate-pulse"></span>
          <span className="font-['Outfit'] tracking-widest uppercase font-semibold text-[10px]">
            Precise Timing for Global Operators
          </span>
        </div>
      </div>

    </footer>
  );
}