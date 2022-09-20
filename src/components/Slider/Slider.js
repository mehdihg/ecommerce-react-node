import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { baseUrl } from "../../config";
import nikes from "./sliderImg/air.jpg";
import puma from "./sliderImg/nbb.jpg";
import adidas from "./sliderImg/sadi.jpg";

import { Link } from "react-router-dom";

const MainSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <Link to="#">
          <img
            src={`${baseUrl}/${i + 1}.png`}
            className="slider-icons"
            alt="slider"
          />
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="img-slider">
          <div className="black-layout"></div>
          <img src={nikes} className="shoe-img" alt="nike" />
          <div className="slider nike-slider-img">
            <h2>Nike's new collections</h2>
            <p>Ask us for the best models of Nike sneakers</p>
            <Link to="/products">
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="img-slider">
          <div className="black-layout"></div>
          <img src={adidas} className="shoe-img" alt="nike" />
          <div className="slider adidas-slider-img">
            <h2>Adidas exclusive collection</h2>
            <p>The latest original Adidas collections at the best price</p>
            <Link to="/products">
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="img-slider">
          <div className="black-layout"></div>
          <img src={puma} className="shoe-img" alt="nike" />
          <div className="slider puma-slider-img">
            <h2>Special Puma sneakers</h2>
            <p>Special Puma sneakers with the best quality</p>
            <Link to="/products">
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
