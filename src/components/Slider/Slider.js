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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="img-slider">
          <img src={nikes} className="shoe-img" alt="nike" />
        </div>
        <div className="img-slider">
          <img src={adidas} className="shoe-img" alt="nike" />
        </div>
        <div className="img-slider">
          <img src={puma} className="shoe-img" alt="nike" />
        </div>
      </Slider>

      <div className="black-layout"></div>

    </div>
  );
};

export default MainSlider;
