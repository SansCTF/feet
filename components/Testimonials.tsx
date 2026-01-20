
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Miller',
      location: 'Homeowner, Clearwater',
      text: '"West Point Roofing did an amazing job replacing our shingle roof. The team was professional, efficient, and the new roof looks fantastic. Highly recommend!"',
      img: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      name: 'David Johnson',
      location: 'Facility Manager, Orlando',
      text: '"We hired them for our commercial building\'s metal roof installation. They delivered on time and within budget, with excellent quality. Professional from start to finish."',
      img: 'https://i.pravatar.cc/150?u=david'
    },
    {
      name: 'Emily Clark',
      location: 'Property Owner, Tampa',
      text: '"Roofing Solutions repaired our flat roof quickly and effectively. There was a minor issue, but they resolved it promptly. Overall, a good experience."',
      img: 'https://i.pravatar.cc/150?u=emily'
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-primary fill-current">star</span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-200 dark:border-white/5 relative shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-slate-100 dark:text-white/5 text-7xl absolute top-4 right-4 pointer-events-none">format_quote</span>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                {review.text}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img alt={review.name} className="w-full h-full object-cover" src={review.img} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">{review.name}</h5>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
