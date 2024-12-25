import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeBanner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    {
      src: "https://essstr.blob.core.windows.net/uiimg/Carousel/Christmas2024/ChristmasCarousel2024_Web.jpg",
    },
    {
      src: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    },
    {
      src: "https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="flex justify-center items-center mx-28">
      <div className="w-full max-w-full h-[700px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[590px] rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeBanner;
