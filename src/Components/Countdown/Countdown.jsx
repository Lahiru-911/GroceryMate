import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [targetDate, setTargetDate] = useState(
    localStorage.getItem("targetDate") || null
  );
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [remainingTime, setRemainingTime] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate remaining time
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);

    if (target > now) {
      const totalSeconds = Math.floor((target - now) / 1000);

      const months = Math.floor(totalSeconds / (30 * 24 * 3600));
      const weeks = Math.floor(
        (totalSeconds % (30 * 24 * 3600)) / (7 * 24 * 3600)
      );
      const days = Math.floor((totalSeconds % (7 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setRemainingTime({ months, weeks, days, hours, minutes, seconds });
    } else {
      // Reset countdown if time has expired
      setRemainingTime({
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      localStorage.removeItem("targetDate");
    }
  };

  // Handle setting the target date based on the dropdown
  const handleSetTargetDate = () => {
    const now = new Date();
    let newDate = new Date();

    if (selectedPeriod === "1week") {
      newDate.setDate(now.getDate() + 7);
    } else if (selectedPeriod === "2weeks") {
      newDate.setDate(now.getDate() + 14);
    } else if (selectedPeriod === "1month") {
      newDate.setMonth(now.getMonth() + 1);
    }

    const targetTime = newDate.toISOString();
    setTargetDate(targetTime);
    localStorage.setItem("targetDate", targetTime);
  };

  // Immediately calculate time left when component mounts
  useEffect(() => {
    if (targetDate) {
      calculateTimeLeft(); // Calculate remaining time immediately
      const interval = setInterval(calculateTimeLeft, 1000); // Update every second
      return () => clearInterval(interval);
    }
  }, [targetDate]);

  // On initial load, check localStorage for target date
  useEffect(() => {
    const savedTargetDate = localStorage.getItem("targetDate");
    if (savedTargetDate) {
      setTargetDate(savedTargetDate);
    }
  }, []);

  return (
    <>
      {/* Countdown */}
      <section>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
          <div className="p-10 border-2 rounded-3xl shadow-xl bg-white max-w-4xl w-full">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              Build Your Plan
            </h1>

            {/* Countdown Display */}
            <div className="grid grid-cols-6 gap-6 text-center">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.months}
                </p>
                <p className="text-gray-500 text-sm">Month</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.weeks}
                </p>
                <p className="text-gray-500 text-sm">Week</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.days}
                </p>
                <p className="text-gray-500 text-sm">Day</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.hours}
                </p>
                <p className="text-gray-500 text-sm">Hour</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.minutes}
                </p>
                <p className="text-gray-500 text-sm">Min</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-6xl font-semibold text-gray-800">
                  {remainingTime.seconds}
                </p>
                <p className="text-gray-500 text-sm">Sec</p>
              </div>
            </div>

            {/* Dropdown and Button */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <select
                className="border-2 border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="" disabled>
                  Select Time Period
                </option>
                <option value="1week">1 Week</option>
                <option value="2weeks">2 Weeks</option>
                <option value="1month">1 Month</option>
              </select>
              <button
                className="rounded-full px-5 py-2 shadow-md bg-[#20cd8d] text-white hover:bg-[#1aa471] disabled:bg-gray-400 transition duration-200"
                onClick={handleSetTargetDate}
                disabled={!selectedPeriod}
              >
                Set Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Countdown;
