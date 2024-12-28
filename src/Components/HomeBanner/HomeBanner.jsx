import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeBanner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };

  const images = [
    {
      src: "/home/hr1.webp",
    },
    {
      src: "/home/hr2.webp",
    },
    {
      src: "/home/hr3.webp",
    },
    {
      src: "/home/hr4.webp",
    },
  ];

  return (
    <div className="max-h-screen mt-2 mb-10 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="group overflow-hidden">
            <div className="w-full h-auto ">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;


{/* <div className="max-h-screen mt-2 mb-10 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]"></div> */}

