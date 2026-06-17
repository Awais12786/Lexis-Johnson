export default function Contact() {
  const directLinks = [
    {
      label: "For App Access",
      display: "TAGG Dashboard",
      href: "https://user-dashboard-timingaggregator.replit.app/",
      external: true,
    },
    {
      label: "For The Free Newsletter",
      display: "Substack Subscribe",
      href: "https://lexisjohnson.substack.com/subscribe",
      external: true,
    },
    {
      label: "For Media & Partnership Inquiries",
      display: "lexis@hi-ha.org",
      href: "mailto:lexis@hi-ha.org",
      external: false,
    },
    {
      label: "For Business Timing Diagnostic (Paid Offer)",
      display: "Book Your Session",
      href: "https://link.fastpaydirect.com/payment-link/699f694a3d6eee503bd08861",
      external: true,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(16,33,61,0.6)] rounded-full blur-[120px] pointer-events-none opacity-60 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(20,42,74,0.5)] rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display-lg text-white tracking-tight leading-tight">
            Connect With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40]">
              Lexis Johnson
            </span>
          </h1>
          <p className="text-xl text-slate-300 font-body-md font-light max-w-2xl mx-auto">
            Where are you seeing timing resistance right now?
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* LEFT COLUMN — Direct Access Directory */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-sm font-body-md font-semibold tracking-[0.2em] uppercase text-[#FFD700] mb-8 pb-3 border-b border-[#142A4A]">
              Direct Access Directory
            </h2>

            {directLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-5 rounded-xl bg-[#10213D]/40 border border-[#142A4A] hover:border-[#FFD700]/30 hover:bg-[#10213D]/60 transition-all"
              >
                {/* Gold diamond icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="8" y="0" width="11.3" height="11.3" rx="1.5" transform="rotate(45 8 0)" fill="url(#gold-grad)" />
                    <defs>
                      <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F6C542" />
                        <stop offset="100%" stopColor="#FFCF40" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-body-md mb-1">{item.label}</p>
                  <p className="text-white font-body-md font-medium group-hover:text-[#FFCF40] transition-colors">{item.display}</p>
                </div>
                {item.external && (
                  <svg className="ml-auto flex-shrink-0 w-4 h-4 text-slate-500 group-hover:text-[#FFD700] transition-colors mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* RIGHT COLUMN — Application Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#10213D]/70 to-[#0A1628]/90 border border-[#142A4A] shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-display-lg text-white mb-2">
                Connect With Lexis Johnson And The Timing Aggregator™
              </h2>
              <p className="text-slate-400 font-body-md font-light mb-8 text-sm">
                For serious inquiries only. All submissions are reviewed personally.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white placeholder-slate-500 text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white placeholder-slate-500 text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Business / Industry */}
                  <div className="space-y-2">
                    <label htmlFor="business" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Business / Industry</label>
                    <input
                      id="business"
                      type="text"
                      placeholder="e.g. Real Estate, SaaS, Finance"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white placeholder-slate-500 text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all"
                    />
                  </div>

                  {/* Current Website */}
                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Current Website</label>
                    <input
                      id="website"
                      type="url"
                      placeholder="https://yoursite.com"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white placeholder-slate-500 text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <label htmlFor="timingQuestion" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Your Timing Challenge</label>
                  <textarea
                    id="timingQuestion"
                    rows={4}
                    placeholder="What decision, launch, offer, investment, or growth issue are you trying to time?"
                    className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white placeholder-slate-500 text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Offer Interest */}
                  <div className="space-y-2">
                    <label htmlFor="offerInterest" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Offer Interest</label>
                    <select
                      id="offerInterest"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0A1628]">Select an offer…</option>
                      <option value="tagg-access" className="bg-[#0A1628]">TAGG Platform Access</option>
                      <option value="timing-diagnostic" className="bg-[#0A1628]">Business Timing Diagnostic</option>
                      <option value="newsletter" className="bg-[#0A1628]">Free Newsletter</option>
                      <option value="institutional" className="bg-[#0A1628]">Institutional / Enterprise</option>
                      <option value="media" className="bg-[#0A1628]">Media & Partnership</option>
                      <option value="other" className="bg-[#0A1628]">Other</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <label htmlFor="budgetRange" className="block text-xs font-body-md font-semibold tracking-widest uppercase text-[#FFD700]">Budget Range</label>
                    <select
                      id="budgetRange"
                      className="w-full px-4 py-3 bg-[#0A1628]/70 border border-[#142A4A] rounded-lg text-white text-sm font-body-md focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0A1628]">Select a range…</option>
                      <option value="under-1k" className="bg-[#0A1628]">Under $1,000</option>
                      <option value="1k-5k" className="bg-[#0A1628]">$1,000 – $5,000</option>
                      <option value="5k-15k" className="bg-[#0A1628]">$5,000 – $15,000</option>
                      <option value="15k-50k" className="bg-[#0A1628]">$15,000 – $50,000</option>
                      <option value="50k-plus" className="bg-[#0A1628]">$50,000+</option>
                      <option value="institutional" className="bg-[#0A1628]">Institutional / Custom</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40] text-[#0A1628] font-body-md font-bold text-sm tracking-widest uppercase rounded-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
