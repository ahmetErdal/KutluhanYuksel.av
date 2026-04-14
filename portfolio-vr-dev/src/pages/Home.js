import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="intro">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I am a VR Game Developer with a passion for creating immersive experiences. 
            Explore my projects and learn more about my skills and background.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;