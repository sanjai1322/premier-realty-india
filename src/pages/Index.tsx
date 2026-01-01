import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // ⚡ Bolt: Wrapped callbacks in useCallback to prevent re-creating functions on every render.
  // This is crucial for ensuring that memoized children (`Header`, `Hero`) don't re-render unnecessarily
  // when the parent `Index` component re-renders.
  const openBookingModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeBookingModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <main className="bg-background min-h-screen">
      <Header onBookNow={openBookingModal} />
      <Hero onBookNow={openBookingModal} />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  );
};

export default Index;
