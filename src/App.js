import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import ContentManager from "./components/ContentManage";
import { useState } from "react";
import Slider from "./components/Slider";


function App() {

  const [selectedSection, setSelectedSection] = useState('AboutMe');
   
  const [slides, setSlides] = useState([ // Initial slides
    { src: '/Images/Rectangle 5160.png' },
    { src: '/Images/Rectangle 5160.png' },
    { src: '/Images/Rectangle 5160.png' },
    { src: '/Images/Rectangle 5160.png' },
    { src: '/Images/Rectangle 5160.png' },
    { src: '/Images/Rectangle 5160.png' },
  ]);

  // Function to handle section change
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  // Function to add more images dynamically
  const addMoreImages = () => {
    const newImage = { src: '/Images/newImage.jpg' }; // Replace with actual new image source or prompt user for URL
    setSlides([...slides, newImage]); // Add the new image to the slides array
  };
  return (
    <div className="App">
      <div className="container">
        <div className="left-div"></div>
        <div className="right-div">
          <div className="right-cont">
          <Navbar onSectionChange={handleSectionChange} />
          <ContentManager selectedSection={selectedSection} />
          </div>
         <div className="line-container">
         <img  className="line" src="/Images/Rectangle 5.jpg" alt="" />
         </div>
          <div className="right-cont2">
           <div className="image">
           <img src="/Images/Vector.png" alt="" className="question-mark" />
           <img src="/Images/Frame.png" alt="" className="grid" />
           </div>
          <Slider slides={slides} addMoreImages={addMoreImages} />
          </div>
          <div className="line-container">
         <img  className="line" src="/Images/Rectangle 5.jpg" alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;