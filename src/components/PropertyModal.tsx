import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Maximize, Car, Trees, Dumbbell, Shield, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PropertyDetails {
  id: number;
  number: string;
  title: string;
  location: string;
  price: string;
  pricePerSqft: string;
  image: string;
  images: string[];
  floorPlan: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  parking: string;
  amenities: { icon: React.ElementType; name: string }[];
  highlights: string[];
}

interface PropertyModalProps {
  property: PropertyDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal = ({ property, isOpen, onClose }: PropertyModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'gallery' | 'floorplan'>('gallery');

  if (!isOpen || !property) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-charcoal border border-border rounded-lg overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 relative">
            {/* Tab Switcher */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'gallery'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background/80 backdrop-blur-sm text-foreground hover:bg-background'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveTab('floorplan')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'floorplan'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background/80 backdrop-blur-sm text-foreground hover:bg-background'
                }`}
              >
                Floor Plan
              </button>
            </div>

            {/* Image Display */}
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
              {activeTab === 'gallery' ? (
                <>
                  <img
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-primary w-6'
                            : 'bg-foreground/50 hover:bg-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <img
                  src={property.floorPlan}
                  alt={`${property.title} - Floor Plan`}
                  className="w-full h-full object-contain bg-charcoal-dark p-8"
                />
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 lg:overflow-y-auto lg:max-h-[90vh]">
            {/* Header */}
            <div className="mb-6">
              <span className="text-primary font-display text-lg font-semibold">
                {property.number}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mt-1">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-background/50 rounded-lg p-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-primary">
                  {property.price}
                </span>
                <span className="text-sm text-muted-foreground">onwards</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {property.pricePerSqft} per sq.ft.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-background/30 rounded-lg">
                <Bed className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">{property.bedrooms}</p>
                <p className="text-xs text-muted-foreground">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-background/30 rounded-lg">
                <Bath className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">{property.bathrooms}</p>
                <p className="text-xs text-muted-foreground">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-background/30 rounded-lg">
                <Maximize className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">{property.area}</p>
                <p className="text-xs text-muted-foreground">Sq.ft.</p>
              </div>
              <div className="text-center p-3 bg-background/30 rounded-lg">
                <Car className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">{property.parking}</p>
                <p className="text-xs text-muted-foreground">Parking</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                About This Property
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {property.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/30 rounded-lg"
                  >
                    <amenity.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button variant="gold" size="lg" className="flex-1">
                Schedule Visit
              </Button>
              <Button variant="gold-outline" size="lg" className="flex-1">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
