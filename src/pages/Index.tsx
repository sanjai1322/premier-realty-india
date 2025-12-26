import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

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
