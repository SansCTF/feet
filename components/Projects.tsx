
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Luxury Tile Installation',
      category: 'Residential',
      desc: 'Custom tile roofing for a waterfront estate in Tampa.',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Standing Seam Metal',
      category: 'Commercial',
      desc: 'Architectural metal roofing for a modern office park in Orlando.',
      img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Flat Roof Replacement',
      category: 'Commercial',
      desc: 'Complete TPO system replacement for an industrial warehouse.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold mb-4">Our Recent Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Take a look at some of the high-quality roofing projects we've completed recently across Central Florida.
            </p>
          </div>
          <a className="border-b-2 border-primary text-primary font-bold pb-1 hover:text-primary-dark transition-all inline-block" href="#">
            View Full Portfolio
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-black aspect-[4/3] cursor-pointer">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700" 
                src={project.img}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 bg-black/40 w-fit px-2 py-1 rounded">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
