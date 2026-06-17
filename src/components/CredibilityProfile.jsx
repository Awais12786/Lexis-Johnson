import React from 'react';
import LexisImage from "../assets/Lexis1.jpg"; // Aapka import yahan safe hai

export default function CredibilityProfile() {
  // Ab array mein sirf aapke bataye huay 5 points hain
  const marqueeContent = [
    "55,000+ Consultations",
    "•",
    "54 Years of Practice",
    "•",
    "Fifth-Generation Cycle Intelligence",
    "•",
    "Done For You",
    "•",
    "Full Year In Advance",
    "•"
  ];

  return (
    <>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes globalScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes floatingWave {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .run-marquee {
            display: flex;
            width: max-content;
            animation: globalScroll 25s linear infinite; /* Speed adjusted for shorter text */
          }
          .run-wave {
            animation: floatingWave 4.5s ease-in-out infinite;
          }
        `}
      </style>

      <section 
        className="relative z-30 shadow-lg overflow-hidden py-5 run-wave border-y border-black/10"
        style={{ backgroundColor: '#FFD413' }}
      >
        <div className="w-full flex items-center">
          <div className="run-marquee flex items-center gap-12 text-black font-sans text-sm md:text-base font-extrabold uppercase tracking-widest">
            {/* Array ko double map kiya hai taakay bina kisi break ke loop chalta rahay */}
            {[...marqueeContent, ...marqueeContent].map((item, index) => (
              <span key={index} className="whitespace-nowrap flex-shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}