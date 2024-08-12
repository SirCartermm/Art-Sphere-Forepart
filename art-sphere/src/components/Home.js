import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Home.css'; 
import Navbar from './Navbar'; 


const Home = () => {
  
  const images = [
    "https://i.pinimg.com/564x/e0/4e/6f/e04e6f87fd0f8f2aaa14e6959fb8a033.jpg",
    "https://i.pinimg.com/564x/19/71/74/197174bbbb2244bd02f029f9ec601812.jpg",
    "https://i.pinimg.com/736x/cd/95/5c/cd955c5d2fd2619b68b012d2b9fe0b2a.jpg",
    "https://i.pinimg.com/564x/f7/08/df/f708df12b2a3164c66b9eb4e03a359ce.jpg",
    "https://i.pinimg.com/564x/b8/08/de/b808de87d5639af7aef55c21b6adca08.jpg",
    "https://i.pinimg.com/564x/9a/e5/d6/9ae5d66c53a136456fb65deb66633563.jpg",
  ];

  return (
    <div>
      <Navbar />
      
      <section className="home" id="home">
        <div className="intro">
          <h1>Welcome to Art Sphere</h1>
          <p>Your ultimate platform for viewing and interacting with stunning artworks from around the world.</p>
          <p>Explore virtual galleries, discover new artists, and experience art in 3D and AR!</p>
       
        </div>

        <div className="carousel-container">
          <Carousel 
            autoPlay={true} 
            interval={3000} 
            showThumbs={false} 
            infiniteLoop={true}
            showStatus={false}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="featured-section">
          <h2>Featured Artworks</h2>
          <div className="featured-artworks">
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/13/95/42/1395422be000c83b27ec5a546e2a1d50.jpg" alt="Featured Artwork 1" />
              <p>Childhood</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/ea/9a/e5/ea9ae5c10648ba1c1322e769e3da8ef4.jpg" alt="Featured Artwork 2" />
              <p>Elegant Shadows</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/3e/31/ce/3e31ce3e6c649f32bb2622fed49866a7.jpg" alt="Featured Artwork 3" />
              <p>Glistening Dreamscape</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/63/e2/67/63e2671a7d7676c97f5358fe35b53be6.jpg" alt="Featured Artwork 4" />
              <p>Whispering Horizons</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/5d/a8/f2/5da8f23f1faad3cdd96532e4cada89c0.jpg" alt="Featured Artwork 5" />
              <p>Kerala Boating</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/f7/fb/3c/f7fb3cdb97167771a330ab0e9647a175.jpg" alt="Featured Artwork 6" />
              <p>Mystical Aurora</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/16/7f/af/167faf8d339896768347f983cafc683a.jpg" alt="Featured Artwork 7" />
              <p>Serene Reflection</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/38/d6/06/38d606871cbf7ce0d256208c853819d9.jpg" alt="Featured Artwork 8" />
              <p>Vibrant Escape</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/fc/cd/60/fccd6095662b83c94b7f9a53e6bd2fcd.jpg" alt="Featured Artwork 9" />
              <p>Twilight Reverie</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/60/a3/6d/60a36da663cebfc99bbedcaf30615f8a.jpg" alt="Featured Artwork 10" />
              <p>Streets of Mumbai</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/e6/1d/b6/e61db613e491085665755f14ed6693d9.jpg" alt="Featured Artwork 11" />
              <p>Tender Moments</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/e6/a8/29/e6a829e87ca425edb116190febcaddf7.jpg" alt="Featured Artwork 12" />
              <p>Nyeri Serenity</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/736x/f9/21/51/f92151ed49164c73e1cf250d5460941f.jpg" alt="Featured Artwork 13" />
              <p>Pathways of Heritage</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/ae/7f/69/ae7f69bdb3363d32de5cf465a40a6f0d.jpg" alt="Featured Artwork 14" />
              <p>Maternal Embrace</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/56/de/68/56de68231d6c0b379891fc2448fddaf5.jpg" alt="Featured Artwork 15" />
              <p>African Women Dancing by Fire</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/df/01/12/df01121ac5d057a72b14aafdd85d5ee9.jpg" alt="Featured Artwork 16" />
              <p>The Spirit of Nature</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/564x/b4/c3/fc/b4c3fc478e22f4ae7f051483d3f86f58.jpg" alt="Featured Artwork 17" />
              <p>The Spirit of Africa Watches The Youth by Humble Homage</p>
            </div>
            <div className="artwork-item">
              <img src="https://i.pinimg.com/736x/73/6a/94/736a942511b07efce3cc0ff9f8d0525f.jpg" alt="Featured Artwork 18" />
              <p>Son Rise by Humble Homage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};
export default Home;
