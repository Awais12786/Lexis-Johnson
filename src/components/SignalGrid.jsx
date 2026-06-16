export default function SignalGrid() {
  return (
    <section id="signal-grid" className="py-16 md:py-32 bg-[#0A1628] relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">arrow_forward</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">MOVE</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">The window is open and the market is ready. This is the signal for launching, promoting, and selling, while the door stays open.</p>
          </div>
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">pause</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">PAUSE</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">Wait for the dust to settle. Conserve energy. Observation is the only move.</p>
          </div>
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">sync</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">REPOSITION</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">The angle has shifted. Adjust your stance. The current approach is hitting a wall that timing built.</p>
          </div>
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">campaign</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">PROMOTE</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">The spotlight is on. Amplify your reach. This is the moment where every dollar spent on attention returns ten.</p>
          </div>
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">drag_handle</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">WAIT</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">The signal is mixed. Observation is the only move. Forcing a result now will only lead to a leak.</p>
          </div>
          <div className="glass-card p-6 rounded-lg text-center shadow-[0_0_15px_rgba(255,225,109,0.05)]">
            <span className="material-symbols-outlined text-4xl md:text-[48px] text-secondary-fixed mb-3">front_hand</span>
            <h3 className="font-display-lg text-lg md:text-xl text-secondary-fixed mb-2">STOP FORCING</h3>
            <p className="font-body-md font-light leading-[1.6em] text-sm text-on-surface-variant">Resistance is systemic. Withdraw and redirect. You are pushing against a tide that isn't turning today.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
