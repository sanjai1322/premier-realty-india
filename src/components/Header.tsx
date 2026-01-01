import { useState, useEffect, memo } from 'react';
import { Menu, X, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onBookNow?: () => void;
}

// ⚡ Bolt: Wrapped in memo to prevent unnecessary re-renders from parent state changes.
// This component is mostly static, so it only needs to re-render if its props (onBookNow) change.
const Header = memo(({ onBookNow }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-dark'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Grid3X3 className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold tracking-wider text-foreground">
              PRESTIGE ESTATES<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold" size="lg" onClick={onBookNow}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-4" onClick={() => {
              setIsMobileMenuOpen(false);
              onBookNow?.();
            }}>
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;
