import React, { useEffect, useState } from 'react'

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    // color: "#fff",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    // color: "#fff",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const slider_container = {
    position: "relative",
    height: "100%",
    width: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

const ImageSliders = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const handleSlideChange = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
      };
  
      // Set interval for automatic slide change every 3 seconds
      const intervalId = setInterval(handleSlideChange, 3000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);
  
    const goToPrevious = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const goToNext = () => {
        const lastSlide = currentIndex === images.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slidesIndex) => {
        setCurrentIndex(slidesIndex);
      };
    const slideStylesWidthBackground = {
      ...slideStyles,
      backgroundImage: `url(${images[currentIndex].url})`,
    };

  return (
    <div style={slider_container} className='container-fluid'>
       <div>
         <div onClick={goToPrevious} style={leftArrowStyles}>
           〈
         </div>
         <div onClick={goToNext} style={rightArrowStyles}>
           〉
         </div>
       </div>
       <div style={slideStylesWidthBackground}></div>
       <div style={dotsContainerStyles}>
         {images.map((slides, slidesIndex) => (
             <div
             style={dotStyle}
             key={slidesIndex}
             onClick={() => (goToSlide(slidesIndex))}
           >
             ●
           </div>
         ))}
       </div>
    </div>
  )
}

export default ImageSliders;