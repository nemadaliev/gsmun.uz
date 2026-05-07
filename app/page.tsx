import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Schedule from '@/components/sections/Schedule';
import Committees from '@/components/sections/Committees';
import Register from '@/components/sections/Register';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Committees />
      <Register />
      <Faq />
      <Footer />
    </>
  );
}
