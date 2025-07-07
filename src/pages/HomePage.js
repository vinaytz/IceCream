import React from 'react';
import Navbar from '../components/Navbar';
import FlavorCard from '../components/FlavorCard';
import Footer from '../components/Footer';
import { useFadeIn } from '../hooks/useFadeIn';

const HomePage = () => {
  const [heroRef, heroIsVisible] = useFadeIn();
  const [flavorsRef, flavorsAreVisible] = useFadeIn();

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className={`container ${heroIsVisible ? 'fade-in' : ''}`} ref={heroRef}>
          <h1>Taste the Sweetness</h1>
          <p>Handcrafted ice cream made with passion and the finest ingredients.</p>
          <a href="#flavors" className="btn btn-primary">Explore Flavors</a>
        </div>
      </header>

      {/* Flavors Section */}
      <section id="flavors" className="container my-5 py-5">
        <h2 className="text-center section-title">Our Delicious Flavors</h2>
        <div className="row">
          <FlavorCard 
            name="Midnight Chocolate" 
            description="A rich, decadent chocolate experience for the true chocoholic."
            imageName="https://images.unsplash.com/photo-1580915411954-155cb9354c7a?q=80&w=1974&auto=format&fit=crop" 
          />
          <FlavorCard 
            name="Madagascar Vanilla"
            description="Classic, creamy vanilla bean, sourced directly from Madagascar."
            imageName="https://images.unsplash.com/photo-1570197788417-0e82375c934d?q=80&w=1974&auto=format&fit=crop" 
          />
          <FlavorCard 
            name="Summer Strawberry"
            description="Sweet and refreshing, made with locally sourced organic strawberries."
            imageName="https://images.unsplash.com/photo-1532678463994-34d35f263aa8?q=80&w=1974&auto=format&fit=crop" 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;