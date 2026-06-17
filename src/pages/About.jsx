import React from "react";
import { Link } from "react-router-dom";
import LexisImage from "../assets/Lexis.jpg";
import LexisFallbackImage from "../assets/Lexis1.jpg";

export default function About() {
  const pillars = [
    {
      title: "Business Timing Strategist",
      description: "Creator of The Timing Aggregator™ platform.",
      icon: (
        <svg
          className="w-5 h-5 text-[#FFCF40]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cycle Expert",
      description:
        "Five-Decade Timing Intelligence Expert & Fifth-Generation Cycle Analyst.",
      icon: (
        <svg
          className="w-5 h-5 text-[#FFCF40]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Bestselling Author",
      description:
        "International Bestselling Author & Ghostwriter of 100+ Books for Business Leaders.",
      icon: (
        <svg
          className="w-5 h-5 text-[#FFCF40]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Health",
      description:
        "Double Board-Certified Holistic Health Practitioner & Nutritional Consultant.",
      icon: (
        <svg
          className="w-5 h-5 text-[#FFCF40]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Multi-Industry Operator",
      description:
        "Award-Winning TV Host, Producer, and Multi-Industry Business Operator with extensive experience across Marketing, Commodities, Wealth Management, Spa Ownership, Publishing, Media, and Consulting.",
      icon: (
        <svg
          className="w-5 h-5 text-[#FFCF40]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  return (
    // Starts with a solid #0A1628 to ensure a completely seamless match with the black/deep dark header menu
    <div className="flex flex-col min-h-screen bg-[#0A1628] overflow-hidden -mt-12">
      {/* Decorative background radial glow pushed deep down to avoid color banding right under the header menu */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#1C3055]/40 to-transparent rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-50 z-0"></div>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10 w-full flex flex-col items-center">
        {/* Top Header Section */}
        <div className="text-center mb-16 lg:mb-20 max-w-4xl space-y-5">
          <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            The Authority Behind the Pattern: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40] font-bold">
              Lexis Johnson, PhD
            </span>
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Positioning global founders and institutional investors ahead of
            market pressure through five decades of timing intelligence.
          </p>
        </div>

        {}
        {/* Central Layout: Symmetric Grid containing Left Pillars, Center Image, Right Pillars */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
          {/* LEFT COLUMN: Pillars 1 & 2 (Aligned right to point towards the center on large screens) */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-12 lg:text-right lg:items-end text-center items-center">
            {pillars.slice(0, 2).map((pillar, index) => (
              <div
                key={`left-${index}`}
                className="group flex flex-col lg:items-end items-center max-w-md"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-[#1C3055] to-[#10213D] border border-[#F6C542]/20 flex items-center justify-center shadow-[0_0_15px_rgba(246,197,66,0.05)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:border-[#FFD700] transition-all duration-300">
                  {pillar.icon}
                </div>
                {/* Text Content */}
                <h3 className="font-['Outfit'] text-xl text-white font-semibold mb-2 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base text-slate-300 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN: The Image (Sits perfectly in the middle) */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center relative w-full max-w-[340px] mx-auto z-20 my-6 lg:my-0">
            {/* Offset stylized backdrop to recreate image_89813a.png shadow/depth effect */}
            <div className="absolute top-3 left-3 right-[-0.75rem] bottom-[-0.75rem] bg-[#10213D] rounded-2xl border border-[#1C3055] z-0 shadow-2xl"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#142A4A] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#1C3055]">
              <img
                src={LexisImage}
                alt="Lexis Johnson, PhD"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = LexisFallbackImage;
                }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Pillars 3, 4, & 5 (Aligned left) */}
          <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col gap-12 lg:text-left lg:items-start text-center items-center">
            {pillars.slice(2, 5).map((pillar, index) => (
              <div
                key={`right-${index}`}
                className="group flex flex-col lg:items-start items-center max-w-md"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-[#1C3055] to-[#10213D] border border-[#F6C542]/20 flex items-center justify-center shadow-[0_0_15px_rgba(246,197,66,0.05)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:border-[#FFD700] transition-all duration-300">
                  {pillar.icon}
                </div>
                {/* Text Content */}
                <h3 className="font-['Outfit'] text-xl text-white font-semibold mb-2 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base text-slate-300 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {}
        {/* Centered Action Button below the entire layout */}
        <div className="mt-20 text-center w-full relative z-30">
          <Link
            to="/contact"
            className="inline-block font-['Outfit'] font-bold tracking-wider uppercase text-xs sm:text-sm text-[#0A1628] bg-gradient-to-r from-[#F6C542] via-[#FFD700] to-[#FFCF40] px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Schedule a Consultation
          </Link>
        </div>
      </main>
    </div>
  );
}
