import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/Navbar';
import './homePage.scss';

const HomePage = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setFeatures([
        {
          title: 'Real-Time Alerts',
          description:
            'Stay informed with the latest updates and emergency instructions.',
        },
        {
          title: 'Resource Management',
          description:
            'Track and manage resources effectively during the crisis.',
        },
        {
          title: 'Community Support',
          description: 'Find and offer support within the Hackunia community.',
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home-page">
      <NavBar />
      <header className="hero-section">
        <img
          src="/src/assets/images/map.jpeg"
          alt="Hero Background"
          className="hero-image"
          width="1920" // Adjust width to match image dimensions
          height="1080" // Adjust height to match image dimensions
        />
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to SpaceTec Emergency Portal</h1>
            <p>
              Assist SpaceTec in managing the alien invasion on Planet Hackunia.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </header>
      <section className="features-section" id="features">
        <h2>Our Features</h2>
        {loading ? (
          <p>Loading features...</p>
        ) : (
          <div className="features">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
