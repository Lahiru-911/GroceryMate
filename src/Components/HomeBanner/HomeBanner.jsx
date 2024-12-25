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
      src: "https://essstr.blob.core.windows.net/uiimg/Carousel/Nexus_Online_Promotion_2k24_home_web.jpg",
    },
    {
      src: "https://spar2u.lk/cdn/shop/files/SPAR_Local_web_banner_-_1903x800pix_1903x800.jpg?v=1731409178",
    },
    {
      src: "https://spar2u.lk/cdn/shop/files/Hamper_web_banner_-_1903x800pix_1903x800.jpg?v=1731060736",
    },
  ];

  return (
    <div className="mt-2 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
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

// <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
//   <Slider {...settings}>
//     {teamMembers.map((member, index) => (
//       <div
//         key={index}
//         className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative group overflow-hidden"
//       >
//         <div className="relative w-full h-96">
//           {" "}
//           {/* Set a fixed height here */}
//           <img
//             className="rounded-lg w-full h-full object-cover"
//             src={member.src}
//             alt={member.name}
//           />
//         </div>
//       </div>
//     ))}
//   </Slider>
// </div>;

// <div className="flex justify-center items-center mt-3 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[620px] overflow-hidden">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[620px] rounded-2xl overflow-hidden"
//             >
//               <img
//                 src={image.src}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
