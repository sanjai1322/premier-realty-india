import { useState } from 'react';
import { Plus, Trees, Dumbbell, Shield, Waves, Car, Wifi, Coffee, Heart } from 'lucide-react';
import PropertyModal, { PropertyDetails } from './PropertyModal';
import ScrollReveal from './ScrollReveal';

const projects: PropertyDetails[] = [
  {
    id: 1,
    number: '01',
    title: 'Prestige Heights',
    location: 'Bandra West, Mumbai',
    price: '₹4.5 Cr',
    pricePerSqft: '₹45,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    ],
    floorPlan: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop',
    description: 'Experience luxury living at Prestige Heights, a premium residential tower in the heart of Bandra West. With breathtaking sea views and world-class amenities, this is where your dreams come home.',
    bedrooms: '3-4',
    bathrooms: '3-4',
    area: '2,500',
    parking: '2',
    amenities: [
      { icon: Waves, name: 'Infinity Pool' },
      { icon: Dumbbell, name: 'Fitness Center' },
      { icon: Trees, name: 'Landscaped Gardens' },
      { icon: Shield, name: '24/7 Security' },
      { icon: Car, name: 'Valet Parking' },
      { icon: Coffee, name: 'Clubhouse' },
    ],
    highlights: [
      'Panoramic Arabian Sea views from every apartment',
      'Italian marble flooring throughout',
      'Smart home automation system',
      'Private lift lobby for each apartment',
      '10 minutes from Bandra-Worli Sea Link',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Royal Enclave',
    location: 'Koramangala, Bangalore',
    price: '₹2.8 Cr',
    pricePerSqft: '₹18,500',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    ],
    floorPlan: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop',
    description: 'Royal Enclave brings together contemporary design and timeless elegance in Bangalore\'s most sought-after neighborhood. Perfect for families seeking a blend of urban convenience and serene living.',
    bedrooms: '3-5',
    bathrooms: '3-5',
    area: '3,200',
    parking: '2',
    amenities: [
      { icon: Waves, name: 'Swimming Pool' },
      { icon: Dumbbell, name: 'Modern Gym' },
      { icon: Trees, name: 'Rooftop Garden' },
      { icon: Shield, name: 'Gated Community' },
      { icon: Wifi, name: 'High-Speed Internet' },
      { icon: Heart, name: 'Spa & Wellness' },
    ],
    highlights: [
      'Walking distance to Koramangala commercial hub',
      'IGBC Gold certified green building',
      'Premium imported fixtures',
      'Children\'s play area and daycare',
      '15 minutes from Electronic City',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Grand Residency',
    location: 'Golf Course Road, Gurugram',
    price: '₹3.2 Cr',
    pricePerSqft: '₹22,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
    ],
    floorPlan: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop',
    description: 'Grand Residency on Golf Course Road offers an unparalleled lifestyle with views of lush greens and premium finishes. Experience the pinnacle of luxury in Gurugram\'s most prestigious address.',
    bedrooms: '4-5',
    bathrooms: '4-5',
    area: '4,500',
    parking: '3',
    amenities: [
      { icon: Waves, name: 'Temperature Pool' },
      { icon: Dumbbell, name: 'CrossFit Zone' },
      { icon: Trees, name: 'Golf Course View' },
      { icon: Shield, name: 'Biometric Access' },
      { icon: Car, name: 'EV Charging' },
      { icon: Coffee, name: 'Business Center' },
    ],
    highlights: [
      'Overlooking DLF Golf Course',
      'Private terrace with each penthouse',
      'Concierge services available',
      'Wine cellar and cigar lounge',
      'Direct access to Cyber City',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Marina Bay',
    location: 'Worli Sea Face, Mumbai',
    price: '₹8.5 Cr',
    pricePerSqft: '₹65,000',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop',
    ],
    floorPlan: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop',
    description: 'Marina Bay is Mumbai\'s most iconic address, offering ultra-luxury residences with unobstructed views of the Arabian Sea. For those who seek nothing but the extraordinary.',
    bedrooms: '4-6',
    bathrooms: '5-6',
    area: '5,800',
    parking: '4',
    amenities: [
      { icon: Waves, name: 'Private Beach' },
      { icon: Dumbbell, name: 'Personal Trainer' },
      { icon: Trees, name: 'Zen Garden' },
      { icon: Shield, name: 'CCTV Surveillance' },
      { icon: Heart, name: 'In-house Spa' },
      { icon: Coffee, name: 'Private Cinema' },
    ],
    highlights: [
      '270-degree sea views',
      'Helipad access',
      'Butler service included',
      'Imported German kitchen',
      'Adjacent to Bandra-Worli Sea Link',
    ],
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<PropertyDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: PropertyDetails) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <>
      <section id="projects" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16 relative">
              <span className="font-display text-6xl lg:text-8xl font-bold text-charcoal-light/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap">
                PROJECTS
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary relative z-10">
                PROJECTS
              </h2>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                animation="fade-up" 
                delay={index * 100}
                threshold={0.05}
              >
                <div
                  className="relative group cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handlePropertyClick(project)}
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
                          <p className="text-sm font-semibold text-primary mt-1">{project.price} onwards</p>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
