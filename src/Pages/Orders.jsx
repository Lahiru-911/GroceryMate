import React from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  const item = location.state?.item; // Retrieve the single passed item
  const items = location.state?.items; // Retrieve the batch of items (if passed)

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-indigo-500"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>All Orders</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Item Order */}
          {item && (
            <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">New Order</h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Item:</span> {item.item}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> {item.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Quantity:</span> {item.quantity}
              </p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
                Confirm Order
              </button>
            </div>
          )}

          {/* Batch Orders */}
          {items && items.length > 0 && (
            <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Batch Order</h2>
              <p className="text-sm text-gray-600">
                The following items are included in this batch order:
              </p>
              <ul className="mt-2">
                {items.map((grocery, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium">{grocery.item}</span> -
                    Category: {grocery.category}, Quantity: {grocery.quantity}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
                Confirm All Orders
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;
