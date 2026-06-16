import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1440px] mx-auto">
        <div className="font-display-lg text-2xl md:text-3xl text-secondary-fixed-dim tracking-tighter">
          Chronos Elite
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-body-md uppercase tracking-widest text-secondary-fixed border-b border-secondary-fixed pb-1" href="#">Intelligence</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">The Signal</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">VIP Gate</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Founder</a>
        </div>
        <div className="hidden md:block">
          <a href="#strategic-application-gateway" className="font-body-md uppercase tracking-widest border border-secondary-fixed/50 text-secondary-fixed px-6 py-2 rounded transition-colors hover:bg-secondary-fixed hover:text-[#0A1628] inline-block">Secure Access</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden text-secondary-fixed p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          <a className="font-body-md uppercase tracking-widest text-secondary-fixed" href="#" onClick={() => setIsOpen(false)}>Intelligence</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant" href="#" onClick={() => setIsOpen(false)}>The Signal</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant" href="#" onClick={() => setIsOpen(false)}>VIP Gate</a>
          <a className="font-body-md uppercase tracking-widest text-on-surface-variant" href="#" onClick={() => setIsOpen(false)}>Founder</a>
          <a href="#strategic-application-gateway" className="font-body-md uppercase tracking-widest border border-secondary-fixed/50 text-secondary-fixed px-6 py-3 rounded text-center transition-colors hover:bg-secondary-fixed hover:text-[#0A1628] mt-4" onClick={() => setIsOpen(false)}>Secure Access</a>
        </div>
      )}
    </nav>
  );
}
