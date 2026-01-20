
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="hero-gradient min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Your Trusted Florida Roofing Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Expert Roofing Services in <br/>
              <span className="text-primary italic">Central and Western Florida</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Specializing in shingle, tile, metal, and flat roofs. We use only the highest quality materials and are committed to your satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="inline-flex justify-center items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1" href="#estimate">
                Get a Free Estimate
              </a>
              <a className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1" href="#gallery">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
