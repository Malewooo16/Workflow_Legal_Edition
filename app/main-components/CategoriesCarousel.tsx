
"use client"

import { ArrowBackIos, ArrowForwardIos, Laptop, Smartphone } from '@mui/icons-material';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShirt, faMobile, faBottleDroplet, faFlask, faBasketShopping, faHollyBerry, faChair, faLaptop } from "@fortawesome/free-solid-svg-icons";

// Configure the library (one-time setup)
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCoffee, faShirt, faMobile, faBottleDroplet, faFlask, faBasketShopping, faHollyBerry, faChair, faLaptop);

function CustomCarousel() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    };

  return (
    <div>
      <Carousel wrap={true} className="categories-carousel" indicators={false} activeIndex={index} onSelect={() => {}} prevIcon={<ArrowBackIos style={{color:"red"}} onClick={handlePrev} />}  nextIcon={<ArrowForwardIos style={{color:"red"}} onClick={handleNext} />}>
        <Carousel.Item >
         
          <ul className="categories-slides">
            <li> <Link href={`/categories/${'smartphones'}`}> <FontAwesomeIcon icon={faMobile} />  SmartPhones</Link>  </li>
            <li> <Link href={`/categories/${'laptops'}`}>  <FontAwesomeIcon icon={faLaptop} /> Laptops</Link>  </li>
            <li>  <Link href={`/categories/${'fragrances'}`}><FontAwesomeIcon icon={faBottleDroplet} /> Fragrances</Link> </li>
            <li>  <Link href={`/categories/${'skincare'}`}><FontAwesomeIcon icon={faFlask} /> SkinCare</Link>  </li>
            <li> <Link href={`/categories/${'groceries'}`}><FontAwesomeIcon icon={faBasketShopping} />  Groceries</Link>  </li>
          </ul>

        </Carousel.Item>
        <Carousel.Item>
          <ul className="categories-slides">
          <li> <Link href={`/categories/${'home-decoration'}`}> <FontAwesomeIcon icon={faHollyBerry} /> Home Decoration</Link>  </li> 
          <li> <Link href={`/categories/${'home-decoration'}`}> <FontAwesomeIcon icon={faChair} /> Furniture</Link>  </li>
          <li> <Link href={`/categories/${'home-decoration'}`}> <FontAwesomeIcon icon={faShirt} /> Tops </Link>  </li>
          <li> <Link href={`/categories/${'home-decoration'}`}> <img src="https://cdn-icons-png.flaticon.com/128/1785/1785255.png?ga=GA1.1.1994830766.1696254727&track=ais"  alt="dress svg" width="24px"/> Women's Dresses</Link>  </li>
          <li> <Link href={`/categories/${'home-decoration'}`}> <img src="https://cdn-icons-png.flaticon.com/128/363/363565.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="high heels" width="24px"/> Women's Shoes</Link>  </li>
          </ul>
        </Carousel.Item>
        <Carousel.Item>
         <ul className="categories-slides">
            <li>Men's Shirts</li>
            <li>Men's Shoes</li>
            <li>Men's Watches</li>
            <li>Women's Watches</li>
            <li>Women's Bags</li>
         </ul>
        </Carousel.Item>

        <Carousel.Item>
         <ul className="categories-slides">
            <li>Women's Jewerly</li>
            <li>Sunglasses</li>
            <li>Automotives</li>
            <li>Motorcycles</li>
            <li>Lighting</li>
         </ul>
        </Carousel.Item>
      </Carousel>
      
    
    </div>
  );
}

export default CustomCarousel;
