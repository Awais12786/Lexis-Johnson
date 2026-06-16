import HeroImage from "../assets/heroimg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] w-full bg-[#0A1628] overflow-hidden flex items-center pt-28 md:pt-0"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between h-full md:min-h-[80vh]">
        
        {/* Text Column (50% to 55% on desktop) */}
        <div className="w-full md:w-[55%] lg:w-[50%] space-y-8 pb-12 md:py-32 flex-shrink-0 z-30 relative">
          <h1 className="font-display-lg text-4xl md:text-[56px] lg:text-[64px] leading-tight font-bold text-secondary-fixed drop-shadow-lg">
            Stop Guessing
            <br />
            When To Move
          </h1>
          <p className="font-body-lg font-light text-lg text-on-surface-variant max-w-lg leading-[1.6em]">
            Every window for the next twelve months, mapped and waiting inside
            the app, before the calendar gets there. No charts to read, no terms
            to learn, just the year laid out in advance.
          </p>
          <a
            href="https://go.hi-ha.org/GIFT-TAGG"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold font-body-lg uppercase tracking-widest font-bold px-10 py-4 rounded-sm inline-block"
          >
            Show Me My Year
          </a>
        </div>
        
        {/* Image Container for Desktop & Mobile */}
        {/* Switched to pure flex flow, removed absolute and bottom anchoring. Vertically centered with items-center. */}
        <div className="relative w-full md:w-[45%] lg:w-[50%] h-auto z-20 flex items-center justify-end pointer-events-none mt-8 md:mt-0 -mr-4 md:-mr-12 lg:-mr-16">
          
          {/* Gradient Masks (Strict Requirements) */}
          {/* Left edge fade into parent background (Desktop only) */}
          <div 
            className="absolute inset-0 z-30 hidden md:block" 
            style={{ background: 'linear-gradient(to right, #0A1628 0%, transparent 40%)' }}
          ></div>
          
          {/* Bottom edge fade into parent background */}
          <div 
            className="absolute inset-0 z-30" 
            style={{ background: 'linear-gradient(to top, #0A1628 0%, transparent 20%)' }}
          ></div>

          {/* Top edge fade for smooth integration on mobile under the CTA */}
          <div 
            className="absolute inset-0 z-30 md:hidden" 
            style={{ background: 'linear-gradient(to bottom, #0A1628 0%, transparent 30%)' }}
          ></div>

          <img
            alt="Dashboard graphic and golden clock mechanism"
            className="w-full h-auto object-contain object-right"
            src={HeroImage}
          />
        </div>

      </div>
    </section>
  );
}
