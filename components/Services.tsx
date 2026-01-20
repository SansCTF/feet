
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    {
      icon: 'home',
      title: 'Residential Roofing',
      desc: 'Protect your home with durable and stylish roofing. We handle shingle, tile, and metal roofs with expert precision.',
      points: ['New Installations', 'Roof Replacements', 'Custom Metal Work']
    },
    {
      icon: 'handyman',
      title: 'Repair & Maintenance',
      desc: 'Extend the life of your roof with professional repair and preventative maintenance for minor or major issues.',
      points: ['Leak Detection', 'Storm Damage Repair', 'Shingle Replacement']
    }
  ];

  return (
    <section className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Roofing Services</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of residential roofing solutions tailored to your home's unique needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group bg-surface-light dark:bg-surface-dark p-10 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> 
                    {point}
                  </li>
                ))}
              </ul>
              <a className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#estimate">
                Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
