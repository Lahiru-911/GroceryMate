import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const  = () => {
  const navigate = useNavigate();

  // Function to handle reorder for a single item
  const handleReorder = (grocery) => {
    navigate("/orders", { state: { item: grocery } });
  };

  // Function to handle reorder for all items about to run out
  const handleReorderAll = () => {
    const runOutItems = groceryList.filter((grocery) => grocery.quantity <= 1);

    if (runOutItems.length > 0) {
      // Navigate to the orders page with all run-out items
      navigate("/orders", { state: { items: runOutItems } });
    } else {
      alert("No items to reorder!");
    }
  };

  // Initial grocery list
  const initialGroceryList = [
    { id: 1, item: "Apples", category: "Fruits", quantity: 2 },
    { id: 2, item: "Milk", category: "Dairy", quantity: 1 },
    { id: 3, item: "Rice", category: "Grains", quantity: 10 },
    { id: 4, item: "Eggs", category: "Protein", quantity: 12 },
    { id: 5, item: "Carrots", category: "Vegetables", quantity: 1.5 },
    { id: 6, item: "Bread", category: "Bakery", quantity: 2 },
    { id: 7, item: "Chicken", category: "Protein", quantity: 1 },
    { id: 8, item: "Bananas", category: "Fruits", quantity: 1 },
    { id: 9, item: "Yogurt", category: "Dairy", quantity: 0.5 },
    { id: 10, item: "Tomatoes", category: "Vegetables", quantity: 1 },
    { id: 11, item: "Oats", category: "Grains", quantity: 1 },
    { id: 12, item: "Salmon", category: "Protein", quantity: 0.5 },
  ];

  const [groceryList, setGroceryList] = useState(initialGroceryList);
  const [showAllGroceries, setShowAllGroceries] = useState(false);
  const [showAllRunOutItems, setShowAllRunOutItems] = useState(false);

  // Default number of rows to show
  const defaultRows = 5;

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setGroceryList((prevList) =>
      prevList.map((grocery) =>
        grocery.id === id
          ? { ...grocery, quantity: grocery.quantity + 1 }
          : grocery
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setGroceryList((prevList) =>
      prevList.map((grocery) =>
        grocery.id === id && grocery.quantity > 0
          ? { ...grocery, quantity: grocery.quantity - 1 }
          : grocery
      )
    );
  };

  return (
    <>
     

      {/* Current Groceries Section */}
      <section className="p-5 md:p-10">
        <h2 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Current Groceries List
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg xl:text-2xl">
          Manage your grocery items and quantities.
        </p>

        {/* Table Section */}
        <div className="overflow-auto md:p-10">
          <table className="min-w-full table-auto border-separate border-spacing-0.5 mt-2 lg:mt-5">
            <thead>
              <tr className="bg-[#20cd8d] text-white font-semibold text-xs md:text-sm lg:text-lg">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groceryList
                .slice(0, showAllGroceries ? groceryList.length : defaultRows)
                .map((grocery) => (
                  <tr
                    key={grocery.id}
                    className="bg-gray-50 hover:bg-gray-100 text-center text-xs md:text-sm"
                  >
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.item}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.category}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.quantity}
                    </td>
                    <td className="px-2 py-1 md:py-2">
                      <button
                        onClick={() => increaseQuantity(grocery.id)}
                        className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(grocery.id)}
                        className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            onClick={() => setShowAllGroceries(!showAllGroceries)}
            className="mt-4 text-white bg-[#20cd8d] hover:bg-[#1db97f] rounded-full px-6 py-2"
          >
            {showAllGroceries ? "Show Less" : "See More"}
          </button>
        </div>
      </section>


      {/* Items About to Run Out Section */}
      <section className="p-5 md:p-10 relative">
        <h2 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Items About to Run Out
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg xl:text-2xl">
          Manage your grocery items that need to be reordered soon.
        </p>

        {/* Table Section */}
        <div className="overflow-auto md:p-10">
          <table className="min-w-full table-auto border-separate border-spacing-0.5 mt-2 lg:mt-5">
            <thead>
              <tr className="bg-[#20cd8d] text-white font-semibold text-xs md:text-sm lg:text-lg">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Actions</th>
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
                    className="bg-gray-50 hover:bg-gray-100 text-center text-xs md:text-sm"
                  >
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.item}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.category}
                    </td>
                    <td className="px-2 md:px-4 py-1 md:py-2">
                      {grocery.quantity}
                    </td>
                    <td className="px-2 py-1 md:py-2">
                      <button
                        onClick={() => handleReorder(grocery)}
                        className="px-6 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg"
                      >
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex  justify-between items-center">
            <button
              onClick={() => setShowAllRunOutItems(!showAllRunOutItems)}
              className="mt-4 text-white bg-[#20cd8d] hover:bg-[#1db97f] rounded-full px-6 py-2"
            >
              {showAllRunOutItems ? "Show Less" : "See More"}
            </button>
            {/* Reorder All Button */}
            <button
              onClick={handleReorderAll}
              className=" bg-[#20cd8d] hover:bg-[#1db97f] text-white rounded-full px-6 py-2 text-lg shadow-lg"
            >
              Reorder All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ;





{/* Meals Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-6 bg-[#f4f4f4] place-items-center text-gray-900">
  {sections.map((section, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transform transition-transform hover:scale-105"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#3B82B8]">
        <img
          className="object-cover w-full h-full"
          src={section.image}
          alt={`Image of ${section.title}`}
        />
      </div>
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-[#3B82B8]">
        {section.title}
      </h1>
      <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mt-2">
        {section.description}
      </p>
    </div>
  ))}
</div>





