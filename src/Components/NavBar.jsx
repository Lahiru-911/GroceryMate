import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#20cd8d] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">GroceryMate</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/recommendations"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Recommendations
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
