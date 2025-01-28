import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const FooterCarousel = () => {
  const [speed, setSpeed] = useState(50); // Default speed

  const images = [
    {
      src: "/home/h1.webp", // Replace with your image path
      alt: "CompanyName1",
    },
    {
      src: "/home/h2.webp",
      alt: "CompanyName2",
    },
    {
      src: "/home/h3.webp",
      alt: "CompanyName3",
    },
    {
      src: "/home/h4.webp",
      alt: "CompanyName4",
    },
    {
      src: "/home/h5.webp",
      alt: "CompanyName5",
    },
    {
      src: "/home/h6.webp",
      alt: "CompanyName6",
    },
    {
      src: "/home/h1.webp",
      alt: "CompanyName7",
    },
    {
      src: "/home/h2.webp",
      alt: "CompanyName8",
    },
    {
      src: "/home/h3.webp",
      alt: "CompanyName9",
    },
    {
      src: "/home/h4.webp",
      alt: "CompanyName10",
    },
  ];

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSpeed(30);
      } else if (width < 768) {
        setSpeed(40);
      } else if (width < 1024) {
        setSpeed(50);
      } else {
        setSpeed(60);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="bg-white">
      {/* Text-Tagline */}
      <div className="p-3 font-light text-center">
        <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Our Partners & Vendors
        </h1>
      </div>
      {/* Marquee-Tagline */}
      <Marquee
        className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-9 2xl:mt-11"
        speed={speed}
        pauseOnHover={true}
        loop={0}
        autoFill={true}
      >
        {images.concat(images).map((img, index) => (
          <div
            key={index}
            className="p-6 md:p-8 border h-28 sm:h-32 md:h-36 lg:h-40 xl:h-48 2xl:h-56 w-auto sm:w-32 md:w-40 lg:w-52 xl:w-64 2xl:w-80 max-w-none flex justify-center items-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FooterCarousel;
