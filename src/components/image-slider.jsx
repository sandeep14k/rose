import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh', // Fixed height for the slider
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden', // Ensures no overflow from the container
};

const imgStyle = {
  maxWidth: '100%', // Ensure the image width adjusts to the container width
  maxHeight: '100%', // Ensure the image height adjusts to the container height
  objectFit: 'contain', // Preserve the aspect ratio and fit within the container
};

const slideImages = [
  {
    url: '/image/img-slide1.jpg',
  },
  {
    url: '/image/img-slide2.jpg',
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
    <div className="slide-container" style={{ overflow: 'hidden' }} id="home">
      <Slide
        arrows={false}
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
          <div key={index} style={containerStyle}>
            <img
              src={slideImage.url}
              alt={`Slide ${index}`}
              style={imgStyle}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
