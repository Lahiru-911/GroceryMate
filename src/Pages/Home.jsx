import React from "react";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section>
        <div className="mt-2 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <h2 className="font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Current Groceries List
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
