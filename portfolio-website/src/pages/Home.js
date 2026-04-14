import React from 'react';
import './main.css';

const Home = () => {
    return (
        <div className="home">
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm [Your Name], a [Your Profession]. Here are some of my featured projects:</p>
            </header>
            <section className="projects">
                {/* Add your project components here */}
            </section>
        </div>
    );
};

export default Home;