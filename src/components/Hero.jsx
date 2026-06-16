export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 z-10">
          <h1 className="font-display-lg text-4xl md:text-[64px] leading-tight font-bold text-secondary-fixed drop-shadow-lg">
            Stop Guessing<br/>When To Move
          </h1>
          <p className="font-body-lg font-light text-lg text-on-surface-variant max-w-lg leading-[1.6em]">
            Every window for the next twelve months, mapped and waiting inside the app, before the calendar gets there. No charts to read, no terms to learn, just the year laid out in advance.
          </p>
          <a href="https://go.hi-ha.org/GIFT-TAGG" target="_blank" rel="noopener noreferrer" className="btn-gold font-body-lg uppercase tracking-widest font-bold px-10 py-4 rounded-sm inline-block">
            Show Me My Year
          </a>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent z-10"></div>
          <img alt="Golden clock blending" className="w-full h-full object-cover rounded-lg opacity-90 img-blend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuK4TdkE7YISDakOiQ9KeMrCqc1YOLZWuW-0038_ULIw-IScBIqF0xZsdTb3WzPVFUAfHJOajNNuBVlkvAzMJMaXgf8SN5f1qJxoSUQocG0ZhdgxiCw-Vsmt4pn_PC0Pv0XJWVbKMorz0_f4wk_e7Z3eDnLFG1AkjKMrWc2BnjZbKwm4__FMyd6QdyUbFD1KI7BZUxYooFH4lZ7tj0iHrDeqwPql9we9jxSLWB3HQspCD3tUOF5g_6KZB3ehB5FsV6vTzw4MiMWA"/>
        </div>
      </div>
    </section>
  );
}
