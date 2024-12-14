

const Inventory = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-32 bg-[#182527]">
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
      </table>
    </>
  );
};

export default Inventory;


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
