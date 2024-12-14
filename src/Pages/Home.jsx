import React from "react";

const Home = () => {
  const groceryList = [
    { item: "Apples", category: "Fruits", quantity: "2 kg" },
    { item: "Milk", category: "Dairy", quantity: "1 L" },
    { item: "Rice", category: "Grains", quantity: "10 kg" },
    { item: "Eggs", category: "Protein", quantity: "12" },
    { item: "Carrots", category: "Vegetables", quantity: "1.5 kg" },
    { item: "Bread", category: "Bakery", quantity: "2 loaves" },
    { item: "Chicken", category: "Protein", quantity: "1 kg" },
    { item: "Bananas", category: "Fruits", quantity: "1 bunch" },
    { item: "Yogurt", category: "Dairy", quantity: "500 g" },
    { item: "Tomatoes", category: "Vegetables", quantity: "1 kg" },
    { item: "Oats", category: "Grains", quantity: "1 kg" },
    { item: "Salmon", category: "Protein", quantity: "500 g" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="relative bg-[#20CD8D] w-full min-h-screen overflow-hidden">
          {/* Hero Text Section */}
          <div className="absolute z-20 p-5 md:p-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:w-5/6 font-semibold leading-tight text-black ">
              Revolutionize Your Grocery Shopping
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight mt-2 lg:mt-5 text-white">
              Smart, Simple, Timely!
            </h2>
            <p className="mt-4 text-justify w-5/6 md:w-3/4 lg:w-2/3 xl:w-7/12 text-sm sm:text-base md:text-lg xl:text-2xl text-gray-950 ">
              In today's fast-paced world, grocery shopping can often feel like
              a chore, especially when you're constantly running out of
              essential items or struggling to keep up with your household
              needs. GroceryMate is here to change that.
            </p>
          </div>
          {/* Hero Image */}
          <div className="absolute bottom-0 right-0 z-10">
            <img
              className="w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-xl xl:max-w-7xl h-auto object-contain"
              src="./public/dd.png"
              alt="Illustration of a grocery shopping assistant"
            />
          </div>
        </div>
      </section>

      {/* Current Groceries Section */}
      <section className="">
        {/* Text Section */}
        <div className="p-5 md:p-10">
          <h2 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Current Groceries List
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg xl:text-2xl">
            Manage your grocery items and quantities.
          </p>
        </div>
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
              {groceryList.map((grocery, index) => (
                <tr
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 text-center text-xs md:text-sm"
                >
                  <td className="px-2 md:px-4 py-1 md:py-2">{grocery.item}</td>
                  <td className="px-2 md:px-4 py-1 md:py-2">
                    {grocery.category}
                  </td>
                  <td className="px-2 md:px-2 py-1 md:py-2">
                    {grocery.quantity}
                  </td>
                  <td className="px-2 py-1 md:py-2">
                    <button className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg">
                      +
                    </button>
                    <button className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg">
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Banner Section */}
      <section>
        <div className="bg-[#20cd8d] w-full min-h-[200px] md:min-h-[300px] lg:min-h-[350px] h-[50vh] mt-3">
          <img
            className="object-cover w-full h-full"
            src="https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg"
            alt="Grocery Image"
          />
        </div>
      </section>

      {/* Items Run Out */}
      <section className="">
        {/* Text Section */}
        <div className="p-5 md:p-10">
          <h2 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Items About to Run Out
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg xl:text-2xl">
            Manage your grocery items that need to be reordered soon.
          </p>
        </div>

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
                .filter((grocery) => {
                  // Extract the numeric portion of quantity
                  const quantityNumber = parseFloat(grocery.quantity);
                  // Only show items with a quantity of 3 or less
                  return !isNaN(quantityNumber) && quantityNumber <= 3;
                })
                .map((grocery, index) => (
                  <tr
                    key={index}
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
                      <button className="w-8 h-8 md:w-12 md:h-12 px-2 py-2 bg-[#1db97f] hover:bg-[#20cd8d] text-white rounded-full m-2 text-sm md:text-lg">
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Home;
