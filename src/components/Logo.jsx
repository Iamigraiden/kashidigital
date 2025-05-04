import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './comp.css'
import { clientsLogo } from '../json/Data';

const Logo = () => {
    const clientSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows:false,

            }
          }
        ]
      };
  return (
    <>
      <section className="py-md-5 pt-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 color-liblue">
            TRUSTED BY <span className="color-orange">INDIA'S LEADING</span>  INNOVATORS
          </h2>
          <div className="logo-slider rounded-4 mt-5">
          <Slider {...clientSettings}>
            {clientsLogo.map(data => (
               
                 <div className="client-logo">
                   <img
                     src={data.image}
                     alt="image"
                     className="img-fluid"
                   />
                 </div>
               
            ))}
            </Slider>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Logo
