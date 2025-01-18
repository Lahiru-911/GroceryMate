// Register.js
import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-gray-900 text-white rounded-lg shadow-lg border border-green-500">
        <h1 className="text-3xl font-bold text-center">Welcome GroceryMate</h1>
        <p className="mt-2 text-xl text-center text-gray-300">Create Account</p>
        <form className="mt-6">
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
