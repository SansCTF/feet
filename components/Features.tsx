
import React from 'react';

const Features: React.FC = () => {
  const highlights = [
    { icon: 'workspace_premium', label: 'Licensed & Insured' },
    { icon: 'verified', label: 'Quality Materials' },
    { icon: 'history', label: '20+ Years Experience' },
    { icon: 'thumb_up', label: 'Satisfaction Guarantee' },
  ];

  return (
    <section className="py-12 bg-surface-light dark:bg-surface-dark border-y border-slate-200 dark:border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
