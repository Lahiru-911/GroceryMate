import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const FooterCarousel = () => {
  const [speed, setSpeed] = useState(50); // Default speed

  const images = [
    {
      src: "https://awsmd.com/_next/static/media/uber.391ab754.svg",
      alt: "CompanyName1",
    },
    {
      src: "https://awsmd.com/_next/static/media/oracle.f6c579b2.svg ",
      alt: "CompanyName2",
    },
    {
      src: "https://awsmd.com/_next/static/media/gofundme.d15a4c9e.svg",
      alt: "CompanyName3",
    },
    {
      src: "https://awsmd.com/_next/static/media/nutanix.76cbb1b9.svg",
      alt: "CompanyName4",
    },
    {
      src: "https://awsmd.com/_next/static/media/upside.3fc33722.svg",
      alt: "CompanyName5",
    },
    {
      src: "https://awsmd.com/_next/static/media/intel.0d9f9c40.svg",
      alt: "CompanyName6",
    },
    {
      src: "https://awsmd.com/_next/static/media/new-balance.9bcd089f.svg",
      alt: "CompanyName7",
    },
    {
      src: "https://awsmd.com/_next/static/media/statefarm.91373514.svg",
      alt: "CompanyName8",
    },
    {
      src: "https://awsmd.com/_next/static/media/crosslead.2cd4c2e3.png",
      alt: "CompanyName9",
    },
    {
      src: "https://awsmd.com/_next/static/media/voldis.21ec3317.png",
      alt: "CompanyName10",
    },
  ];

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Small screens (sm)
        setSpeed(30);
      } else if (width < 768) {
        // Medium screens (md)
        setSpeed(40);
      } else if (width < 1024) {
        // Large screens (lg)
        setSpeed(50);
      } else {
        // Extra large screens (xl and up)
        setSpeed(60);
      }
    };

    updateSpeed();

    window.addEventListener("resize", updateSpeed);

    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Text-Tagline */}
      <div className="m-3 sm:m-4 md:m-5 lg:m-6 xl:m-7 2xl:m-8 font-light text-center">
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
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            className="w-28 h-40 p-16 border sm:w-32 md:w-40 lg:w-52 xl:w-64 2xl:w-80 max-w-none"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default FooterCarousel;
