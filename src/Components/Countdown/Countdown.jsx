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

  useEffect(() => {
    if (targetDate) {
      calculateTimeLeft();
      const interval = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(interval);
    }
  }, [targetDate]);

  useEffect(() => {
    const savedTargetDate = localStorage.getItem("targetDate");
    if (savedTargetDate) {
      setTargetDate(savedTargetDate);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/home/k2.webp')] bg-cover bg-center bg-no-repeat px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Plan Your Countdown
        </h1>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(remainingTime).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
              <p className="text-4xl md:text-6xl font-semibold text-gray-800">
                {value}
              </p>
              <p className="text-gray-500 text-sm capitalize">{unit}</p>
            </div>
          ))}
        </div>

        {/* Dropdown and Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <select
            className="w-full sm:w-auto border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 disabled:bg-gray-400"
            onClick={handleSetTargetDate}
            disabled={!selectedPeriod}
          >
            Set Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
