import React, { useState, useEffect } from "react";

const Orders = () => {
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 border-2 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Build Your Plan</h1>

        {/* Countdown Display */}
        <div className="grid grid-cols-6 gap-4 text-center">
          <div>
            <p className="text-5xl font-semibold">{remainingTime.months}</p>
            <p className="text-gray-500">Month</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">{remainingTime.weeks}</p>
            <p className="text-gray-500">Week</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">{remainingTime.days}</p>
            <p className="text-gray-500">Day</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">{remainingTime.hours}</p>
            <p className="text-gray-500">Hour</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">{remainingTime.minutes}</p>
            <p className="text-gray-500">Min</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">{remainingTime.seconds}</p>
            <p className="text-gray-500">Sec</p>
          </div>
        </div>

        {/* Dropdown and Button */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <select
            className="border rounded-lg p-2 focus:outline-none"
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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSetTargetDate}
            disabled={!selectedPeriod}
          >
            Set Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
