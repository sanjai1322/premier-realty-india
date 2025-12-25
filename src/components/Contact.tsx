import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Our team will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Telegram', icon: '➤' },
    { name: 'Instagram', icon: '📷' },
    { name: 'Threads', icon: '@' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 relative">
          <span className="font-display text-6xl lg:text-8xl font-bold text-charcoal-light/20 absolute -top-4 -left-2 select-none">
            CONTACTS
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary relative z-10">
            CONTACTS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
              <div className="space-y-2 md:row-span-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full h-full bg-charcoal border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telephone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto">
              SEND
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-foreground">+91 98765 43210 / +91 22 4567 8900</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 text-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-foreground">
                  12th Floor, Prestige Tower,
                  <br />
                  Bandra Kurla Complex, Mumbai,
                  <br />
                  Maharashtra - 400 051
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
