import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import { FaCartShopping } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [iframeSrc, setIframeSrc] = useState("");

  const shops = [
    {
      imgSrc: "/home/h1.webp",
      iframeSrc: "https://www.keellssuper.com/",
    },
    {
      imgSrc: "/home/h2.webp",
      iframeSrc: "https://cargillsonline.com/",
    },
    {
      imgSrc: "/home/h3.webp",
      iframeSrc: "https://www.arpico.com/",
    },
    {
      imgSrc: "/home/h4.webp",
      iframeSrc:
        "https://glomark.lk/?gad_source=1&gclid=Cj0KCQiA4L67BhDUARIsADWrl7GcM-9OgggTIoQY3zOfsT0ltBzMQg7_K0m9dNzAZ10YdGKpD2WUCokaAiYcEALw_wcB",
    },
    {
      imgSrc: "/home/h5.webp",
      iframeSrc: "https://www.lankasathosa.lk/",
    },
    {
      imgSrc: "/home/h6.webp",
      iframeSrc: "https://spar2u.lk/",
    },
  ];

  return (
    <>
      <HomeBanner />

      {/*Featured Stores  */}
      <section>
        <div className="mb-10 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <div className="flex items-center gap-2">
            <h2 className="font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Featured Stores
            </h2>
            <FaCartShopping size={20} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-5">
            {shops.map((shop, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="max-w-[500px] max-h-[200px] rounded-3xl cursor-pointer"
                onClick={() => setIframeSrc(shop.iframeSrc)}
              >
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src={shop.imgSrc}
                  alt={`Shop ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iframe section */}
      <section>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center h-screen mb-10 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20"
        >
          <div className="w-full h-screen border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                title="Shop Website"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            ) : (
              <div className="flex justify-center items-center h-full text-gray-500">
                Select a shop to view its website
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GroceryMate Banner */}
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#20cd8d] to-[#1e6b48] rounded-lg shadow-lg p-6 md:p-10 mb-10">
        {/* Decorative Circle for Visual Enhancement */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-xl -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl translate-x-8 translate-y-8"></div>

        {/* Content Section */}
        <h1 className="relative z-10 text-center text-white font-bold text-xl md:text-3xl lg:text-4xl leading-tight">
          Households with smart grocery tracking reduce food waste by
          
        </h1>

        {/* Call to Action */}
        <button className="relative z-10 mt-6 bg-yellow-300 text-gray-800 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Home;
