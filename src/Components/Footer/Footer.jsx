import React from "react";
import FooterCarousel from "./FooterCarousel";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ccf4e5] w-full">
      <FooterCarousel />

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {/* About Section */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-800">
            About GroceryMate
          </h4>
          <p className="text-base text-gray-600 leading-relaxed">
            GroceryMate simplifies your grocery management with smart tracking
            and automated delivery. Always fresh, always on time!
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-800">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Inventory", "Orders", "Recommendations", "About"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-base text-gray-600 hover:text-[#20cd8d] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-800">Contact Us</h4>
          <p className="text-base text-gray-600 leading-relaxed">
            Have questions or need help? We're here for you!
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@grocerymate.com"
                className="text-[#20cd8d] hover:underline"
              >
                support@grocerymate.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1-234-567-890
            </li>
            <li>
              <strong>Address:</strong> 123 GroceryMate Lane, Fresh City
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-800">Follow Us</h4>
          <div className="space-y-3">
            {[
              { name: "Facebook", url: "https://www.facebook.com" },
              { name: "Instagram", url: "https://www.instagram.com" },
              { name: "YouTube", url: "https://www.youtube.com" },
              { name: "TikTok", url: "https://www.tiktok.com" },
            ].map((social) => (
              <p key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-[#20cd8d] flex items-center space-x-2 transition-colors"
                >
                  <span>{social.name}</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-6 mt-8 text-center text-sm text-gray-600">
        <p>&copy; 2024 GroceryMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
