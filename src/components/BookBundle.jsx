import React, { useState } from 'react';

export default function BookBundle() {
  const [activeStep, setActiveStep] = useState(1);

  const timelineSteps = [
    {
      id: 1,
      stepNum: "01",
      title: "Step 1 — Log In",
      subtitle: "Access Your Dashboard",
      shortDesc: "Create your account and access your dashboard. Your current month chart is already there waiting.",
      detailedDesc: "Create your account and access your dashboard. Your current month chart is already there waiting.",
      status: "UNLOCKED",
      badgeText: "Step 1",
      actionText: "Access The Timing Aggregator™ Now",
      actionLink: "https://user-dashboard-timingaggregator.replit.app/",
      icon: "login",
    },
    {
      id: 2,
      stepNum: "02",
      title: "Step 2 — Read Your Report",
      subtitle: "Done-For-You Cycle Reports",
      shortDesc: "Scroll through your done-for-you cycle reports. No interpretation required.",
      detailedDesc: "Scroll through your done-for-you cycle reports. No interpretation required.",
      status: "UNLOCKED",
      badgeText: "Step 2",
      actionText: "Access The Timing Aggregator™ Now",
      actionLink: "https://user-dashboard-timingaggregator.replit.app/",
      icon: "description",
    },
    {
      id: 3,
      stepNum: "03",
      title: "Step 3 — Act With Certainty",
      subtitle: "Apply The Intelligence",
      shortDesc: "Apply the intelligence to your decisions. Launch in the right window. Hold in the wrong one.",
      detailedDesc: "Apply the intelligence to your decisions. Launch in the right window. Hold in the wrong one. Know the difference before you commit a dollar.",
      status: "UNLOCKED",
      badgeText: "Step 3",
      actionText: "Access The Timing Aggregator™ Now",
      actionLink: "https://user-dashboard-timingaggregator.replit.app/",
      icon: "check_circle",
    }
  ];

  const handleStepClick = (id) => setActiveStep(id);

  const handleActionClick = (step) => {
    if (step.actionLink) {
      window.open(step.actionLink, '_blank', 'noopener,noreferrer');
    } else {
      const formElement = document.getElementById('strategic-application-gateway');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-32 bg-transparent border-t border-white/5 relative overflow-hidden">
      
      {/* Ambient Depth Lights */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FFD700] opacity-[0.015] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-widest text-[#FFD700]/70 uppercase block mb-4 font-body-md">
            How It Works
          </span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-[#FFD700] font-bold leading-tight max-w-3xl mx-auto">
            Three Steps. Full Year. Done.
          </h2>
          <p className="font-body-md text-white/60 font-light text-sm max-w-lg mx-auto mt-6">
            Click on any step below to explore how the Timing System guides your decisions.
          </p>
        </div>

        {/* Clean Grid Timeline */}
        <div className="relative max-w-[900px] mx-auto">
          
          {/* Desktop Center Track */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD700]/30 via-white/5 to-transparent -translate-x-1/2 z-0"></div>
          {/* Mobile Left Track */}
          <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD700]/30 via-white/5 to-transparent z-0"></div>

          <div className="space-y-16 md:space-y-12">
            {timelineSteps.map((step, idx) => {
              const isActive = activeStep === step.id;
              const isEven = idx % 2 === 0;

              return (
                <div key={step.id} className="relative z-10 group cursor-pointer" onClick={() => handleStepClick(step.id)}>
                  
                  {/* Desktop Alternating Layout */}
                  <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-12 items-center">
                    
                    {/* Left Col */}
                    <div className={`text-right ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'} transition-opacity duration-300`}>
                      {isEven && (
                        <div>
                          <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#FFD700]' : 'text-white/40'}`}>
                            {step.badgeText}
                          </span>
                          <h3 className="font-display-lg text-2xl text-white mt-1 mb-2">{step.title}</h3>
                          <p className="font-body-md text-sm text-white/60 font-light">{step.shortDesc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center Node */}
                    <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display-lg text-sm font-bold border transition-all duration-500 shadow-xl ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#FFD700] to-[#F6C542] border-[#FFD700] text-[#0A1628] scale-110 ring-4 ring-[#FFD700]/20' 
                          : 'bg-transparent border-white/20 text-white/50 group-hover:border-[#FFD700]/40'
                      }`}>
                        {step.stepNum}
                      </div>
                    </div>

                    {/* Right Col */}
                    <div className={`text-left ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'} transition-opacity duration-300`}>
                      {!isEven && (
                        <div>
                          <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#FFD700]' : 'text-white/40'}`}>
                            {step.badgeText}
                          </span>
                          <h3 className="font-display-lg text-2xl text-white mt-1 mb-2">{step.title}</h3>
                          <p className="font-body-md text-sm text-white/60 font-light">{step.shortDesc}</p>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Mobile Layout (Left aligned) */}
                  <div className="md:hidden flex gap-6 items-start">
                    <div className="shrink-0 pt-1">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display-lg text-sm font-bold border transition-all duration-500 shadow-lg ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#FFD700] to-[#F6C542] border-[#FFD700] text-[#0A1628] ring-4 ring-[#FFD700]/20' 
                          : 'bg-transparent border-white/20 text-white/50'
                      }`}>
                        {step.stepNum}
                      </div>
                    </div>
                    <div className={`${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300 pt-2`}>
                      <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#FFD700]' : 'text-white/40'}`}>
                        {step.badgeText}
                      </span>
                      <h3 className="font-display-lg text-xl text-white mt-1 mb-2">{step.title}</h3>
                      <p className="font-body-md text-xs text-white/60 font-light">{step.shortDesc}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card Box */}
        <div className="mt-20 max-w-[800px] mx-auto">
          {timelineSteps.map((step) => {
            if (step.id !== activeStep) return null;
            return (
              <div 
                key={step.id} 
                className="bg-[rgba(20,32,56,0.5)] backdrop-blur-xl p-8 md:p-10 rounded-xl border border-white/10 relative overflow-hidden shadow-2xl animate-fadeIn"
              >
                {/* Visual Accent Badge */}
                <div className="absolute top-0 right-0 h-[3px] w-32 bg-gradient-to-r from-transparent to-[#FFD700]"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  
                  {/* Decorative Icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border ${
                    step.status === 'UNLOCKED' 
                      ? 'bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700]' 
                      : 'bg-white/5 border-white/10 text-white/40'
                  }`}>
                    <span className="material-symbols-outlined text-3xl font-light">
                      {step.icon}
                    </span>
                  </div>

                  {/* Details Body */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] tracking-widest bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full uppercase font-mono font-bold">
                        Stage {step.stepNum} 
                      </span>
                      <span className={`text-[10px] tracking-widest px-3 py-1 rounded-full font-bold uppercase font-mono ${
                        step.status === 'UNLOCKED' ? 'bg-[#FFD700]/10 text-[#FFD700]' : 'bg-white/10 text-white/50'
                      }`}>
                        {step.status}
                      </span>
                    </div>

                    <h4 className="font-display-lg text-lg md:text-xl text-white font-bold leading-tight">
                      {step.subtitle}
                    </h4>
                    <p className="font-body-md text-sm text-white/70 leading-relaxed font-light">
                      {step.detailedDesc}
                    </p>

                    {/* CTA Action */}
                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <button 
                        onClick={() => handleActionClick(step)}
                        className="font-body-md text-xs uppercase tracking-widest btn-gold px-6 py-3 rounded font-bold transition-all"
                      >
                        {step.actionText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}