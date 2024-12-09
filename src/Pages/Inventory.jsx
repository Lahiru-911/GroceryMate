import React from "react";

const Inventory = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-32 bg-[#182527]">
        <h2 className="text-white font-medium text-center text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-6xl italic">
          Inventory Management
        </h2>
      </div>

      <table class="min-w-full table-auto border-separate border-spacing-0.5">
        <thead>
          <tr class="bg-[#20cd8d] text-white ">
            <th class="px-4 py-2 text-left text-sm font-semibold">Item Name</th>
            <th class="px-4 py-2 text-left text-sm font-semibold">Quantity</th>
            <th class="px-4 py-2 text-left text-sm font-semibold">Unit</th>
            <th class="px-4 py-2 text-left text-sm font-semibold">Threshold</th>
            <th class="px-4 py-2 text-left text-sm font-semibold">
              Last Updated
            </th>
            <th class="px-4 py-2 text-left text-sm font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-100">
            <td class="px-4 py-2">Apples</td>
            <td class="px-4 py-2">Malcolm Lockyer</td>
            <td class="px-4 py-2">1961</td>
          </tr>
          <tr class="bg-gray-50 hover:bg-gray-100">
            <td class="px-4 py-2">Milk</td>
            <td class="px-4 py-2">The Eagles</td>
            <td class="px-4 py-2">1972</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="px-4 py-2">Eggs</td>
            <td class="px-4 py-2">Earth, Wind, and Fire</td>
            <td class="px-4 py-2">1975</td>
          </tr>
          <tr class="bg-gray-50 hover:bg-gray-100">
            <td class="px-4 py-2">Banana</td>
            <td class="px-4 py-2">The Eagles</td>
            <td class="px-4 py-2">1972</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="px-4 py-2">Orange</td>
            <td class="px-4 py-2">Earth, Wind, and Fire</td>
            <td class="px-4 py-2">1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Inventory;
