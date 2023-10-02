"use client"
import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
  return (
    <Carousel data-bs-theme="dark"  indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp8414096.jpg"
          width="1080px"
          height="900px"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/41/50/a9/4150a9609e0ba55e94341c7e1d3aec14.jpg"
          alt="Second slide"
          width="1080px"
          height="900px"
          
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230522/original/pngtree-collection-of-garden-tools-and-pots-on-a-wooden-bench-picture-image_2694170.jpg"
          alt="Third slide"
          width="1080px"
          height="900px"
          
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;