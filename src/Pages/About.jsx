const About = () => {
  const cardData = [
    {
      title: "Innovation",
      content:
        "We are committed to leveraging the latest technologies to stay ahead of the curve, constantly improving our platform to provide smarter and more efficient services.",
    },
    {
      title: "Integrity",
      content:
        "Integrity is the cornerstone of our relationships. We conduct business with honesty, transparency, and ethical conduct, earning the trust and respect of our clients",
    },
    {
      title: "Customer Centricity",
      content:
        "We prioritize our users' needs by offering intuitive solutions that save time, reduce waste, and simplify their daily routines.",
    },
    {
      title: "Sustainability",
      content:
        "At GroceryMate, we strive to create a sustainable future by promoting mindful consumption and reducing food waste through intelligent grocery management.",
    },
  ];
  return (
    <>
      {/* Transforming Section */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Transforming Grocery Shopping
          </h1>
          <p className="text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            At GroceryMate, we are redefining the way people manage their
            household groceries. Gone are the days of last-minute shopping trips
            or forgotten items. Our platform combines innovation with
            simplicity, delivering a seamless experience for tracking, managing,
            and automating your grocery needs. By predicting your consumption
            patterns and ensuring timely restocking, GroceryMate transforms
            grocery shopping from a chore into an effortless part of your daily
            life.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Brief description about the platform
          </h1>
          <p className="text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            GroceryMate is a cutting-edge platform designed to revolutionize
            grocery management. Powered by advanced machine learning, real-time
            tracking, and smart analytics, our system predicts when your
            groceries will run out and automates the reordering process. Whether
            you're managing essentials for your family or planning ahead,
            GroceryMate ensures that your kitchen is always stocked and your
            shopping is stress-free. With user-friendly features and a focus on
            convenience, we aim to make your life easier while reducing food
            waste and saving valuable time.
          </p>

          <h1 className="text-white font-normal text-center  p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Mission & Vision
          </h1>
          <p className="text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            Our mission is to simplify everyday life by providing smarter
            grocery solutions that eliminate the hassle of shopping while
            promoting sustainability. Our vision is to be the world’s most
            trusted grocery management platform, setting new standards for
            convenience, reliability, and sustainability in modern households.
          </p>
        </div>
      </div>

      {/*  Core Values */}
      <div>
        <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
          Core Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center m-5 text-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-[400px] max-h-[700px] w-full relative rounded-3xl bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10"
            >
              <h1 className="uppercase font-medium m-3 lg:m-5 mt-5 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-none">
                {card.title}
              </h1>
              <p className="text-justify m-6 sm:m-3 md:m-4 sm:mx-8 md:mx-10 text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
