// app/page.tsx
'use client';

import React, { useState, useEffect } from "react";
import { 
  Dumbbell, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Clock, 
  Check, 
  Star, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  TrendingUp,
  Map,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  Target,
  Flame,
  HeartPulse,
  Send,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GYM_CONFIG } from "./config";

// Clean inline SVGs for brand icons to ensure bulletproof builds
const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.885.052 1.02.041 1.583.212 1.953.355a4.708 4.708 0 011.64 1.07 4.708 4.708 0 011.07 1.64c.143.37.314.933.355 1.953.044 1.102.052 1.455.052 3.885 0 2.43-.008 2.784-.052 3.885-.041 1.02-.212 1.583-.355 1.953a4.708 4.708 0 01-1.07 1.64 4.708 4.708 0 01-1.64 1.07c-.37.143-.933.314-1.953.355-1.102.044-1.455.052-3.885.052-2.43 0-2.784-.008-3.885-.052-1.02-.041-1.583-.212-1.953-.355a4.708 4.708 0 01-1.64-1.07 4.708 4.708 0 01-1.07-1.64c-.143-.37-.314-.933-.355-1.953C2.008 15.669 2 15.316 2 12.885c0-2.43.008-2.784.052-3.885.041-1.02.212-1.583.355-1.953a4.708 4.708 0 011.07-1.64 4.708 4.708 0 011.64-1.07c.37-.143.933-.314 1.953-.355C9.016 2.008 9.369 2 11.885 2h.43zM12 7.191a4.809 4.809 0 100 9.619 4.809 4.809 0 000-9.619zm0 7.956a3.148 3.148 0 110-6.296 3.148 3.148 0 010 6.296zm6.404-8.081a.977.977 0 100 1.955.977.977 0 000-1.955z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export default function Home() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Pricing Toggle (Monthly / Annual)
  const [annualBilling, setAnnualBilling] = useState(false);
  
  // FAQs Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Reputation Management Widget State
  const [selectedStars, setSelectedStars] = useState<number | null>(null);
  const [hoverStars, setHoverStars] = useState<number | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    phone: "",
    issue: "Crowd Levels",
    suggestion: ""
  });
  
  // Contact Form State
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    program: "Strength & Conditioning",
    message: ""
  });

  // Handle scroll detection for glass header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Star Rating Click (Reputation Management)
  const handleStarClick = (rating: number) => {
    setSelectedStars(rating);
    if (rating >= 4) {
      // Redirect to Google review page after brief timeout
      setTimeout(() => {
        window.open(GYM_CONFIG.googleMapsLink, "_blank");
        setSelectedStars(null); // Reset
      }, 1500);
    }
  };

  // Handle Negative Feedback Submit via WhatsApp
  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi ROYAL Gym Team,\n\nI want to share feedback regarding my experience.\n\n*Name:* ${feedbackForm.name}\n*Phone:* ${feedbackForm.phone}\n*Concern Area:* ${feedbackForm.issue}\n*Feedback/Suggestion:* ${feedbackForm.suggestion}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${GYM_CONFIG.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setSelectedStars(null);
      setFeedbackForm({ name: "", phone: "", issue: "Crowd Levels", suggestion: "" });
    }, 3000);
  };

  // Handle Main Contact Inquiry
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    
    // Auto-open WhatsApp with form details for quick lead conversion
    const message = `Hi ROYAL Gym,\n\nI am interested in joining. Here are my details:\n\n*Name:* ${contactForm.name}\n*Phone:* ${contactForm.phone}\n*Interested Program:* ${contactForm.program}\n*Message:* ${contactForm.message || "None"}\n\nPlease contact me regarding membership!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${GYM_CONFIG.whatsapp}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setContactForm({ name: "", phone: "", program: "Strength & Conditioning", message: "" });
      setContactSubmitted(false);
    }, 1200);
  };

  // Central Programs Data (from config.ts, but formatted in cards like reference site)
  const promotedPrograms = GYM_CONFIG.programs.slice(0, 3); // Top 3 promoted courses

  return (
    <div className="relative w-full bg-black text-white min-h-screen">
      
      {/* Floating Glass Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-brand-orange font-black text-3xl font-display group-hover:scale-110 transition-transform">⚡</span>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter leading-none font-display uppercase">ROYAL GYM</span>
              <span className="text-brand-orange text-[9px] font-bold tracking-widest leading-none font-display">IIT PREMBAZAR</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">About</a>
            <a href="#programs" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Courses</a>
            <a href="#features" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Why Us</a>
            <a href="#coaches" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Coaches</a>
            <a href="#pricing" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Pricing</a>
            <a href="#reviews" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Reviews</a>
            <a href="#faq" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">FAQ</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors">Contact</a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${GYM_CONFIG.phoneRaw}`} 
              className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{GYM_CONFIG.phone}</span>
            </a>
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold px-6 py-2.5 text-xs uppercase tracking-wider transition-all duration-300"
            >
              Free Trial Pass
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-orange transition-colors p-1"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 border-b border-zinc-800 backdrop-blur-lg"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  About Gym
                </a>
                <a 
                  href="#programs" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  Training Courses
                </a>
                <a 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#coaches" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  Our Trainers
                </a>
                <a 
                  href="#pricing" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  Pricing Plans
                </a>
                <a 
                  href="#reviews" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange border-b border-zinc-800/50"
                >
                  Reviews
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-brand-orange"
                >
                  Contact & Directions
                </a>
                <div className="pt-4 flex flex-col gap-3">
                  <a 
                    href={`tel:${GYM_CONFIG.phoneRaw}`} 
                    className="flex items-center justify-center gap-2 py-3 bg-zinc-900 text-white font-bold rounded-md"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 bg-brand-orange text-white font-extrabold rounded-md uppercase tracking-wider text-xs"
                  >
                    <span>1-Day Free Trial</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section: Giant Textured Headings (CROSS BODY layout style) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
        {/* Real Gym Interior Background instead of blank dark page */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter grayscale contrast-125"
          style={{ backgroundImage: `url('/assets/media__1783278960185.png')` }} 
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Tagline / Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-orange border-b-2 border-brand-orange pb-1">
              {GYM_CONFIG.taglineBengali}
            </span>
          </motion.div>

          {/* Giant Distressed Title Mask (CROSS BODY logo style) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-[10rem] md:text-[13rem] font-black tracking-tighter leading-none select-none text-mask-bg uppercase font-display block"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            ROYAL
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl sm:text-[10rem] md:text-[13rem] font-black tracking-tighter leading-none select-none text-mask-bg uppercase font-display block -mt-4 sm:-mt-10"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            GYM
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm sm:text-base text-gray-400 max-w-xl font-light uppercase tracking-wider"
          >
            Kharagpur's leading bodybuilding powerhouse. 
            <span className="block mt-1 text-white font-bold">IIT Prembazar Gate এর কাছে খড়গপুরের সেরা ফিটনেস হাব।</span>
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold px-10 py-4 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-3"
            >
              <span>CLAIM FREE TRIAL</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#pricing" 
              className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 text-white font-bold px-10 py-4 text-xs uppercase tracking-widest border border-zinc-800 transition-colors flex items-center justify-center"
            >
              <span>EXPLORE PLANS</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Slogans Banner strip (CROSS BODY branding updates) */}
      <div className="relative py-4 bg-brand-orange overflow-hidden border-y-2 border-black z-20">
        <div className="animate-scroll whitespace-nowrap flex gap-8 select-none">
          {Array(8).fill([
            "STAY IN SHADOW, UNTIL IT'S TIME",
            "BE SAVAGE, NOT AVERAGE",
            "BADASS ATHLETICS",
            "FITNESS IS MY THERAPY",
            "SMALL STEPS, BIG RESULTS",
            "CHANGE THE PEOPLE, NOT THE VIBE",
            "I DON'T SWEAT, I SPARKLE",
            "FITNESS IS RESPONSIBILITY",
            "ROYAL GYM • IIT PREMBAZAR"
          ]).flat().map((text, idx) => (
            <span key={idx} className="text-black font-black text-xs sm:text-base uppercase tracking-widest mx-4 flex items-center gap-2 font-display">
              <span>⚡</span> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Promoted Courses / Programs Section using Real Gym Photos */}
      <section id="programs" className="py-24 bg-black border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
              PROMOTED COURSES
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light uppercase tracking-wider">
              Explore our core targeted programs designed for body transformations.
            </p>
          </div>

          {/* Grid matching the reference promoted course cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {promotedPrograms.map((prog, idx) => (
              <div 
                key={prog.id} 
                className="group relative h-[450px] overflow-hidden rounded-lg border border-zinc-900 transition-all duration-500 hover:border-brand-orange/40"
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity group-hover:opacity-90" />
                
                {/* REAL photos of gym members training instead of Unsplash */}
                <img 
                  src={
                    prog.id === 'strength-training' ? '/assets/media__1783278947334.png' : // Preacher bicep curl
                    prog.id === 'weight-loss' ? '/assets/media__1783278612631.png' : // Girl training chest fly
                    '/assets/media__1783279035621.png' // Woman training core on green turf
                  }
                  alt={prog.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <span className="bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm w-max mb-4">
                    {prog.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                    {prog.name}
                  </h3>
                  <h4 className="text-brand-orange text-xs font-bold mt-1 font-display uppercase tracking-widest">
                    {prog.nameBengali}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-3 line-clamp-3 font-light leading-relaxed">
                    {prog.desc}
                  </p>
                  
                  {/* Action on hover */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                    <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">₹800 / Month</span>
                    <a 
                      href="#contact" 
                      className="text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                    >
                      <span>Join course</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Slogans Inspiration Cards using Real Branding Slogans from posters */}
      <section className="py-20 bg-black border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Slogans Row 1 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">01</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"STAY IN SHADOW, UNTIL IT'S TIME"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">Train hard in silence near Prembazar. Let your physical results make the noise when you step out.</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">02</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"BE SAVAGE, NOT AVERAGE"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">Break past average barriers. Custom progressive lifting templates designed by Head Coach Vikram.</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">03</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"CHANGE THE PEOPLE, NOT THE VIBE"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">Surround yourself with dedicated, motivational peers. We maintain a zero-excuses workout culture.</p>
              </div>
            </div>
          </div>

          {/* Slogans Row 2 */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">04</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"FITNESS IS MY THERAPY"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">De-stress from academic classes and heavy study loads. Release endorphins using our battle rope and cardio setups.</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">05</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"SMALL STEPS, BIG RESULTS"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">Every single progressive overload repetition adds up. Trust our coaches to track your weekly lifts.</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300">
              <span className="text-brand-orange font-black text-4xl font-display leading-none select-none">06</span>
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider font-display mt-4">"I DON'T SWEAT, I SPARKLE"</h3>
                <p className="text-zinc-500 text-xs mt-2 font-light">Workouts styled for power and confidence. Fully hygienic locker and sterile washroom facilities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features & Large Image Cutout Section (using real member photo cutout) */}
      <section id="features" className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Vertically Stacked Points with Red Circular Icons */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-brand-orange font-extrabold uppercase tracking-widest text-xs">
                OUR POWER MATRIX
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display leading-tight">
                WHY TRAIN AT ROYAL GYM
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm mt-3 uppercase tracking-wider font-light">
                Premium services structured to fast-track your physique transformation.
              </p>

              <div className="space-y-8 mt-12">
                
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shrink-0 border border-brand-orange shadow-lg shadow-brand-orange/10">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base uppercase tracking-wider">Expert Coaching Support</h3>
                    <p className="text-zinc-400 text-sm mt-1.5 font-light leading-relaxed">Certified trainers on the floor to correct your lifting mechanics, customize sets, and ensure posture safety.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shrink-0 border border-brand-orange shadow-lg shadow-brand-orange/10">
                    <Dumbbell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base uppercase tracking-wider">Heavy Machinery & Functional Turf</h3>
                    <p className="text-zinc-400 text-sm mt-1.5 font-light leading-relaxed">Top-tier plate-loaded machines, Smith setup, hack squats, and a dedicated green grass functional turf walkway with climbing ropes and battle ropes.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shrink-0 border border-brand-orange shadow-lg shadow-brand-orange/10">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base uppercase tracking-wider">Diet & Nutrition Blueprint</h3>
                    <p className="text-zinc-400 text-sm mt-1.5 font-light leading-relaxed">Detailed calorie macros optimized around typical home-cooked Bengali meals, suitable for student budgets.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shrink-0 border border-brand-orange shadow-lg shadow-brand-orange/10">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base uppercase tracking-wider">100% Safe Ladies Vibe</h3>
                    <p className="text-zinc-400 text-sm mt-1.5 font-light leading-relaxed">Fully CCTV-monitored workout floor, private secure lockers, and a respectful environment for female members.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Large Portrait Cutout Image of real member doing dumbbell press */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -inset-4 bg-brand-orange/5 rounded-3xl blur-3xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl h-[550px] w-full max-w-sm">
                <img 
                  src="/assets/media__1783278721100.png" // Dumbbell overhead shoulder press guy
                  alt="Royal Gym Member Shoulder Press" 
                  className="object-cover w-full h-full filter brightness-95 contrast-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/85 border border-zinc-850 p-5 rounded-lg">
                  <span className="text-brand-orange font-black text-2xl font-display leading-none">REAL WORKOUTS</span>
                  <p className="text-zinc-400 text-xs mt-1 font-light uppercase tracking-wider">খড়গপুরের রয়্যাল ফিটনেস পাওয়ারহাউস।</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Stats Counter Section (Horizontal Strip Style) */}
      <section className="bg-black py-16 border-y border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div>
              <span className="text-white font-black text-4xl sm:text-5xl font-display block leading-none">500M</span>
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-2.5 block">From IIT Gate</span>
            </div>

            <div className="border-l border-zinc-900">
              <span className="text-white font-black text-4xl sm:text-5xl font-display block leading-none">15+</span>
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-2.5 block">Imported Plates</span>
            </div>

            <div className="border-l border-zinc-900">
              <span className="text-white font-black text-4xl sm:text-5xl font-display block leading-none">210+</span>
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-2.5 block">Google Reviews</span>
            </div>

            <div className="border-l border-zinc-900">
              <span className="text-white font-black text-4xl sm:text-5xl font-display block leading-none">100%</span>
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-2.5 block">Raw Grit Vibe</span>
            </div>

          </div>
        </div>
      </section>

      {/* Our Coaches / Trainers Section using Real Trainer Selfies/Portraits */}
      <section id="coaches" className="py-24 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
              MEET THE LEADERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
              OUR COACHES
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light uppercase tracking-wider">
              Train under certified bodybuilders and metabolic experts who guide every repetition.
            </p>
          </div>

          {/* Coaches Grid matching the layout: alternating Row + Card Blocks */}
          <div className="space-y-12">
            
            {/* Coach 1 Block: Left image, right text details */}
            <div className="bg-black border border-zinc-900 rounded-xl overflow-hidden grid md:grid-cols-12 items-stretch hover:border-brand-orange/20 transition-all duration-300">
              <div className="md:col-span-5 h-72 md:h-96 relative">
                <img 
                  src="/assets/media__1783278777056.png" // Arm flex mirror selfie
                  alt="Coach Vikram Sengupta" 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
                />
              </div>
              <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">FOUNDER & HEAD COACH</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mt-2">VIKRAM SENGUPTA</h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-4 font-light leading-relaxed">
                  Vikram has over 10 years of personal training experience helping IIT scholars and local fitness enthusiasts correct physical biomechanics and safe-load squats and deadlifts up to 200kg+.
                </p>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2 italic font-light">
                  "সঠিক ফর্ম আর নিয়মানুবর্তিতা থাকলে যেকোনো গোল অর্জন করা সম্ভব।"
                </p>
                
                {/* Social buttons block in red */}
                <div className="flex gap-2.5 mt-8">
                  <a href="#" className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coaches Row 2: Three columns cards with red blocks at bottom */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Trainer 1 */}
              <div className="bg-black border border-zinc-900 rounded-xl overflow-hidden hover:border-brand-orange/20 transition-all duration-300">
                <div className="h-64 relative">
                  <img 
                    src="/assets/media__1783278661260.png" // Masked muscular guy photo
                    alt="Trainer Rahul Roy" 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-orange font-bold text-[10px] uppercase tracking-widest">STRENGTH COACH</span>
                  <h4 className="text-lg font-black uppercase text-white font-display mt-1">RAHUL ROY</h4>
                  <p className="text-zinc-500 text-xs mt-2 font-light leading-relaxed">Specialist in progressive hypertrophy, barbell mechanics, and powerlifting preparation.</p>
                  
                  {/* Share buttons */}
                  <div className="flex gap-2 mt-5 border-t border-zinc-900 pt-4">
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Trainer 2 */}
              <div className="bg-black border border-zinc-900 rounded-xl overflow-hidden hover:border-brand-orange/20 transition-all duration-300">
                <div className="h-64 relative">
                  <img 
                    src="/assets/media__1783278960185.png" // Gym interior photo representing gym floor
                    alt="Trainer Pooja Sen" 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-orange font-bold text-[10px] uppercase tracking-widest">FAT LOSS SPECIALIST</span>
                  <h4 className="text-lg font-black uppercase text-white font-display mt-1">POOJA SEN</h4>
                  <p className="text-zinc-500 text-xs mt-2 font-light leading-relaxed">Focuses on metabolic conditioning, cardio stamina zones, and specialized female workouts.</p>
                  
                  {/* Share buttons */}
                  <div className="flex gap-2 mt-5 border-t border-zinc-900 pt-4">
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Trainer 3 */}
              <div className="bg-black border border-zinc-900 rounded-xl overflow-hidden hover:border-brand-orange/20 transition-all duration-300">
                <div className="h-64 relative">
                  <img 
                    src="/assets/media__1783278630391.png" // Six pack mirror selfie guy
                    alt="Trainer Amit Das" 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-orange font-bold text-[10px] uppercase tracking-widest">DIETITIAN & NUTRITIONIST</span>
                  <h4 className="text-lg font-black uppercase text-white font-display mt-1">AMIT DAS</h4>
                  <p className="text-zinc-500 text-xs mt-2 font-light leading-relaxed">Designs customizable macro plans using budget-friendly Bengali home-cooked dishes.</p>
                  
                  {/* Share buttons */}
                  <div className="flex gap-2 mt-5 border-t border-zinc-900 pt-4">
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Testimonials ("What People Say") with Desaturated Background Image (using green turf) */}
      <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center">
        {/* Full width backdrop image using actual gym turf walkway */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale contrast-125"
          style={{ backgroundImage: `url('/assets/media__1783278990026.png')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-orange font-black text-sm uppercase tracking-widest font-display">
            WHAT PEOPLE SAY
          </span>
          
          <div className="mt-8">
            <span className="text-5xl text-brand-orange font-serif leading-none">“</span>
            <p className="text-xl sm:text-2xl font-light text-zinc-200 leading-relaxed italic -mt-2">
              "Best gym near IIT Kharagpur campus. পড়াশোনার পাশাপাশি ফিট থাকাটা খুব জরুরি, আর রয়্যাল জিম তার জন্য বেস্ট জায়গা। Trainers are extremely helpful and friendly. Pocket friendly for students."
            </p>
            <div className="mt-6 flex flex-col items-center">
              <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mb-3" />
              <h4 className="font-extrabold text-white uppercase text-sm tracking-wider">Aritra Mukherjee</h4>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">IIT KGP Scholar • Verified Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog/News Section: Numbered Cards Layout (using actual photo updates) */}
      <section id="about" className="py-24 bg-black border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
              LATEST HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
              RECENT BLOG & UPDATES
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light uppercase tracking-wider">
              Follow workout strategies, posture correction guides, and nutrition advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Post 1 */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden group hover:border-brand-orange/20 transition-all duration-300">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="/assets/media__1783278760102.png" // Leg press plate loaded weights
                  alt="Strength Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="p-6 flex gap-4 items-start">
                <span className="text-brand-orange font-black text-3xl font-display leading-none">01</span>
                <div>
                  <h4 className="font-extrabold text-white text-base leading-snug group-hover:text-brand-orange transition-colors">
                    Mastering Squat Form & Spine Safety
                  </h4>
                  <p className="text-zinc-400 text-xs mt-2 font-light leading-relaxed">
                    Learn how the certified trainers at Royal Gym correct your barbell setup and posture to avoid lower back strain.
                  </p>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden group hover:border-brand-orange/20 transition-all duration-300">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="/assets/media__1783278974535.png" // Treadmills room view
                  alt="Fat Loss Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="p-6 flex gap-4 items-start">
                <span className="text-brand-orange font-black text-3xl font-display leading-none">02</span>
                <div>
                  <h4 className="font-extrabold text-white text-base leading-snug group-hover:text-brand-orange transition-colors">
                    Effective Calorie Deficits for Students
                  </h4>
                  <p className="text-zinc-400 text-xs mt-2 font-light leading-relaxed">
                    A realistic guide to structuring high protein weight loss diets using budget-friendly Bengali home-cooked dishes.
                  </p>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden group hover:border-brand-orange/20 transition-all duration-300">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="/assets/media__1783279035621.png" // Woman core workouts on turf
                  alt="Endurance Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
              </div>
              <div className="p-6 flex gap-4 items-start">
                <span className="text-brand-orange font-black text-3xl font-display leading-none">03</span>
                <div>
                  <h4 className="font-extrabold text-white text-base leading-snug group-hover:text-brand-orange transition-colors">
                    CrossFit Metabolic Conditioning Basics
                  </h4>
                  <p className="text-zinc-400 text-xs mt-2 font-light leading-relaxed">
                    Build athletic stamina and core stabilizers using kettlebells, rope drills, and high intensity intervals.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing / Membership Plans Section */}
      <section id="pricing" className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
              MEMBERSHIP BLUEPRINTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
              PRICING PLANS
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light uppercase tracking-wider">
              Simple, transparent pricing built with student discount formats.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-black p-1.5 rounded-full border border-zinc-900">
              <button 
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${!annualBilling ? 'bg-brand-orange text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                Monthly Rates
              </button>
              <button 
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 flex items-center gap-1.5 ${annualBilling ? 'bg-brand-orange text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                <span>Annual Rates</span>
                <span className="bg-red-500 text-white font-black text-[9px] px-1.5 py-0.5 rounded-full">Save ~30%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {GYM_CONFIG.pricingPlans.map((plan) => {
              const price = annualBilling ? plan.priceAnnually : plan.priceMonthly;
              const perMonthEquivalent = annualBilling ? Math.round(plan.priceAnnually / 12) : plan.priceMonthly;
              
              return (
                <div 
                  key={plan.id}
                  className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-300 ${plan.isPopular ? 'bg-black border-2 border-brand-orange shadow-2xl scale-102 z-10' : 'bg-black border border-zinc-900'}`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white font-extrabold uppercase text-[9px] tracking-widest px-4 py-1 rounded-sm border border-black shadow">
                      MOST POPULAR
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wider font-display">{plan.name}</h3>
                    <h4 className="text-[10px] font-bold text-brand-orange mt-1 font-display uppercase tracking-widest">{plan.nameBengali}</h4>
                    
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-zinc-500 font-extrabold text-2xl">₹</span>
                      <span className="text-white font-black text-5xl md:text-6xl tracking-tighter font-display leading-none">{price}</span>
                      <span className="text-zinc-500 text-sm font-semibold">/{annualBilling ? 'yr' : 'mo'}</span>
                    </div>

                    {annualBilling && (
                      <p className="text-brand-orange text-xs font-semibold mt-2">
                        Equivalent to only <span className="font-extrabold">₹{perMonthEquivalent}/month</span>
                      </p>
                    )}

                    <ul className="mt-8 space-y-4 border-t border-zinc-900 pt-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className={`${feature.charCodeAt(0) > 127 ? 'text-zinc-500 italic text-[12px]' : 'text-zinc-300 font-medium'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-900/50">
                    <a 
                      href={`https://wa.me/${GYM_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi Royal Gym, I want to join the membership: ${plan.name} (${annualBilling ? 'Annual' : 'Monthly'} Plan). Please send details!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-sm text-center font-extrabold uppercase tracking-widest text-xs block transition-colors ${plan.isPopular ? 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg' : 'bg-zinc-900 hover:bg-zinc-800 text-white'}`}
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Review Reputation Management Section */}
      <section id="reviews" className="py-24 bg-black border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Star widget */}
            <div className="lg:col-span-5 flex flex-col p-8 rounded-xl bg-zinc-950 border border-zinc-900 shadow-2xl relative">
              <span className="text-brand-orange font-extrabold uppercase tracking-widest text-[10px]">
                SHARE YOUR FEEDBACK
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase mt-2 text-white">
                How Was Your Workout?
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-2 font-light leading-relaxed">
                Your rating helps us optimize machine maintenance & floor assistance in Prembazar.
              </p>

              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverStars(star)}
                    onMouseLeave={() => setHoverStars(null)}
                    className="p-1 transition-transform active:scale-95"
                    aria-label={`Rate ${star} Stars`}
                  >
                    <Star 
                      className={`w-10 h-10 transition-colors ${
                        (hoverStars !== null ? star <= hoverStars : selectedStars !== null ? star <= selectedStars : false)
                          ? 'fill-brand-orange text-brand-orange' 
                          : 'text-zinc-850 hover:text-zinc-650'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="mt-6 min-h-24">
                <AnimatePresence mode="wait">
                  {selectedStars === null && (
                    <p className="text-zinc-500 text-xs italic font-medium">
                      Click a star. 4-5 stars will redirect you to Google. 1-3 stars will open a direct private WhatsApp concern log.
                    </p>
                  )}

                  {selectedStars !== null && selectedStars >= 4 && (
                    <motion.div
                      key="positive"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-emerald-500/10 border border-emerald-500/30 rounded p-4 text-emerald-400"
                    >
                      <p className="text-sm font-bold">🎉 Thank you for {selectedStars} Stars!</p>
                      <p className="text-xs text-zinc-400 mt-1">Redirecting you to our Google Reviews page...</p>
                    </motion.div>
                  )}

                  {selectedStars !== null && selectedStars <= 3 && !feedbackSubmitted && (
                    <motion.div
                      key="negative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/5 border border-red-500/20 rounded p-4"
                    >
                      <p className="text-sm font-bold text-red-400">⚠️ Rating: {selectedStars} Stars.</p>
                      <p className="text-xs text-zinc-400 mt-1">Help us improve. This feedback goes straight to the owner.</p>

                      <form onSubmit={handleFeedbackSubmit} className="mt-4 space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <input 
                            type="text" 
                            placeholder="Name" 
                            required
                            value={feedbackForm.name}
                            onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                            className="bg-black border border-zinc-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                          />
                          <input 
                            type="tel" 
                            placeholder="Phone" 
                            required
                            value={feedbackForm.phone}
                            onChange={(e) => setFeedbackForm({...feedbackForm, phone: e.target.value})}
                            className="bg-black border border-zinc-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                        <select
                          value={feedbackForm.issue}
                          onChange={(e) => setFeedbackForm({...feedbackForm, issue: e.target.value})}
                          className="w-full bg-black border border-zinc-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                        >
                          <option value="Crowd Levels">Peak Hour Crowding</option>
                          <option value="AC / Fan cooling">Air Conditioning / Cooling</option>
                          <option value="Equipment maintenance">Treadmill or Machine Issues</option>
                          <option value="Trainer guidance">Trainer Behavior</option>
                        </select>
                        <textarea 
                          placeholder="Your complaint/suggestion..."
                          required
                          value={feedbackForm.suggestion}
                          onChange={(e) => setFeedbackForm({...feedbackForm, suggestion: e.target.value})}
                          rows={2}
                          className="w-full bg-black border border-zinc-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-orange resize-none"
                        />
                        <button
                          type="submit"
                          className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-2 rounded text-xs uppercase tracking-wider transition-colors"
                        >
                          Send Feedback via WhatsApp
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {feedbackSubmitted && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-4 text-emerald-400">
                      <p className="text-sm font-bold">Feedback Form Formatted!</p>
                      <p className="text-xs text-zinc-400 mt-1 font-light">Redirecting to WhatsApp to send message to the owner...</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Reviews Carousel List */}
            <div className="lg:col-span-7">
              <span className="text-brand-orange font-extrabold uppercase tracking-widest text-sm">
                WHAT MEMBERS SAY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display leading-tight">
                Google Reviews & Feedback
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {GYM_CONFIG.reviews.slice(0, 4).map((rev) => (
                  <div key={rev.id} className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 shadow flex flex-col justify-between hover:border-zinc-800 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold text-xs`}>
                            {rev.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-white text-sm">{rev.name}</h4>
                            <p className="text-zinc-500 text-[10px] font-semibold">{rev.role} • {rev.date}</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {Array(rev.rating).fill(0).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-4 font-light leading-relaxed">
                        "{rev.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Timings & Membership FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-extrabold uppercase tracking-widest text-sm">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
              Timings & Membership FAQ
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light uppercase tracking-wider">
              Browse timings, female safety parameters, and student offers.
            </p>
          </div>

          <div className="space-y-4">
            {GYM_CONFIG.faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              
              return (
                <div 
                  key={idx}
                  className="bg-black border border-zinc-900 rounded-lg overflow-hidden transition-colors hover:border-zinc-850"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div>
                      <span className="block font-extrabold text-white text-sm sm:text-base">{faq.q}</span>
                      <span className="block text-[11px] font-bold text-brand-orange mt-1 font-display tracking-wide">{faq.qBengali}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-zinc-900"
                      >
                        <div className="px-6 py-5 bg-zinc-950/20 space-y-2 text-zinc-400 font-light text-sm sm:text-base">
                          <p>{faq.a}</p>
                          <p className="italic text-zinc-500 text-xs sm:text-sm">{faq.aBengali}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Split Layout Contact & Maps (CROSS BODY style) */}
      <section id="contact" className="py-24 bg-black border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left side: Directions, Landmark details & embedded map */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div>
                <span className="text-brand-orange font-extrabold uppercase tracking-widest text-xs">
                  FIND US ON MAPS
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase mt-2 text-white font-display">
                  OUR LOCATION
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2 uppercase tracking-wider font-light mb-6">
                  Durga Puja Mandap, opposite to Prembazar boundary wall.
                </p>

                {/* Map integration */}
                <div className="rounded-xl overflow-hidden border border-zinc-900 h-80 relative shadow-2xl">
                  <iframe 
                    src={GYM_CONFIG.googleMapsEmbed}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    title="Google Map showing ROYAL Gym Prembazar"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Quick Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-900">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white text-xs uppercase tracking-widest">Address</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1">{GYM_CONFIG.address}</p>
                    <p className="text-zinc-500 text-xs mt-1 italic">{GYM_CONFIG.addressBengali}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white text-xs uppercase tracking-widest">Gym Hours</h4>
                    {GYM_CONFIG.operatingHours.map((oh, i) => (
                      <p key={i} className="text-zinc-400 text-xs sm:text-sm mt-1">
                        <span className="font-bold block">{oh.days}</span>
                        <span>{oh.hours}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Solid black contact form container */}
            <div className="lg:col-span-6 bg-zinc-950 border border-zinc-900 rounded-xl p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-brand-orange font-extrabold uppercase tracking-widest text-xs">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-black uppercase mt-2 text-white font-display">
                CONTACT WITH US
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1 font-light">
                Fill the form. We will coordinate a VIP 1-Day Trial Pass direct to your WhatsApp.
              </p>

              <form onSubmit={handleContactSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest mb-1.5">Your Name</label>
                    <input 
                      id="form-name"
                      type="text" 
                      required
                      placeholder="e.g. Sabyasachi Sen"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full bg-black border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-phone" className="block text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest mb-1.5">Your Phone</label>
                    <input 
                      id="form-phone"
                      type="tel" 
                      required
                      placeholder="e.g. +91 97348 52584"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full bg-black border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-program" className="block text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest mb-1.5">Goal / Program Focus</label>
                  <select
                    id="form-program"
                    value={contactForm.program}
                    onChange={(e) => setContactForm({...contactForm, program: e.target.value})}
                    className="w-full bg-black border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
                  >
                    {GYM_CONFIG.programs.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest mb-1.5">Your Message</label>
                  <textarea 
                    id="form-message"
                    rows={4}
                    placeholder="Tell us about your target goals..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-black border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-4 rounded text-xs uppercase tracking-widest transition-colors"
                >
                  {contactSubmitted ? "Generating Pass link..." : "CLAIM PASS NOW"}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* Horizontal row of square images (Gym Gallery of Official Posters & Moments) */}
      <section className="bg-black border-t border-zinc-900 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          
          <div className="h-64 relative overflow-hidden group">
            <img src="/assets/media__1783278791517.png" alt="Stay In Shadow Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">SHADOW POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278809713.png" alt="Be Savage Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">SAVAGE POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278827880.png" alt="Badass Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">BADASS POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278849047.png" alt="Change Vibe Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">VIBE POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278863456.png" alt="Responsibility Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">FITNESS POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278890368.png" alt="Small Steps Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">RESULTS POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278907833.png" alt="Therapy Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">THERAPY POSTER</span>
            </div>
          </div>

          <div className="h-64 relative overflow-hidden group border-l border-zinc-900">
            <img src="/assets/media__1783278927265.png" alt="Sparkle Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">SPARKLE POSTER</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Footer (CROSS BODY style) */}
      <footer className="bg-black border-t border-zinc-900 py-16 pb-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Col 1: Logo & Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-brand-orange font-black text-3xl">⚡</span>
                <span className="text-white font-black text-xl tracking-tighter font-display uppercase">ROYAL GYM</span>
              </div>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Kharagpur's leading bodybuilding powerhouse. Get high performance coaching, modern machine setups, and customized nutrition blueprints near IIT campus.
              </p>
              <p className="text-zinc-650 text-[10px] mt-4">
                © {new Date().getFullYear()} ROYAL Gym Prembazar. All rights reserved.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">Quick Navigation</h4>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">About Gym</a></li>
                <li><a href="#programs" className="hover:text-brand-orange transition-colors">Courses Offered</a></li>
                <li><a href="#coaches" className="hover:text-brand-orange transition-colors">Our Trainers</a></li>
                <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Membership Plans</a></li>
              </ul>
            </div>

            {/* Col 3: Contact details */}
            <div>
              <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">Contact Info</h4>
              <ul className="space-y-3 text-xs text-zinc-400 font-medium">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`tel:${GYM_CONFIG.phoneRaw}`} className="hover:text-white">{GYM_CONFIG.phone}</a>
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{GYM_CONFIG.address}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Landmarks for SEO */}
            <div>
              <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">Nearby Landmarks</h4>
              <ul className="space-y-2 text-[10px] text-zinc-500 font-medium">
                {GYM_CONFIG.landmarks.map((lm, idx) => (
                  <li key={idx}>• {lm}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900/60 text-center text-[10px] text-zinc-600 font-light">
            Designed for local fitness growth in Prembazar & IIT Campus, Kharagpur. Optimized for Google Maps Local SEO listings.
          </div>

        </div>
      </footer>

      {/* Sticky Mobile CTAs Toolbar (Visible only on mobile/tablet screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-zinc-900 backdrop-blur-lg lg:hidden px-4 py-3.5 shadow-2xl flex items-center justify-between gap-4">
        
        <a 
          href={`tel:${GYM_CONFIG.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center text-zinc-400 hover:text-white"
        >
          <Phone className="w-5 h-5 text-brand-orange" />
          <span className="text-[10px] font-bold uppercase mt-1">Call Now</span>
        </a>

        <a 
          href={`https://wa.me/${GYM_CONFIG.whatsapp}?text=${encodeURIComponent("Hi Royal Gym Prembazar, I have an inquiry about memberships. Please guide me!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center text-zinc-400 hover:text-white border-l border-zinc-900"
        >
          <span className="text-brand-orange font-black text-xs font-display bg-zinc-950 px-2 py-0.5 rounded-full mb-0.5">WA</span>
          <span className="text-[10px] font-bold uppercase mt-0.5">WhatsApp</span>
        </a>

        <a 
          href={GYM_CONFIG.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center text-zinc-400 hover:text-white border-l border-zinc-900"
        >
          <Map className="w-5 h-5 text-brand-orange" />
          <span className="text-[10px] font-bold uppercase mt-1">Directions</span>
        </a>

        <a 
          href="#contact"
          className="flex-2 bg-brand-orange text-white font-extrabold text-xs uppercase px-4 py-2.5 rounded text-center tracking-wider"
        >
          Join Now
        </a>

      </div>

    </div>
  );
}
