export default function RevealBox() {
  return (
    <section id="reveal-box" className="py-16 md:py-32 max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="glass-card rounded-xl p-8 md:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <h2 className="font-display-lg text-3xl md:text-5xl text-secondary-fixed mb-8 leading-tight">
              You Are Not Failing. Your Timing Is Off.
            </h2>
            <div className="font-body-lg font-light text-lg text-on-surface-variant mb-6 leading-[1.6em] space-y-4">
              <p>Most founders adjust their offer, rewrite the copy, switch platforms, hire a new coach, or pour more money into promotion. The results stay inconsistent.</p>
              <p>The missing variable is not always the offer. It is not always the copy. It is not always the funnel.</p>
              <p>The missing variable is the timing layer underneath every decision, the one most business education never mentions and most tools never measure.</p>
              <p>The same action taken in the right window can produce momentum. The same action taken in the wrong window can produce silence. That difference is not luck. It is pattern. Pattern seen in advance becomes leverage.</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-transparent opacity-20 z-10 mix-blend-overlay"></div>
            <img alt="Market graph visualization" className="w-full h-full object-cover img-blend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRmSj7L1ffkOO7c7D1lBaVTglzWls6O9NLhFTuXuBEv8tZD4Xe-cBt-U9J6gT_dqJgK5fUU5_OwrbVkuoRZFn_JYE-TxR7Rt6RYjud-7lpGU5S1PGsQx5MxpNua8lw3tS0IzBWUgn_ILq3xPvjsC5WFUYaeD8viMwZrrW-xyUfn-V0C4RTdD--z9ma2gQN59eP6bP-48dEM2xVIhV5afNWT3SUd-hnFmgPeA1wcxM7kI4vhPVaiazC8Oi40-73HlD-mUwg8mfeQ"/>
          </div>
        </div>
      </div>
    </section>
  );
}
