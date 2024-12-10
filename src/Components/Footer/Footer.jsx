import React from "react";
import FooterCarousel from "./FooterCarousel";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E9FAF4] w-full h-screen">
      <FooterCarousel />
      <div className="grid grid-cols-4 justify-between">
        <div>
          <h4 class="text-lg font-semibold mb-4">About GroceryMate</h4>
          <p>
            GroceryMate simplifies your grocery management with smart tracking
            and automated delivery. Always fresh, always on time!
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="#" class="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Inventory
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Recommendations
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Section */}
        <div>
          <h1>Contact Us</h1>
          <p className="mb-2">
            Have questions or need help? We're here for you! Reach out to us via
            the information below.
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@grocerymate.com"
              className="text-blue-400 hover:underline"
            >
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
        {/* Social Media */}
        <div>
          <h1>Follow Us</h1>
          <p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook"
            >
              Facebook <FaExternalLinkAlt />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              Instagram <FaExternalLinkAlt />
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube"
            >
              YouTube <FaExternalLinkAlt />
            </a>
          </p>
          <p>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our TikTok"
            >
              TikTok <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
