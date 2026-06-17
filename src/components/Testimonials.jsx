export default function Testimonials() {
  return (
    <section className="py-16 md:py-32 max-w-[1440px] mx-auto px-6 md:px-16 text-center">
      <div className="mb-16">
        <h2 className="font-display-lg text-3xl md:text-5xl text-secondary-fixed mb-4">Watch The Pattern, Not The Theory.</h2>
        <p className="font-body-lg font-light text-on-surface-variant text-xl uppercase tracking-widest">Proof, Not Promises.</p>
      </div>

      {/* Main Video Embed */}
      <div className="w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,225,109,0.15)] aspect-video bg-[#050B14]">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/ACe9zuNoV_Q?rel=0&modestbranding=1&playsinline=1" 
          title="Main Testimonial Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* 3 Grid Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,225,109,0.1)] aspect-video bg-[#050B14]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/S6HcATdmySo?rel=0&modestbranding=1&playsinline=1" 
            title="Grid Testimonial Video 1"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,225,109,0.1)] aspect-video bg-[#050B14]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/BfKUf9_HPO8?rel=0&modestbranding=1&playsinline=1" 
            title="Grid Testimonial Video 2"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,225,109,0.1)] aspect-video bg-[#050B14]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/FJcoPOMcQ2o?rel=0&modestbranding=1&playsinline=1" 
            title="Grid Testimonial Video 3"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
