import { useState } from 'react';
import { Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Prestige Heights',
    location: 'Bandra West, Mumbai',
    price: '₹4.5 Cr onwards',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    number: '02',
    title: 'Royal Enclave',
    location: 'Koramangala, Bangalore',
    price: '₹2.8 Cr onwards',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
  },
  {
    id: 3,
    number: '03',
    title: 'Grand Residency',
    location: 'Golf Course Road, Gurugram',
    price: '₹3.2 Cr onwards',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  },
  {
    id: 4,
    number: '04',
    title: 'Marina Bay',
    location: 'Worli Sea Face, Mumbai',
    price: '₹8.5 Cr onwards',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="font-display text-6xl lg:text-8xl font-bold text-charcoal-light/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap">
            PROJECTS
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary relative z-10">
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Content */}
                <div>
                  <span className="text-primary font-display text-lg font-semibold">
                    {project.number}
                  </span>
                  <h3 className="font-display text-xl font-medium text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{project.location}</p>
                      <p className="text-sm font-semibold text-primary mt-1">{project.price}</p>
                    </div>
                    
                    {/* Plus Button */}
                    <button
                      className={`w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground transition-all duration-500 ${
                        hoveredId === project.id
                          ? 'bg-primary border-primary text-primary-foreground scale-110'
                          : 'bg-transparent hover:border-primary'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Developer Tag */}
                  <div className="text-[10px] text-muted-foreground tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 absolute bottom-6 left-6">
                    Prestige Estates
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
