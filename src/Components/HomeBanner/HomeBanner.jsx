import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeBanner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <div className="mt-2 flex justify-center items-center mx-2">
      <div className="w-full max-w-full h-[700px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full max-h-[590px] rounded-2xl overflow-hidden"
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
