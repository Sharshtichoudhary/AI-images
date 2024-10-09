import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure your CSS file exists

const App = () => {
  const images = [
    '/assets/prompt1.jpg', // First image
    '/assets/prompt2.jpg', // Second image
    '/assets/prompt3.jpg', // Third image
  ];
  const prompts = [
    'Indian boy butterfly on him', // First prompt
    'Couple in Paris romantic sunset', // Second prompt
    'Indian women in Dubai city', // Third prompt
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchInput, setSearchInput] = useState(prompts[0]);
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      // Update search input with the next prompt
      setSearchInput(prompts[(currentImageIndex + 1) % prompts.length]); 
      setTypedText(''); // Reset typed text for new prompt
      setTypingIndex(0);
    }, 4000); // Change image and prompt every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length, prompts.length, currentImageIndex]); 
  useEffect(() => {
    if (typingIndex < searchInput.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + searchInput[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Delay between each character typing

      return () => clearTimeout(timeoutId); // Clear timeout if the component unmounts
    }
  }, [searchInput, typingIndex]);

  return (
    <div className='very-main'>
    <div className="ai-container ">
      <div className='left-container'>
        <div className='main-container'>
          <div className='imgcontainer'>
      
      {/* Left section: Image or placeholder */}
      <div className="ai-image"> 
      
        <img src={images[currentImageIndex]} alt="AI generated" className={typedText === searchInput ? '' : 'blurred'}  />

        <div className='search-bar'>
        <p className='search-prompt'>{typedText}</p>

        </div>
        <div className='dots-image'>
        <img src="/assets/dots.png" alt="AI Photomatic Icon" />
        </div>
        <div className="line-background">
        <img  src="/assets/lineIcon.png" alt="Background Line" />
        </div> 
        <div className="ai-icon">
          <img src="/assets/roundIcon.png" alt="AI Photomatic Icon" className="icon-img" />
        </div>
        <div className='animate-icon'>
        <img src="/assets/imgGenerator01.png" alt="AI Photomatic Icon"  />
        </div>
        <div className='animate-icon1'>
        <img src="/assets/imgGenerator02.png" alt="AI Photomatic Icon"  />
        </div>
        <div className='animate-icon2'>
        <img src="/assets/imgGenerator03.png" alt="AI Photomatic Icon"  />
        </div>
        </div>
        </div>
        </div>
      </div>

      {/* Right section: Text and button */}
      <div className="ai-text-right">
        <p className='cursiveFont'># Snapshawt photos</p>
        <h2>AI Image generator</h2>
        <p>
          Experience the effortless magic of bringing your imagination to life with Snapshawt's Gen AI! Imagine yourself soaring through the sky as a superhero, or standing tall against the backdrop of the Eiffel Tower, all without leaving your seat.
        </p>
        <p>
          With Snapshawt, the possibilities are endless, and the process is as simple as typing a few lines.
        </p>
        {/* Try Now Button */}
        <button className="try-now-btn">Try Now </button>

       
      
      </div>
      {/* <div className="image-container">
          <img src="/assets/download.png" alt="Description of your image" className="new-image" />
        </div> */}
        
    </div>
    <div className='instant-container'>
      <div className='left-instant'>
      <p className='text-instant'>Instant face swaps,<br /> endless responsibilities!"</p>
      </div>
      <div className='right-instant'>
      <div className='instant-icon'>
        <img src="/assets/faceSwap01.png" alt="Instant"  />
        </div>
        <div className='instant-icon1'>
        <img src="/assets/faceSwap02.png"  />
        </div>
        <div className='instant-icon2'>
        <img src="/assets/faceSwap03.png"   />
        </div>
      </div>

    </div>
    </div>
  );
};

export default App;
