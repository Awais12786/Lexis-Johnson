export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1440px] mx-auto">
        <div className="font-display-lg text-2xl md:text-3xl text-secondary-fixed-dim tracking-tighter">
          Chronos Elite
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-body-md uppercase tracking-widest text-secondary-fixed border-b border-secondary-fixed pb-1" href="#">Intelligence</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">The Signal</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">VIP Gate</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Founder</a>
        </div>
        <div className="hidden md:block">
          <a href="#strategic-application-gateway" className="font-body-md uppercase tracking-widest border border-secondary-fixed/50 text-secondary-fixed px-6 py-2 rounded transition-colors hover:bg-secondary-fixed hover:text-[#0A1628] inline-block">Secure Access</a>
        </div>
      </div>
    </nav>
  );
}
