import React from 'react'

import ImageSliders from './ImageSliders';
import shoes from '../../Assets/slides/01.jpg'
import model from '../../Assets/slides/02.jpg'
import jeans from '../../Assets/slides/03.jpg'
import coat from '../../Assets/slides/04.jpg'
import cosmetics from '../../Assets/slides/05.jpg'
import shirts from '../../Assets/slides/06.jpg'

const Slide = () => {
    const img = [
        {url: shoes, title: "shoes"},
        {url: model, title: "model"},
        {url: jeans, title: "jeans"},
        {url: coat, title: "coats"},
        {url: cosmetics, title: "cosmetics"},
        {url: shirts, title: "t-shirts"},
    ];
    const containerStyles = {
      // width: "500px",
      // height: "280px",
      width: "100%",
      height: "100vh",
      margin: "0 auto",
      paddingTop: "5rem"
    };  
  return (
    <div style={containerStyles}>
        <ImageSliders images={img} />
    </div>
  )
}

export default Slide;