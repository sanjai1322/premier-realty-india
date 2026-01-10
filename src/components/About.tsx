import { memo } from 'react';
import { Smile, Building2, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Wrapped with memo to prevent re-renders when parent state changes.
// This component is static and does not receive any props.
const About = memo(() => {
  const stats = [
    { icon: Smile, value: '2500+', label: 'Happy Families' },
    { icon: Building2, value: '18', label: 'Projects Delivered' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal animation="fade-right">
              <div className="relative">
                <span className="font-display text-6xl lg:text-8xl font-bold text-charcoal-light/30 absolute -top-4 -left-2 select-none">
                  ABOUT US
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary relative z-10">
                  ABOUT US
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A legacy of Prestige Group & Heritage Developers. Both have been pioneers for almost 3 decades in Real Estate & Hospitality respectively. They have left a benchmark in their own fields & now have joined hands to make an alliance.
                </p>
                <p>
                  Prestige Estates is a perfect consolidation of Real Estate & Hospitality industry, bringing world-class living experiences to India's most vibrant cities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group"
              >
                Learn more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury cityscape at night"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-20 pt-12 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} animation="scale" delay={400 + index * 100}>
                  <div className="flex items-center gap-4">
                    <stat.icon className="w-10 h-10 text-primary" />
                    <div>
                      <div className="font-display text-3xl font-semibold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              <ScrollReveal animation="fade" delay={600}>
                <div className="text-center md:text-left">
                  <p className="font-display text-2xl lg:text-3xl italic text-foreground">
                    And your happiness.
                    <br />
                    <span className="text-primary">Priceless...</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

export default About;
