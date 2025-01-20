import React, { useState } from "react";

const DataForm = ({ addToInventory }) => {
  const [items, setItems] = useState([
    { name: "Apples", category: "Fruits" },
    { name: "Milk", category: "Dairy" },
    { name: "Bread", category: "Bakery" },
    { name: "Bananas", category: "Fruits" },
  ]);

  const [form, setForm] = useState({ name: "", category: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? form : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, form]);
    }
    setForm({ name: "", category: "" });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(items[index]);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = () => {
    addToInventory(items);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Manage Inventory</h2>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Item Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleInputChange}
              placeholder="Enter category"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Items List */}
        <ul className="mb-6 divide-y divide-gray-200">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-2 hover:bg-gray-100 rounded-md"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-sm px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
