import HeroImage from "../assets/heroimg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] w-full overflow-hidden flex items-center pt-28 md:pt-0"
    >
      <div className="hero-glow"></div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between h-full md:min-h-[80vh]">
        
        {/* Text Column (50% to 55% on desktop) */}
        <div className="w-full md:w-[55%] lg:w-[50%] space-y-8 pb-12 md:py-32 flex-shrink-0 z-30 relative">
          <h1 className="font-display-lg text-4xl md:text-[56px] lg:text-[64px] leading-tight font-bold text-secondary-fixed drop-shadow-lg">
            The Only Platform That Shows You When To Act, Before The Headline Tells You It Was Obvious.
          </h1>
          <p className="font-body-lg font-light text-lg text-on-surface-variant max-w-lg leading-[1.6em]">
            The Timing Aggregator™ delivers a full year of done-for-you cycle intelligence for founders, investors, and coaches who are done reacting and ready to move first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://user-dashboard-timingaggregator.replit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold font-body-lg uppercase tracking-widest font-bold px-10 py-4 rounded-sm inline-block text-center"
            >
              Access TAGG Now
            </a>
            <a
              href="https://lexisjohnson.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline font-body-lg uppercase tracking-widest font-bold px-10 py-4 rounded-sm inline-block text-center"
            >
              Read The Free Newsletter
            </a>
          </div>
        </div>
        
        {/* Image Container for Desktop & Mobile */}
        {/* Switched to pure flex flow, removed absolute and bottom anchoring. Vertically centered with items-center. */}
        <div className="relative w-full md:w-[45%] lg:w-[50%] h-auto z-20 flex items-center justify-end pointer-events-none mt-8 md:mt-0 -mr-4 md:-mr-12 lg:-mr-16 bg-transparent">
          <img
            alt="Dashboard graphic and golden clock mechanism"
            className="w-full h-auto object-contain object-left mix-blend-screen"
            src={HeroImage}
          />
        </div>

      </div>
    </section>
  );
}
