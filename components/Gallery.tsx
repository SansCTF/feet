
import React, { useState, useMemo, useEffect, useRef } from 'react';

type MaterialType = 'All' | 'Shingle' | 'Tile' | 'Metal' | 'Flat';

interface Project {
  id: number;
  title: string;
  material: Exclude<MaterialType, 'All'>;
  image: string;
  location: string;
  fullDescription: string;
  testimonial?: {
    author: string;
    text: string;
  };
  beforeImage?: string;
  afterImage?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Luxury Tile Estate', 
    material: 'Tile', 
    location: 'Clearwater, FL', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'A complete historical tile restoration for a waterfront estate. We sourced matching clay tiles to preserve the architectural integrity while providing modern underlayment protection.',
    testimonial: {
      author: 'Sarah Miller',
      text: 'The attention to detail on our custom tile roof was remarkable. They respected the history of our home while giving us a roof that will last 50 years.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1513694203534-185a0467bc08?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3, 
    title: 'Coastal Shingle Home', 
    material: 'Shingle', 
    location: 'St. Petersburg, FL', 
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Hurricane-rated architectural shingles installed with advanced peel-and-stick underlayment for maximum storm protection in high-velocity wind zones.',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 5, 
    title: 'Contemporary Metal Villa', 
    material: 'Metal', 
    location: 'Sarasota, FL', 
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'A sleek, matte black metal roof for a custom contemporary residence. Features hidden fasteners for a clean, minimalist aesthetic.',
  }
];

const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="group/slider relative aspect-video overflow-hidden rounded-xl cursor-col-resize select-none border border-slate-200 dark:border-white/10"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 ease-out" 
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none" 
          style={{ width: '100vw' }} 
        />
      </div>
      
      {/* Slider Line & Handle */}
      <div 
        className={`absolute inset-y-0 w-1 bg-white/80 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 ${isHovering ? 'scale-x-125 bg-white' : ''}`}
        style={{ left: `${sliderPos}%` }}
      >
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 
            ${isHovering ? 'scale-110 shadow-[0_0_25px_rgba(212,175,55,0.6)] border-2 border-primary' : 'border border-slate-200'}
            touch-none z-30`}
        >
          <div className="flex gap-0.5">
            <span className="material-symbols-outlined text-slate-800 text-lg transition-transform duration-300 group-hover/slider:-translate-x-0.5">chevron_left</span>
            <span className="material-symbols-outlined text-slate-800 text-lg transition-transform duration-300 group-hover/slider:translate-x-0.5">chevron_right</span>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className={`absolute bottom-4 left-4 transition-all duration-300 ${isHovering ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
        <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1 text-[10px] uppercase font-bold rounded shadow-lg">Old Roof</div>
      </div>
      <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isHovering ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
        <div className="bg-primary text-white px-3 py-1 text-[10px] uppercase font-bold rounded shadow-lg shadow-primary/20">West Point Finish</div>
      </div>

      {/* Interactive Overlay Glow */}
      <div className={`absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-surface-light dark:bg-surface-dark w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-primary text-white p-2 rounded-full transition-all flex items-center justify-center shadow-lg"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-900 flex flex-col">
          {project.beforeImage && project.afterImage ? (
            <div className="p-4 sm:p-8 h-full flex flex-col justify-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-sm">swipe</span>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Slide to compare results</h5>
              </div>
              <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="flex gap-2 mb-6">
            <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Residential
            </span>
            <span className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {project.material}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 text-slate-500 mb-8">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-sm">{project.location}</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Project Overview</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {project.testimonial && (
              <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border-l-4 border-primary italic shadow-sm">
                <span className="material-symbols-outlined text-primary/30 text-4xl block mb-2">format_quote</span>
                <p className="text-slate-600 dark:text-slate-300 mb-4">"{project.testimonial.text}"</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">— {project.testimonial.author}</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-4">
            <a href="#estimate" onClick={onClose} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold text-center transition-all shadow-lg shadow-primary/20">
              Request Similar Project
            </a>
            <button onClick={onClose} className="text-slate-500 font-bold hover:text-slate-900 dark:hover:text-white transition-colors">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<MaterialType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const materialMatch = activeMaterial === 'All' || project.material === activeMaterial;
      return materialMatch;
    });
  }, [activeMaterial]);

  const materialFilters: MaterialType[] = ['All', 'Shingle', 'Tile', 'Metal', 'Flat'];

  return (
    <section className="py-24 transition-colors duration-300 bg-surface-light dark:bg-surface-dark" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Residential Project Gallery</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-10">
            Specializing in premium residential roofing for Florida homes. We use the highest quality materials to ensure your family's safety and satisfaction.
          </p>

          {/* Filters */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="w-full text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Filter by Material</span>
              {materialFilters.map(material => (
                <button
                  key={material}
                  onClick={() => setActiveMaterial(material)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeMaterial === material 
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-primary'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/5] cursor-pointer shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                      {project.material}
                    </span>
                    {project.beforeImage && (
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">unfold_more</span> B/A
                      </span>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-slate-300 text-xs">
                      <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                      {project.location}
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-primary">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500 italic">
              <span className="material-symbols-outlined text-5xl mb-4">search_off</span>
              No projects match your selected material filter.
            </div>
          )}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-6 italic">Ready to see your home in our gallery?</p>
          <a href="#estimate" className="inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
            Book a Free Inspection <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Gallery;
