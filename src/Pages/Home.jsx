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
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-OE1mczVL8Ximage%20(1).png",
      iframeSrc: "https://www.residuesolution.com/",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-Gf5rNDlbxnprasara%20(1).png",
      iframeSrc: "https://example.com/2", // Replace with actual URL
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-ukG4Tf6rND600x350-keels-krest.png",
      iframeSrc: "https://example.com/3", // Replace with actual URL
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-EiW7KnxblZknorr-banner.png",
      iframeSrc: "https://example.com/4", // Replace with actual URL
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-DZmcyUK7WiRide-Cargills-online-banner.png",
      iframeSrc: "https://example.com/5", // Replace with actual URL
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-akY9MpAdR2kotmal.png",
      iframeSrc: "https://example.com/6", // Replace with actual URL
    },
  ];

  return (
    <>
      <HomeBanner />

      <section>
        <div className="mt-2 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
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

      <section>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center h-screen mt-5 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20"
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
    </>
  );
};

export default Home;
