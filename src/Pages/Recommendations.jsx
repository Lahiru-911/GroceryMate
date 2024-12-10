const Recommendations = () => {
  return (
    <>
      {/* Wrapper Div */}
      <div className="relative mt-2 sm:mt-3 md:mt-4 xl:mt-5">
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
            <p className="text-[#838383] font-normal text-xs sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl">
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

      <div className="grid grid-cols-3 gap-3 m-5 place-items-center">
        {/* First Image Container */}
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sample Image 1"
          />
        </div>

        {/* Second Image Container */}
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sample Image 2"
          />
        </div>

        {/* Third Image Container */}
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sample Image 3"
          />
        </div>
      </div>
    </>
  );
};

export default Recommendations;
