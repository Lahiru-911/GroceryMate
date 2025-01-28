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
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/home/k1.webp')] bg-cover bg-center"
    >
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Manage Inventory
        </h2>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleInputChange}
              placeholder="Enter category"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Items List */}
        <ul className="mb-6 divide-y divide-gray-300">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-2 hover:bg-gray-100 rounded-md"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all"
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
            className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
