import React from "react";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import { FaCartShopping } from "react-icons/fa6";

const Home = () => {
  const shops = [
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/07/09/16/37/abstract-8884025_960_720.png",
    },
  ];
  return (
    <>
      <HomeBanner />
      <section className="">
        <div className="mt-2 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <div className="flex items-center gap-2">
            <h2 className="font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Featured Stores
            </h2>
            <FaCartShopping size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {shops.map((shop, index) => (
            <div key={index}>
              <a href="">
                <img src={shop.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section></section>
    </>
  );
};

export default Home;
