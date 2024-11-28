import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from 'react';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
};

const slideImages = [
  {
    url: '/rose/image/img-slide1.jpg',
  },
  {
    url: '/rose/image/img-slide2.jpg',
  },
];

const indicatorStyle = {
  display: 'inline-block',
  margin: '0 5px',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for active dot

  return (
    <div className="slide-container" style={{ overflow: 'hidden' }}>
      <Slide
        arrows={false} // Disable left/right arrows
        indicators={(index) => (
          <div
            style={{
              ...indicatorStyle,
              backgroundColor: index === currentIndex ? '#000' : '#ccc', // Active dot is black, inactive is gray
            }}
            key={index}
          ></div>
        )}
        onChange={(oldIndex, newIndex) => setCurrentIndex(newIndex)} // Update current index when slide changes
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
