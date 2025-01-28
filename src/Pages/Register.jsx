

export default function Register() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/home/k1.webp")',
      }}
    >
      <div className="w-full max-w-md p-8 bg-opacity-80 bg-gray-900 text-white rounded-lg shadow-lg border border-green-500">
        <h1 className="text-4xl font-bold text-center text-green-500">Welcome to GroceryMate</h1>
        <p className="mt-2 text-xl text-center text-gray-300">Create Your Account</p>
        <form className="mt-6">
          {/* Username */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-8">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 transition-all"
          >
            Sign Up
          </button>
          <p className="mt-4 text-sm text-center text-gray-300">
            Already have an account?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
