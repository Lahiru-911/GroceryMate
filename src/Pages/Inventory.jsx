import React, { useState, useEffect } from "react";
import Countdown from "../Components/Countdown/Countdown";

const Inventory = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Initial grocery list data
  const initialGroceryList = [
    {
      id: 1,
      item: "Apples",
      category: "Fruits",
      quantity: 10,
      Status: "In Stock",
    },
    {
      id: 2,
      item: "Milk",
      category: "Dairy",
      quantity: 3,
      Status: "Low Stock",
    },
    {
      id: 3,
      item: "Eggs",
      category: "Protein",
      quantity: 12,
      Status: "In Stock",
    },
    {
      id: 4,
      item: "Bananas",
      category: "Fruits",
      quantity: 6,
      Status: "In Stock",
    },
    {
      id: 5,
      item: "Carrots",
      category: "Vegetables",
      quantity: 2,
      Status: "Low Stock",
    },
    {
      id: 6,
      item: "Bread",
      category: "Bakery",
      quantity: 4,
      Status: "Low Stock",
    },
  ];
  const [showAllRunOutItems, setShowAllRunOutItems] = useState(false);
  const handleReorder = (item) => {
    alert(`Reorder request sent for ${item.item}.`);
  };

  const handleReorderAll = () => {
    const lowStockItems = groceryList.filter((item) => item.quantity <= 1);
    alert(
      `Reorder requests sent for: ${lowStockItems
        .map((item) => item.item)
        .join(", ")}.`
    );
  };

  const defaultRows = 4; // Default number of rows to display
  const [groceryList, setGroceryList] = useState(initialGroceryList);
  const [showAllGroceries, setShowAllGroceries] = useState(false);

  // Increase quantity handler
  const increaseQuantity = (id) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              Status: item.quantity + 1 > 3 ? "In Stock" : "Low Stock",
            }
          : item
      )
    );
  };

  // Decrease quantity handler
  const decreaseQuantity = (id) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              Status: item.quantity - 1 <= 3 ? "Low Stock" : "In Stock",
            }
          : item
      )
    );
  };

  return (
    <>
      {/* Main Table */}
      <section>
        <div className="flex justify-center items-center w-full h-40 shadow-lg bg-[#1b1b1b]">
          <h2 className="text-white font-semibold text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl italic tracking-wide">
            Inventory Management
          </h2>
        </div>
        <div className="overflow-auto md:p-10 bg-[#20cd8d] rounded-lg shadow-lg m-3 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <table className="min-w-full table-auto border-separate border-spacing-y-2 mt-5">
            <thead>
              <tr className="bg-white text-gray-800 font-semibold text-sm md:text-md lg:text-lg shadow-md">
                <th className="px-6 py-3 text-left">Item Name</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groceryList
                .slice(0, showAllGroceries ? groceryList.length : defaultRows)
                .map((grocery) => (
                  <tr
                    key={grocery.id}
                    className="bg-white hover:bg-gray-100 text-gray-700 text-sm md:text-md shadow-sm rounded-lg"
                  >
                    <td className="px-6 py-3">{grocery.item}</td>
                    <td className="px-6 py-3">{grocery.category}</td>
                    <td className="px-6 py-3 text-center">
                      {grocery.quantity}
                    </td>
                    <td
                      className={`px-6 py-3 text-center font-semibold ${
                        grocery.Status === "Low Stock"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {grocery.Status}
                    </td>
                    <td className="px-6 py-3 text-center flex justify-center space-x-3">
                      <button
                        onClick={() => increaseQuantity(grocery.id)}
                        className="text-white bg-[#1db97f] hover:bg-[#1a996d] rounded-full px-4 py-2 shadow-md"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => decreaseQuantity(grocery.id)}
                        className="text-white bg-red-500 hover:bg-red-600 rounded-full px-4 py-2 shadow-md"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllGroceries(!showAllGroceries)}
              className="text-white bg-gray-900 hover:bg-gray-800 rounded-full px-6 py-2 shadow-md"
            >
              {showAllGroceries ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <Countdown />

      {/* Current Table */}
      <section>
        <div className="p-5 md:p-10">
          <h2 className="text-black font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Current Groceries List
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-2xl">
            Manage your grocery items and quantities.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-auto md:p-10 bg-[#20cd8d] rounded-lg shadow-lg m-3 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <table className="min-w-full table-auto border-separate border-spacing-y-2 mt-5">
            <thead>
              <tr className="bg-white text-gray-800 font-semibold text-sm md:text-md lg:text-lg shadow-md">
                <th className="px-6 py-3 text-left">Item Name</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groceryList
                .slice(0, showAllGroceries ? groceryList.length : defaultRows)
                .map((grocery) => (
                  <tr
                    key={grocery.id}
                    className="bg-white hover:bg-gray-100 text-gray-700 text-sm md:text-md shadow-sm rounded-lg"
                  >
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.item}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.category}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                      {grocery.quantity}
                    </td>
                    <td className="px-2 py-1 md:py-2 text-center">
                      <button
                        onClick={() => increaseQuantity(grocery.id)}
                        className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg shadow-md"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(grocery.id)}
                        className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full m-2 text-sm md:text-lg"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllGroceries(!showAllGroceries)}
              className="text-white bg-gray-900 hover:bg-gray-800 rounded-full px-6 py-2 shadow-md"
            >
              {showAllGroceries ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </section>

      {/* Run Out Table */}
      <section>
        <div className="p-5 md:p-10 border-t border-gray-800">
          <h2 className="text-black font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Items About to Run Out
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-2xl">
            Manage your grocery items that need to be reordered soon.
          </p>
        </div>
        {/* Table Section */}
        <div className="overflow-auto md:p-10 bg-[#20cd8d] rounded-lg shadow-lg m-3 mx-1 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <table className="min-w-full table-auto border-separate border-spacing-y-2 mt-5">
            <thead>
              <tr className="bg-white text-gray-800 font-semibold text-sm md:text-md lg:text-lg shadow-md">
                <th className="px-6 py-3 text-left">Item Name</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groceryList
                .filter((grocery) => grocery.quantity <= 1)
                .slice(
                  0,
                  showAllRunOutItems
                    ? groceryList.filter((grocery) => grocery.quantity <= 1)
                        .length
                    : defaultRows
                )
                .map((grocery) => (
                  <tr
                    key={grocery.id}
                    className="bg-white hover:bg-gray-100 text-gray-700 text-sm md:text-md shadow-sm rounded-lg"
                  >
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.item}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.category}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                      {grocery.quantity}
                    </td>
                    <td className="px-2 py-1 md:py-2 text-center">
                      <button
                        onClick={() => handleReorder(grocery)}
                        className="text-white bg-red-500 hover:bg-red-600 rounded-full px-4 py-2 shadow-md"
                      >
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setShowAllRunOutItems(!showAllRunOutItems)}
              className="text-white bg-gray-900 hover:bg-gray-800 rounded-full px-6 py-2 shadow-md"
            >
              {showAllRunOutItems ? "Show Less" : "See More"}
            </button>

            <button
              onClick={handleReorderAll}
              className="text-white bg-gray-900 hover:bg-gray-800 rounded-full px-6 py-2 shadow-md"
            >
              Reorder All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inventory;
