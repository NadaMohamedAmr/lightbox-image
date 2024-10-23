
import './App.css';
import images from './images';
import React , {useState} from 'react';


function App() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <div className="container">
      
        <img src={selectedImage} alt="Selected" className="selected" />

        <div className="imgcontainer">
         
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`image-${index}`}
              className={`img ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => {
                setSelectedImage(img); 
                setActiveIndex(index); 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
