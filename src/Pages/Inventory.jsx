import React, { useState, useEffect } from "react";

const Inventory = () => {
  const [targetDate, setTargetDate] = useState(
    localStorage.getItem("targetDate") || null
  );
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [remainingTime, setRemainingTime] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate remaining time
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);

    if (target > now) {
      const totalSeconds = Math.floor((target - now) / 1000);

      const months = Math.floor(totalSeconds / (30 * 24 * 3600));
      const weeks = Math.floor(
        (totalSeconds % (30 * 24 * 3600)) / (7 * 24 * 3600)
      );
      const days = Math.floor((totalSeconds % (7 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setRemainingTime({ months, weeks, days, hours, minutes, seconds });
    } else {
      // Reset countdown if time has expired
      setRemainingTime({
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      localStorage.removeItem("targetDate");
    }
  };

  // Handle setting the target date based on the dropdown
  const handleSetTargetDate = () => {
    const now = new Date();
    let newDate = new Date();

    if (selectedPeriod === "1week") {
      newDate.setDate(now.getDate() + 7);
    } else if (selectedPeriod === "2weeks") {
      newDate.setDate(now.getDate() + 14);
    } else if (selectedPeriod === "1month") {
      newDate.setMonth(now.getMonth() + 1);
    }

    const targetTime = newDate.toISOString();
    setTargetDate(targetTime);
    localStorage.setItem("targetDate", targetTime);
  };

  // Immediately calculate time left when component mounts
  useEffect(() => {
    if (targetDate) {
      calculateTimeLeft(); // Calculate remaining time immediately
      const interval = setInterval(calculateTimeLeft, 1000); // Update every second
      return () => clearInterval(interval);
    }
  }, [targetDate]);

  // On initial load, check localStorage for target date
  useEffect(() => {
    const savedTargetDate = localStorage.getItem("targetDate");
    if (savedTargetDate) {
      setTargetDate(savedTargetDate);
    }
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
      {/* Current Groceries Section */}
      <section className="">
        <div className="flex justify-center items-center w-full h-32 bg-[#182527]">
          <h2 className="text-white font-medium text-center text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-6xl italic">
            Inventory Management
          </h2>
        </div>

        {/* Table Section */}
        <div className="overflow-auto md:p-10">
          <table className="min-w-full table-auto border-separate border-spacing-0.5 mt-2 lg:mt-5">
            <thead>
              <tr className="bg-[#20cd8d] text-white font-semibold text-xs md:text-sm lg:text-lg">
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Status</th>
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
                    <td
                      className={`px-2 md:px-4 py-1 md:py-2 font-semibold ${
                        grocery.Status === "Low Stock"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {grocery.Status}
                    </td>
                    <td className="px-2 py-1 md:py-2">
                      <button
                        onClick={() => increaseQuantity(grocery.id)}
                        className="mt-4 text-white bg-[#20cd8d] hover:bg-[#1db97f] rounded-full px-6 py-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => decreaseQuantity(grocery.id)}
                        className="mt-4 text-white bg-[#20cd8d] hover:bg-[#1db97f] rounded-full px-6 py-2 m-2"
                      >
                        Remove
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

      <section>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="p-8 border-2 rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">
              Build Your Plan
            </h1>

            {/* Countdown Display */}
            <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <p className="text-5xl font-semibold">{remainingTime.months}</p>
                <p className="text-gray-500">Month</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">{remainingTime.weeks}</p>
                <p className="text-gray-500">Week</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">{remainingTime.days}</p>
                <p className="text-gray-500">Day</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">{remainingTime.hours}</p>
                <p className="text-gray-500">Hour</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">
                  {remainingTime.minutes}
                </p>
                <p className="text-gray-500">Min</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">
                  {remainingTime.seconds}
                </p>
                <p className="text-gray-500">Sec</p>
              </div>
            </div>

            {/* Dropdown and Button */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <select
                className="border rounded-lg p-2 focus:outline-none"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="" disabled>
                  Select Time Period
                </option>
                <option value="1week">1 Week</option>
                <option value="2weeks">2 Weeks</option>
                <option value="1month">1 Month</option>
              </select>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSetTargetDate}
                disabled={!selectedPeriod}
              >
                Set Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inventory;

{
  /* <div className="flex justify-center items-center w-full h-32 bg-[#182527]">
        <h2 className="text-white font-medium text-center text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-6xl italic">
          Inventory Management
        </h2>
      </div>

      <table className="min-w-full table-auto border-separate border-spacing-0.5">
        <thead>
          <tr className="bg-[#20cd8d] text-white">
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Item Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">  
              Quantity
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Unit</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Threshold
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Last Updated
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-2">Apples</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">Kg</td>
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">2024-12-01</td>
            <td className="px-4 py-2">In Stock</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-2">Milk</td>
            <td className="px-4 py-2">15</td>
            <td className="px-4 py-2">Liters</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">2024-12-02</td>
            <td className="px-4 py-2">Low Stock</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-2">Eggs</td>
            <td className="px-4 py-2">200</td>
            <td className="px-4 py-2">Pieces</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">2024-12-03</td>
            <td className="px-4 py-2">In Stock</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-2">Banana</td>
            <td className="px-4 py-2">25</td>
            <td className="px-4 py-2">Kg</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">2024-12-01</td>
            <td className="px-4 py-2">Low Stock</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-2">Orange</td>
            <td className="px-4 py-2">30</td>
            <td className="px-4 py-2">Kg</td>
            <td className="px-4 py-2">15</td>
            <td className="px-4 py-2">2024-12-02</td>
            <td className="px-4 py-2">In Stock</td>
          </tr>
        </tbody>
      </table> */
}

// <div className="overflow-x-auto">
//   <table className="min-w-full bg-white border border-gray-300">
//     <thead>
//       <tr>
//         <th className="px-4 py-2 text-left border-b">Item</th>
//         <th className="px-4 py-2 text-left border-b">Quantity</th>
//         <th className="px-4 py-2 text-left border-b">Status</th>
//         <th className="px-4 py-2 text-left border-b">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td className="px-4 py-2 border-b">Bananas</td>
//         <td className="px-4 py-2 border-b">5</td>
//         <td className="px-4 py-2 border-b">Running Low</td>
//         <td className="px-4 py-2 border-b">
//           <button className="px-2 py-1 text-white bg-blue-500 rounded">Reorder</button>
//         </td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b">Milk</td>
//         <td className="px-4 py-2 border-b">2L</td>
//         <td className="px-4 py-2 border-b">In Stock</td>
//         <td className="px-4 py-2 border-b">
//           <button className="px-2 py-1 text-white bg-green-500 rounded">Update</button>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>
