export default function SignalGrid() {
  return (
    <section id="signal-grid" className="py-16 md:py-32 bg-transparent relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
        <h2 className="font-display-lg text-3xl md:text-5xl text-secondary-fixed mb-12">The Three Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-12">
          <div className="glass-card p-8 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)] flex flex-col h-full">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-4">public</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">Tier 1 — Environmental Intelligence</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm md:text-base text-on-surface-variant flex-grow">The global cycle map. See what the macro environment is doing right now and for the next twelve months, done for you.</p>
          </div>
          <div className="glass-card p-8 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)] flex flex-col h-full">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-4">account_circle</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">Tier 2 — Personal And Company Compatibility</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm md:text-base text-on-surface-variant flex-grow">Everything in Tier 1 plus a personal and company timing overlay, so you can see whether the global window is also your window.</p>
          </div>
          <div className="glass-card p-8 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)] flex flex-col h-full">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-4">account_tree</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">Tier 3 — Multi-Entity Strategic Alignment</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm md:text-base text-on-surface-variant flex-grow">Everything in Tier 2 plus comparative reports across multiple entities at once, including stocks, partners, offers, launches, and business decisions for founders and investors managing more than one moving part.</p>
          </div>
        </div>
        <a href="https://user-dashboard-timingaggregator.replit.app/" target="_blank" rel="noopener noreferrer" className="btn-gold font-body-lg uppercase tracking-widest font-bold px-10 py-4 rounded-sm inline-block">
          Access TAGG Now
        </a>
      </div>
    </section>
  );
}
