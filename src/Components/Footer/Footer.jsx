import React from "react";
import FooterCarousel from "./FooterCarousel";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E9FAF4] w-full">
      <FooterCarousel />

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:justify-items-center  gap-6 md:gap-12">
        {/* About Section */}
        <div className="text-start space-y-2">
          <h4 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium">
            About GroceryMate
          </h4>
          <p className="text-sm md:text-base lg:text-base xl:text-lg font-normal w-5/6 ">
            GroceryMate simplifies your grocery management with smart tracking
            and automated delivery. Always fresh, always on time!
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm md:text-base lg:text-base xl:text-lg font-normal">
            <li>
              <a href="/" className=" hover:text-green-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/inventory"
                className="hover:text-green-500 transition-colors"
              >
                Inventory
              </a>
            </li>
            <li>
              <a
                href="/orders"
                className="hover:text-green-500 transition-colors"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                href="/recommendations"
                className="hover:text-green-500 transition-colors"
              >
                Recommendations
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-green-500 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium">
            Contact Us
          </h4>
          <p className="text-sm md:text-base lg:text-base xl:text-lg font-normal w-5/6">
            Have questions or need help? We're here for you! Reach out to us via
            the information below.
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@grocerymate.com"
              className="text-blue-500 hover:underline"
            >
              support@grocerymate.com
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 GroceryMate Lane, Fresh City
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h4 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium">
            Follow Us
          </h4>
          <div className="space-y-2 text-sm md:text-base lg:text-base xl:text-lg font-normal">
            <p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
                className="text-black hover:text-[#20cd8d] flex items-center space-x-2"
              >
                <span>Facebook</span>
                <FaExternalLinkAlt />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="text-black hover:text-[#20cd8d] flex items-center space-x-2"
              >
                <span>Instagram</span>
                <FaExternalLinkAlt />
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube"
                className="text-black hover:text-[#20cd8d] flex items-center space-x-2"
              >
                <span>YouTube</span>
                <FaExternalLinkAlt />
              </a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok"
                className="text-black hover:text-[#20cd8d] flex items-center space-x-2"
              >
                <span>TikTok</span>
                <FaExternalLinkAlt />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black py-6 mt-8 text-center text-sm md:text-base lg:text-base xl:text-lg font-normal">
        <p>&copy; 2024 GroceryMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
