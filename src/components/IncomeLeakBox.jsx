export default function IncomeLeakBox() {
  return (
    <section className="py-16 md:py-32 bg-transparent relative border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display-lg text-3xl md:text-4xl text-gray-200 mb-6">Still Wide Awake At 3 AM Over This?</h2>
            <p className="font-body-lg font-light leading-[1.6em] text-on-surface-variant mb-8">
              Ten questions, a few minutes, and one written report that names the exact window where income has been quietly leaking, the kind of leak that survives a new offer, a new funnel, and a new coach because none of those ever touched it. By morning, the leak has a name and a fix.
            </p>
            <a href="https://go.hi-ha.org/3AMAnswer" target="_blank" rel="noopener noreferrer" className="btn-gold font-body-lg uppercase tracking-widest font-bold px-8 py-3 rounded-sm inline-block">
              Find My Leak
            </a>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <img alt="3AM visualization" className="w-full h-full object-cover img-blend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2oLuhxGYdZEXakDlLfUB2b9jLQRNMCoberU7xdY3o-EMiS7lbpytLXZ8TYt9kdHBWDDr_PPqyt0M6ttqJ9wPLMk2gggkKPLl7OvwgEIXvg96QsTA1RFG6lHjk2K28LL02autdoln6Jb9QyGZBzHkjPkttYfCkqbWpOLsPQmJS2TcmPxQIWvLero9x0hFa_PFqZXL7lS4V4sDA1nZe6925bdPRIY8Dxeq3UTb1awuPWnMdoY7RBkJz2p15Tb1plo1VQteyP3i30A"/>
          </div>
        </div>
      </div>
    </section>
  );
}
