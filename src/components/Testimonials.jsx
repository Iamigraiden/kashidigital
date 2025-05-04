import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      role: "CTO, Fintech Startup",
      content: "Kashi Digital's APIs have transformed our onboarding process, making it faster and more secure. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "John D.",
      role: "Product Manager, Lending Platform",
      content: "The cost-control model is perfect for a growing business. We only pay for what we need.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya M.",
      role: "Head of Compliance, Neobank",
      content: "Implementation was seamless with their excellent documentation and support team. Highly recommended!",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (count) => {
    return (
      <div className="d-flex justify-content-center mb-3">
        {[...Array(count)].map((_, i) => (
          <i key={i} className="bi bi-star-fill text-warning mx-1"></i>
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="fw-bold color-liblue">What our <span className="color-orange">client Say's</span>  about us!</h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <div className="testimonial-card p-4 h-100 bg-light rounded-3">
                {renderStars(testimonial.rating)}
                <p className="text-center mb-4 fst-italic">"{testimonial.content}"</p>
                <div className="text-center">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small className="text-muted">{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;