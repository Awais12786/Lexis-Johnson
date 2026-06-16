import React, { useState } from 'react';

export default function AuditForm() {
  // Form input state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    industry: '',
    website: '',
    leakDescription: '',
    offerInterest: '',
    budgetRange: ''
  });

  // State for form errors, loader, and dynamic success screens
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    
    // Corporate email check
    if (!formData.email.trim()) {
      tempErrors.email = "Corporate email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.industry.trim()) tempErrors.industry = "Business type/industry is required";
    if (!formData.website.trim()) tempErrors.website = "Website URL is required";
    if (!formData.leakDescription.trim()) tempErrors.leakDescription = "Please describe your primary operational leak";
    if (!formData.offerInterest) tempErrors.offerInterest = "Please select an offer of interest";
    if (!formData.budgetRange) tempErrors.budgetRange = "Please select your budget range";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Real-time error removal
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate highly secure API call with luxury gold loader transition
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Generate a random high-ticket VIP application ID for realism
        const randomId = 'CHRONOS-VIP-' + Math.floor(1000 + Math.random() * 9000);
        setApplicationId(randomId);
      }, 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      industry: '',
      website: '',
      leakDescription: '',
      offerInterest: '',
      budgetRange: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="strategic-application-gateway" className="py-32 bg-[#0A1628] w-full px-6 md:px-8 lg:px-16 relative overflow-hidden scroll-mt-24">
      
      {/* Background ambient glow for premium design aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffe16d] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Split Card Container */}
        <div className="flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#050B14]">
          
          {/* LEFT COLUMN: Context & Trust-Building Elements */}
          <div className="lg:w-[40%] relative p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#142038] to-[#0A1628]">
            
            {/* Subtle overlay decorative pattern */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[200px] -mr-10 -mb-10 text-secondary-fixed">
                analytics
              </span>
            </div>

            <div className="relative z-10">
              <h2 className="font-display-lg text-3xl md:text-4xl text-secondary-fixed mb-6 leading-tight font-bold tracking-tight">
                Application Gateway
              </h2>
              <p className="font-body-md text-on-surface-variant font-light leading-relaxed mb-10 text-sm">
                Secure your 12-month operational blueprint. Please provide detailed corporate information so we can accurately assess your timing and operational friction.
              </p>

              {/* Dynamic Trust Vectors */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed">person_check</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-on-surface text-sm mb-1">Personal Review</h4>
                    <p className="font-body-md text-xs text-on-surface-variant/70">Every application is directly reviewed by Lexis Johnson.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed">shield_lock</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-on-surface text-sm mb-1">Strict Confidentiality</h4>
                    <p className="font-body-md text-xs text-on-surface-variant/70">Your corporate data and operational leaks are kept 100% private.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-on-surface text-sm mb-1">Response Time</h4>
                    <p className="font-body-md text-xs text-on-surface-variant/70">Allow 48-72 hours for an initial assessment response.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form Interface */}
          <div className="lg:w-[60%] p-10 lg:p-14 bg-[rgba(20,32,56,0.3)] backdrop-blur-xl relative flex flex-col justify-center min-h-[550px]">
            
            {}
            {isSubmitted ? (
              <div className="text-center py-8 px-4 animate-fadeIn">
                <div className="w-20 h-20 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">verified_user</span>
                </div>
                <h3 className="font-display-lg text-2xl md:text-3xl text-secondary-fixed mb-4">
                  Application Locked & Secured
                </h3>
                <p className="font-body-lg text-sm text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.fullName}</span>. Your operational dossier has been successfully transmitted via our secure protocol.
                </p>
                
                {/* Visual Security Badge with ID */}
                <div className="inline-block bg-[#050B14] border border-white/10 rounded-lg px-6 py-3 mb-8">
                  <span className="block text-[10px] tracking-widest text-on-surface-variant/50 uppercase font-mono">Reference Code</span>
                  <span className="font-mono text-secondary-fixed text-lg font-bold tracking-wider">{applicationId}</span>
                </div>

                <p className="text-xs text-on-surface-variant/50 mb-8">
                  A verification receipt has been logged to <span className="text-on-surface">{formData.email}</span>. Lexis Johnson will begin review within 48 hours.
                </p>

                <button 
                  onClick={handleReset}
                  className="font-body-md text-xs uppercase tracking-widest text-secondary-fixed border-b border-secondary-fixed/30 hover:border-secondary-fixed pb-0.5 transition-all"
                >
                  Submit Another Dossier
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Form fields in a 2-column grid system */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name input */}
                  <div className="space-y-1.5">
                    <label className="block font-body-md text-xs text-on-surface-variant">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className={`w-full bg-[#0A1628]/50 border ${errors.fullName ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all`}
                    />
                    {errors.fullName && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Corporate Email input */}
                  <div className="space-y-1.5">
                    <label className="block font-body-md text-xs text-on-surface-variant">Corporate Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com" 
                      className={`w-full bg-[#0A1628]/50 border ${errors.email ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all`}
                    />
                    {errors.email && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.email}</p>}
                  </div>

                  {/* Business Type input */}
                  <div className="space-y-1.5">
                    <label className="block font-body-md text-xs text-on-surface-variant">Business Type / Industry</label>
                    <input 
                      type="text" 
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      placeholder="e.g. SaaS, Consulting" 
                      className={`w-full bg-[#0A1628]/50 border ${errors.industry ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all`}
                    />
                    {errors.industry && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.industry}</p>}
                  </div>

                  {/* Website URL input */}
                  <div className="space-y-1.5">
                    <label className="block font-body-md text-xs text-on-surface-variant">Website / Profile URL</label>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://company.com" 
                      className={`w-full bg-[#0A1628]/50 border ${errors.website ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all`}
                    />
                    {errors.website && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.website}</p>}
                  </div>
                </div>

                {/* Primary Operational Leak description textarea */}
                <div className="space-y-1.5">
                  <label className="block font-body-md text-xs text-on-surface-variant">Where is your primary operational leak right now?</label>
                  <textarea 
                    rows="3" 
                    name="leakDescription"
                    value={formData.leakDescription}
                    onChange={handleInputChange}
                    placeholder="Describe the friction or bottleneck in your business operations..." 
                    className={`w-full bg-[#0A1628]/50 border ${errors.leakDescription ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3.5 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all resize-none`}
                  ></textarea>
                  {errors.leakDescription && <p className="text-[#ff5e5e] text-[11px] font-light mt-0.5">{errors.leakDescription}</p>}
                </div>

                {/* Dropdowns in a 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  <div className="space-y-1.5 relative">
                    <label className="block font-body-md text-xs text-on-surface-variant">Offer Interest</label>
                    <select 
                      name="offerInterest"
                      value={formData.offerInterest}
                      onChange={handleInputChange}
                      className={`w-full bg-[#0A1628] border ${errors.offerInterest ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Select an offer</option>
                      <option value="Timing Aggregator App">Timing Aggregator App</option>
                      <option value="Private Advisory">Private Advisory</option>
                      <option value="Institutional Audit">Institutional Audit</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-8.5 text-on-surface-variant pointer-events-none">expand_more</span>
                    {errors.offerInterest && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.offerInterest}</p>}
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="block font-body-md text-xs text-on-surface-variant">Budget Range</label>
                    <select 
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className={`w-full bg-[#0A1628] border ${errors.budgetRange ? 'border-[#ff5e5e]' : 'border-white/10'} rounded-lg p-3 font-body-md text-sm text-on-surface focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Select a range</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-8.5 text-on-surface-variant pointer-events-none">expand_more</span>
                    {errors.budgetRange && <p className="text-[#ff5e5e] text-[11px] font-light mt-1">{errors.budgetRange}</p>}
                  </div>
                </div>

                {/* Submit button with high-fidelity loading spinner overlay */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#ffe16d] to-[#e9c400] text-[#0a1628] font-body-lg uppercase tracking-widest font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,225,109,0.2)] hover:shadow-[0_0_30px_rgba(255,225,109,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      {/* Premium elegant loading spinner */}
                      <svg className="animate-spin h-5 w-5 text-[#0a1628]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Encrypting Dossier...</span>
                    </>
                  ) : (
                    <span>Submit Application & Secure Priority</span>
                  )}
                </button>
                
                <p className="text-center font-body-md text-[10px] text-on-surface-variant/50 mt-4 tracking-wider">
                  BY SUBMITTING, YOU AGREE TO THE SECURE PRIVACY PROTOCOL.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
