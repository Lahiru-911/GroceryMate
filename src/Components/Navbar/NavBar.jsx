import { Link } from "react-router-dom";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Products", path: "/orders" },
    { name: "Recommendations", path: "/recommendations" },
    { name: "About", path: "/about" },
  ];

  const getActiveItem = () => {
    const currentPath = location.pathname;
    const currentItem = menuItems.find((item) => item.path === currentPath);

    return currentItem ? currentItem.name : "Home";
  };

  const [activeItem, setActiveItem] = useState(getActiveItem());

  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location.pathname]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="font-inter"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Residue Logo for Mobile */}
      <NavbarContent className="sm:hidden pr-6" justify="center">
        <NavbarBrand>
          <RouterLink
            to="/"
            onClick={() => {
              setActiveItem("Home");
              setIsMenuOpen(false);
            }}
          >
            <img src={""} alt="Residue Logo" className="h-5 cursor-pointer" />
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Residue Logo for Desktop */}
      <NavbarBrand className="hidden sm:flex">
        <RouterLink
          to="/"
          onClick={() => {
            setActiveItem("Home");
            setIsMenuOpen(false);
          }}
        >
          <img
            src={""}
            alt="Residue Logo"
            className="h-5 sm:h-4 md:h-5 lg:h-7 xl:h-8 cursor-pointer"
          />
        </RouterLink>
      </NavbarBrand>

      {/* Desktop Menu Items */}
      <NavbarContent
        className="hidden sm:flex gap-4 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-14 2xl:gap-16"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <RouterLink
              to={item.path}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }} // Set active item and close menu
              className={`${
                activeItem === item.name
                  ? "text-[#0081FB] font-bold"
                  : "text-gray-600"
              } hover:text-[#0081FB] transition-colors duration-300 text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-xl`}
            >
              {item.name}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Become a Client Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/contact">
            <button className="relative p-1 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-base font-inter font-normal">
              + Become a Client
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <RouterLink
              to={item.path}
              className={`w-full ${
                activeItem === item.name
                  ? "font-bold text-[#0081FB]"
                  : "text-gray-600"
              } text-base sm:text-lg`}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }} // Set active item and close menu
            >
              {item.name}
            </RouterLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
