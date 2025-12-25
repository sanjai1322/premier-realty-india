import { MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Social Links - Left Side */}
      <div className="hidden lg:flex flex-col items-center gap-6 absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <div className="w-px h-20 bg-border" />
        {['Instagram', 'Twitter', 'Facebook'].map((social) => (
          <a
            key={social}
            href="#"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300 [writing-mode:vertical-lr] rotate-180"
          >
            {social}
          </a>
        ))}
        <div className="w-px h-20 bg-border" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight animate-fade-up">
            WITH YOU<span className="text-primary">.</span>
            <br />
            ALWAYS
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-md animate-fade-up animation-delay-200">
            Crafting extraordinary living spaces across India's most prestigious locations since 1995.
          </p>

          <Button 
            variant="gold" 
            size="xl" 
            className="mt-10 animate-fade-up animation-delay-300"
          >
            Book Now
          </Button>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-4 mt-16 animate-fade-up animation-delay-400">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mumbai, Maharashtra</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 98765 43210 / +91 22 4567 8900</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@prestigeestates.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
