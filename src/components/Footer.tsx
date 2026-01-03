import ScrollReveal from './ScrollReveal';
import { memo } from 'react';

// ⚡ Bolt: Wrapped the Footer component with React.memo to prevent unnecessary re-renders.
// Since the footer is static, this optimization ensures it only renders once,
// improving performance on pages where parent components have changing state.
const Footer = memo(() => {
  const footerLinks = [
    { name: 'Site Map', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Prestige
                <br />
                <span className="text-primary">Estates</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-2">
                All Rights Reserved 2025
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Developer Credit */}
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-primary">{'</>'}</span>
              <span>Designed & Developed in India</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
});

export default Footer;
