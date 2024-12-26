import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import TechLogos from './components/Portfolio/TechLogos';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import FAQSection from './components/FAQ/FAQSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsApp/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <PortfolioSection />
      <TechLogos />
      <TestimonialsSection />
      <FAQSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;