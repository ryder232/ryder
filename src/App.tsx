import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { ContactUs } from './components/ContactUs';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/Generated Image October 03, 2025 - 3_01PM.png',
      title: 'Ride with Confidence',
      description: 'Safe, reliable transportation at your fingertips'
    },
    {
      image: '/Generated Image October 03, 2025 - 3_04PM.png',
      title: 'Connect Communities',
      description: 'Bringing people together, one ride at a time'
    },
    {
      image: '/Generated Image October 03, 2025 - 3_05PM.png',
      title: 'Move Forward',
      description: 'Your journey, your way, every day'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <AboutUs />
      <Services />
      <HowItWorks />
      <ContactUs />
    </div>
  );
}

export default App;
