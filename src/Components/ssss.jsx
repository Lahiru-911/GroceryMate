<section className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="mb-2">
            Have questions or need help? We're here for you! Reach out to us via the information below.
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@grocerymate.com" className="text-blue-400 hover:underline">
              support@grocerymate.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 GroceryMate Lane, Fresh City, FC 45678
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Send Us a Message</h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>









home before 

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import { FaCartShopping } from "react-icons/fa6";

const Hme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to trigger multiple times
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shops = [
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-OE1mczVL8Ximage%20(1).png",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-Gf5rNDlbxnprasara%20(1).png",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-ukG4Tf6rND600x350-keels-krest.png",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-EiW7KnxblZknorr-banner.png",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-DZmcyUK7WiRide-Cargills-online-banner.png",
    },
    {
      imgSrc:
        "https://cargillsonline.com/VendorItems/Banner/DySec-akY9MpAdR2kotmal.png",
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
                className=" max-w-[500px] max-h-[200px] rounded-3xl"
              >
                <a href="">
                  <img
                    className="w-full h-full object-cover rounded-3xl"
                    src={shop.imgSrc}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center h-screen mt-2 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <div className="w-full  h-screen border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.residuesolution.com/"
              title="Embedded Website"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ;
