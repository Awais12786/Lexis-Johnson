export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 bg-[#050B14] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10">
        <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-lg text-2xl text-secondary-fixed mb-4 md:mb-0">
            The Timing Aggregator™
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="font-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Privacy Protocol</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Terms of Service</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Institutional Access</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Press Kit</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Methodology</a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 text-center mt-8 font-body-md font-light text-on-surface-variant/60">
          © 2024 The Timing Aggregator™. All rights reserved. Precise timing for the global elite.
        </div>
      </div>
    </footer>
  );
}
