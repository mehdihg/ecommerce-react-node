
import Slider from "react-slick";
import './ProductSlider.css'
const ProductSlider=({children})=>{

        let settings = {
            
          dots: true,
          dotsClass: "slick-dots slick-thumb slick-icons-container",
          infinite: false,
          speed: 500,

          slidesToShow: 3,
          slidesToScroll: 3,

          initialSlide: 0,
          appendDots: dots => (
            <div>
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className="dots-slider">
              {i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className='slick-slider-container'>
            
            <Slider {...settings}>
                {children}
            </Slider>
          </div>
        );
      }
export default ProductSlider