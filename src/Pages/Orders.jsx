

export default function Orders() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/home/k1.webp')] bg-cover bg-center"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md bg-opacity-90">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome to GroceryMate
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600">Sign In</p>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Sign up
          </a>
          <a href="/dataForm" className="text-green-600 hover:underline ml-2">
            Sign xx
          </a>
        </p>
      </div>
    </div>
  );
}
