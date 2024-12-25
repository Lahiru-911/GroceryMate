import React from "react";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section>
        <h2 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl">
          Current Groceries List
        </h2>
      </section>
    </>
  );
};

export default Home;
