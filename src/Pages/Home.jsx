import React from "react";

const Home = () => {
  const groceryList = [
    { item: "Apples", category: "Fruits", quantity: "5 kg" },
    { item: "Milk", category: "Dairy", quantity: "2 L" },
    { item: "Rice", category: "Grains", quantity: "10 kg" },
    { item: "Eggs", category: "Protein", quantity: "12" },
    { item: "Carrots", category: "Vegetables", quantity: "1.5 kg" },
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
      <section className="p-5 md:p-10">
        {/* Text Section */}
        <h2 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Current Groceries List
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg xl:text-2x">
          Manage your grocery items and quantities.
        </p>
        {/* Table Section */}
        <table className="min-w-full table-auto border-separate border-spacing-0.5 mt-2 lg:mt-5">
          <thead>
            <tr className="bg-[#20cd8d] text-white">
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Item
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Quantity
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((grocery, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2">{grocery.item}</td>
                <td className="px-4 py-2">{grocery.category}</td>
                <td className="px-4 py-2">{grocery.quantity}</td>
                <td className="px-4 py-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                    Update
                  </button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section>
        <div className="bg-[#20cd8d] w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] h-[50vh]">
          {/* Content goes here */}
        </div>
      </section>
    </>
  );
};

export default Home;
