import React, { useState } from 'react';

export default function BookBundle() {
  const [activeStep, setActiveStep] = useState(1);

  const timelineSteps = [
    {
      id: 1,
      stepNum: "01",
      title: "Foundation",
      subtitle: "The Core Cycle Blueprint (Volume I)",
      shortDesc: "Understand the fundamental mathematics of the 12-month calendar before market forces hit.",
      detailedDesc: "This introductory volume maps out your basic timing windows. Learn to stop forcing sales launches and expansion during naturally restrictive seasonal cycles.",
      status: "UNLOCKED",
      badgeText: "Complimentary with Audit",
      actionText: "Claim My Digital Copy Below",
      icon: "auto_stories",
    },
    {
      id: 2,
      stepNum: "02",
      title: "Expansion",
      subtitle: "Market Entry & Scaling Windows (Volume II)",
      shortDesc: "Spot the precise multi-week windows where launch friction drops to zero.",
      detailedDesc: "We transition from protective timing to offensive timing. Discover how to align product drops and major campaigns with systemic windfalls.",
      status: "SEALED",
      badgeText: "Locked • Requires Gate Approval",
      actionText: "Unlock via Gateway Application",
      icon: "lock",
    },
    {
      id: 3,
      stepNum: "03",
      title: "Acceleration",
      subtitle: "The Velocity Trigger (Volume III)",
      shortDesc: "Isolate and deploy capital only during high-yield velocity signals.",
      detailedDesc: "Deep analysis of the micro-moments. This volume shows you how to execute critical hires and major investments when market momentum is guaranteed to support them.",
      status: "SEALED",
      badgeText: "Locked • Private Advisory",
      actionText: "Request Access via Gate",
      icon: "lock",
    },
    {
      id: 4,
      stepNum: "04",
      title: "Mastery",
      subtitle: "Institutional Timing Aggregator (Volume IV)",
      shortDesc: "Automate your entire executive suite’s decision calendar.",
      detailedDesc: "Written specifically for enterprise founders running multi-department organizations. Bring absolute harmony to your operational schedule.",
      status: "SEALED",
      badgeText: "Locked • Private Advisory",
      actionText: "Request Access via Gate",
      icon: "lock",
    },
    {
      id: 5,
      stepNum: "05",
      title: "Legacy",
      subtitle: "Multigenerational Wealth Cycles (Volume V)",
      shortDesc: "The definitive playbook of fifth-generation cycle intelligence.",
      detailedDesc: "Lexis Johnson's master treatise. A blueprint for asset protection, wealth preservation, and timing market transitions across generational macro tides.",
      status: "SEALED",
      badgeText: "Locked • Elite Membership",
      actionText: "Request Access via Gate",
      icon: "lock",
    }
  ];

  const handleStepClick = (id) => setActiveStep(id);

  const handleActionClick = () => {
    const formElement = document.getElementById('strategic-application-gateway');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#0A1628] border-t border-white/5 relative overflow-hidden">
      
      {/* Ambient Depth Lights */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#ffe16d] opacity-[0.015] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-widest text-[#ffe16d]/70 uppercase block mb-4 font-body-md">
            The Structural Value Ladder
          </span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-[#ffe16d] font-bold leading-tight max-w-3xl mx-auto">
            The System Started With A Book. Now It's Five.
          </h2>
          <p className="font-body-md text-white/60 font-light text-sm max-w-lg mx-auto mt-6">
            Click on any developmental stage of the Timing System below to explore its structural focus and access level.
          </p>
        </div>

        {/* Clean Grid Timeline */}
        <div className="relative max-w-[900px] mx-auto">
          
          {/* Desktop Center Track */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ffe16d]/30 via-white/5 to-transparent -translate-x-1/2 z-0"></div>
          {/* Mobile Left Track */}
          <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ffe16d]/30 via-white/5 to-transparent z-0"></div>

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
                          <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#ffe16d]' : 'text-white/40'}`}>
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
                          ? 'bg-gradient-to-r from-[#ffe16d] to-[#e9c400] border-[#ffe16d] text-[#0A1628] scale-110 ring-4 ring-[#ffe16d]/20' 
                          : 'bg-[#0A1628] border-white/20 text-white/50 group-hover:border-[#ffe16d]/40'
                      }`}>
                        {step.stepNum}
                      </div>
                    </div>

                    {/* Right Col */}
                    <div className={`text-left ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'} transition-opacity duration-300`}>
                      {!isEven && (
                        <div>
                          <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#ffe16d]' : 'text-white/40'}`}>
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
                          ? 'bg-gradient-to-r from-[#ffe16d] to-[#e9c400] border-[#ffe16d] text-[#0A1628] ring-4 ring-[#ffe16d]/20' 
                          : 'bg-[#0A1628] border-white/20 text-white/50'
                      }`}>
                        {step.stepNum}
                      </div>
                    </div>
                    <div className={`${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300 pt-2`}>
                      <span className={`text-[10px] tracking-widest font-bold uppercase ${step.status === 'UNLOCKED' ? 'text-[#ffe16d]' : 'text-white/40'}`}>
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
                <div className="absolute top-0 right-0 h-[3px] w-32 bg-gradient-to-r from-transparent to-[#ffe16d]"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  
                  {/* Decorative Icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border ${
                    step.status === 'UNLOCKED' 
                      ? 'bg-[#ffe16d]/10 border-[#ffe16d]/30 text-[#ffe16d]' 
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
                        step.status === 'UNLOCKED' ? 'bg-[#ffe16d]/10 text-[#ffe16d]' : 'bg-red-500/10 text-red-400'
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
                        onClick={handleActionClick}
                        className="font-body-md text-xs uppercase tracking-widest text-[#0A1628] bg-[#ffe16d] px-6 py-3 rounded font-bold hover:shadow-[0_0_20px_rgba(255,225,109,0.3)] transition-all"
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