import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Certifications } from './components/Certifications';
import { Appointment } from './components/Appointment';
import { Contact } from './components/Contact';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <Certifications />
      <Appointment />
      <Contact />
      <FloatingButtons />
      <Footer />
    </div>
  );
}
