"use client"
import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp8414096.jpg"
          width="1080px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/41/50/a9/4150a9609e0ba55e94341c7e1d3aec14.jpg"
          alt="Second slide"
          width="1080px"
          
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230522/original/pngtree-collection-of-garden-tools-and-pots-on-a-wooden-bench-picture-image_2694170.jpg"
          alt="Third slide"
          width="1080px"
          
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;