import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
// import { Testimonials } from './components/Testimonials';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-kumkum-parchment font-sans text-kumkum-ink">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f4f0ea',
            color: '#1a1410',
            border: '1px solid rgba(181, 154, 109, 0.3)',
            borderRadius: '0',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }
        }} />
      

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Pricing />
        {/* <Testimonials /> */}
        <BookingContact />
      </main>

      <Footer />
    </div>);

}