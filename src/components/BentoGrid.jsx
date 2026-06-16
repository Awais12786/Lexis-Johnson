export default function BentoGrid() {
  return (
    <section id="problem-grid" className="py-16 md:py-32 bg-[#142038] relative border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-16">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">sell</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Offer</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The offer changed, the price changed, the promise got sharper, and the result stayed exactly the same. Something else was driving the outcome the whole time.</p>
          </div>
          {/* Card 2 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">filter_alt</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Funnel</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The landing page was perfect, the emails were tight, the traffic was warm, and the needle didn't move.</p>
          </div>
          {/* Card 3 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">my_location</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Niche</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The market was blue ocean, the demand was high, the competitors were slow, and the sales were stagnant.</p>
          </div>
          {/* Card 4 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">hub</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Platform</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The reach was massive, the algorithm was friendly, the engagement was peaked, and the profit was absent.</p>
          </div>
          {/* Card 5 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">handshake</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Coach</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The strategy was proven, the mastermind was elite, the accountability was high, and the friction remained.</p>
          </div>
          {/* Card 6 */}
          <div className="glass-card p-8 rounded-lg flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl md:text-[64px] text-secondary-fixed mb-4">payments</span>
            <h3 className="font-display-lg text-xl md:text-2xl text-secondary-fixed mb-4">New Price</h3>
            <p className="font-body-md font-light leading-[1.6em] text-on-surface-variant">The margins were high, the value was clear, the friction was low, and the buyer was missing.</p>
          </div>
        </div>
        <div className="text-center">
          <p className="font-display-lg text-2xl md:text-3xl font-bold italic text-secondary-fixed">
            "None of these were the real problem. The timing was."
          </p>
        </div>
      </div>
    </section>
  );
}
