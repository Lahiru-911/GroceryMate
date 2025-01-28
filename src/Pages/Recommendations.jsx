import { useEffect,} from "react";
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
      image: "/recom/r3.webp",
      title: "Save Time on Shopping",
      description:
        "Say goodbye to frequent grocery store trips. Our system predicts your needs and delivers them right to your doorstep.",
    },
    {
      image: "/recom/r4.webp",
      title: "Reduce Food Waste",
      description:
        "By automatically ordering what you need based on consumption patterns, we help you avoid overbuying and minimize food waste.",
    },
    {
      image: "/recom/r5.webp",
      title: "Tailored to Your Needs",
      description:
        "GroceryMate customizes your grocery orders based on your preferences, dietary needs, and usage patterns, making it a highly personalized service.",
    },
  ];

  const imageSections = [
    {
      src: "/recom/r6.webp",
      alt: "Image 1",
      title: "Analyze Consumption Patterns",
      description:
        "We track your daily grocery usage to understand your consumption patterns and predict when you'll need more supplies.",
    },
    {
      src: "/recom/r7.webp",
      alt: "Image 2",
      title: "Automatic Orders",
      description:
        "Based on your usage, we automatically place orders for essential groceries to ensure timely delivery before you run out.",
    },
    {
      src: "/recom/r8.webp",
      alt: "Image 3",
      title: "Timely Delivery",
      description:
        "Your groceries are delivered right on time, so your pantry stays stocked without the need for last-minute shopping trips.",
    },
  ];
  return (
    <>
      {/* Main Hero */}
      <div className="relative mt-2">
        {/* Background Image */}
        <img src="/recom/r1.webp" alt="" />

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
              src="/recom/r2.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Meals Three*/}
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

      {/* Steps Section */}
      <div className="text-center flex flex-col justify-center items-center mt-12 md:mt-16 xl:mt-28 px-4 ">
        <h1 className="text-white font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl italic tracking-wide mb-4">
          Grocery Management in 3 Easy Steps
        </h1>
        <p className="text-gray-300 font-light text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-3/4 lg:w-1/2 leading-relaxed">
          GroceryMate helps you manage your grocery needs efficiently and
          conveniently. Follow these simple steps to ensure you never run out of
          essentials.
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-6 lg:px-12 py-12 ">
        {imageSections.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-[350px] mx-auto flex flex-col items-center bg-white/70 shadow-lg ring-1 ring-gray-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              src={image.src}
              alt={image.alt}
            />
            {/* Text Content */}
            <div className="p-4 text-center">
              <h2 className="text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
                {image.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
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
