export default function RevealBox() {
  return (
    <section className="py-16 md:py-32 max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="glass-card rounded-xl p-8 md:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <h2 className="font-display-lg text-3xl md:text-5xl text-secondary-fixed mb-8 leading-tight">
              Same Effort. Same Offer. Different Result. Why?
            </h2>
            <p className="font-body-lg font-light text-lg text-on-surface-variant mb-6 leading-[1.6em]">
              The forces that move the biggest markets in the world move smaller ones too, on the same schedule, every week, including a launch, a trade, a sales call, or a hiring decision. Each one sits inside a window that opens and closes on a timetable that has nothing to do with effort. Inconsistent results come from misread timing.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[#0A1628] opacity-20 z-10 mix-blend-overlay"></div>
            <img alt="Market graph visualization" className="w-full h-full object-cover img-blend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRmSj7L1ffkOO7c7D1lBaVTglzWls6O9NLhFTuXuBEv8tZD4Xe-cBt-U9J6gT_dqJgK5fUU5_OwrbVkuoRZFn_JYE-TxR7Rt6RYjud-7lpGU5S1PGsQx5MxpNua8lw3tS0IzBWUgn_ILq3xPvjsC5WFUYaeD8viMwZrrW-xyUfn-V0C4RTdD--z9ma2gQN59eP6bP-48dEM2xVIhV5afNWT3SUd-hnFmgPeA1wcxM7kI4vhPVaiazC8Oi40-73HlD-mUwg8mfeQ"/>
          </div>
        </div>
      </div>
    </section>
  );
}
