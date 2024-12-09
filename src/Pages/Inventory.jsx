import React from "react";

const Inventory = () => {
  return <>
  <div className="flex justify-center items-center w-full h-32 bg-[#182527]">
    <h2 className="text-white font-medium text-center text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-6xl italic">Inventory Management</h2>
  </div>

  <table class="min-w-full table-auto border-separate border-spacing-0.5">
  <thead>
    <tr class="bg-green-500 text-white">
      <th class="px-4 py-2 text-left text-sm font-semibold">Song</th>
      <th class="px-4 py-2 text-left text-sm font-semibold">Artist</th>
      <th class="px-4 py-2 text-left text-sm font-semibold">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hover:bg-gray-100">
      <td class="px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td class="px-4 py-2">Malcolm Lockyer</td>
      <td class="px-4 py-2">1961</td>
    </tr>
    <tr class="bg-gray-50 hover:bg-gray-100">
      <td class="px-4 py-2">Witchy Woman</td>
      <td class="px-4 py-2">The Eagles</td>
      <td class="px-4 py-2">1972</td>
    </tr>
    <tr class="hover:bg-gray-100">
      <td class="px-4 py-2">Shining Star</td>
      <td class="px-4 py-2">Earth, Wind, and Fire</td>
      <td class="px-4 py-2">1975</td>
    </tr>
  </tbody>
</table>

  </>;
};

export default Inventory;
