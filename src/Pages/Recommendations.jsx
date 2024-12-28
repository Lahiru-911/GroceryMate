import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Recommendations = () => {
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
  const sections = [
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Save Time on Shopping",
      description:
        "Say goodbye to frequent grocery store trips. Our system predicts your needs and delivers them right to your doorstep.",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Reduce Food Waste",
      description:
        "By automatically ordering what you need based on consumption patterns, we help you avoid overbuying and minimize food waste.",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Tailored to Your Needs",
      description:
        "GroceryMate customizes your grocery orders based on your preferences, dietary needs, and usage patterns, making it a highly personalized service.",
    },
  ];

  const imageSections = [
    {
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 1",
      title: "Analyze Consumption Patterns",
      description:
        "We track your daily grocery usage to understand your consumption patterns and predict when you'll need more supplies.",
    },
    {
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 2",
      title: "Automatic Orders",
      description:
        "Based on your usage, we automatically place orders for essential groceries to ensure timely delivery before you run out.",
    },
    {
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 3",
      title: "Timely Delivery",
      description:
        "Your groceries are delivered right on time, so your pantry stays stocked without the need for last-minute shopping trips.",
    },
  ];
  return (
    <>
      {/* Wrapper Div */}
      <div className="relative mt-2">
        {/* Background Image */}
        <img src="../../public/r1.jpg" alt="" />

        {/* Green Overlay with Opacity */}
        <div className="absolute inset-0 z-10 bg-[#20cd8d] opacity-40"></div>

        {/* Content Section */}
        <div className="flex justify-between items-start absolute inset-0 z-20">
          {/* Text Content */}
          <div className="sm:m-2 md:m-3 lg:m-4 xl:m-5 p-2 xl:p-5">
            <h1 className="text-black font-semibold text-lg sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl leading-none mb-1">
              Don’t miss our daily amazing deals.
            </h1>
            <p className="text-gray-500 font-normal text-xs sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl">
              Save up to 60% off on your first order
            </p>
          </div>

          {/* Secondary Image */}
          <div>
            <img
              className="w-[200px] md:w-[500px] lg:w-[700px] xl:w-[850px] 2xl:w-[1250px] h-auto object-cover"
              src="../../public/r2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#f4f4f4] place-items-center text-gray-900 py-12 px-6">
        {sections.map((section, index) => (
          <div
            data-aos="flip-right"
            key={index}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#20cd8d]">
              <img
                className="object-cover w-full h-full"
                src={section.image}
                alt={`Sample Image ${index + 1}`}
              />
            </div>
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-gray-900">
              {section.title}
            </h1>
            <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mt-2 w-5/6 ">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      {/* GETTING STARTED */}
      <div className="text-center flex flex-col justify-center items-center md:mt-16 xl:mt-28">
        <h1 className="text-white font-semibold text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl italic tracking-wide m-3">
          Grocery Management in 3 Easy Steps
        </h1>
        <p className="text-gray-700 font-normal text-sm md:text-base lg:text-lg xl:text-xl w-3/4">
          GroceryMate helps you manage your grocery needs efficiently and
          conveniently. Follow these simple steps to ensure you never run out of
          essentials.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-3 gap-10 m-8">
        {imageSections.map((image, index) => (
          <div
            key={index}
            className="max-w-[400px] max-h-[900px] w-full flex flex-col items-center relative rounded-lg bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10 overflow-hidden"
          >
            <img
              className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
              src={image.src}
              alt={image.alt}
            />
            <div className="flex flex-col justify-center items-center w-full text-center p-4">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {image.title}
              </h1>
              <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl m-2 w-5/6">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendations;
