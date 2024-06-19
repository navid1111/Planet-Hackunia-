import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import NavBar from '../../components/navbar/Navbar';
import { newsData } from '../../lib/dummydata';
import Map from '../../map/Map';
import './homePage.scss';

const HomePage = () => {
  const data = newsData.articles;

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      <div className="mapContainer">
        <div className="map">
          <Map items={data} />
        </div>
      </div>

      <section className="news-section">
        <h2>Latest News</h2>
        <Slider {...sliderSettings}>
          {data.map(article => (
            <div key={article.id} className="news-card">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="news-image"
              />
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-author">By {article.author}</p>
                <p className="news-description">{article.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

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
