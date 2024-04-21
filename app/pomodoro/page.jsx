"use client";
import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && !isPaused) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            alert("Pomodoro session completed!"); // Change this to your preferred notification method
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, isPaused, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const restartTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
    setIsPaused(false);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/90 font-pop text-white">
      <div className="text-4xl font-bold text-center bg-clip-text  bg-gradient-to-b from-blue-300 to-blue-700 text-transparent">
        Pomodoro Timer
      </div>
      <p className="mt-2">Study for 25 mins, take 5 mins break, repeat.</p>
      <div className="flex justify-center mt-8 items-center">
  <div className="relative w-64 h-64">
    <div className="absolute w-full h-full rounded-full border-8 shadow-lg shadow-blue-600 border-blue-500 flex items-center justify-center">
      <span className="text-4xl font-bold">
        {formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  </div>
</div>




      <div className="mt-16 flex flex-row">
      <button
  className="px-4 flex flex-row justify-center items-center gap-1 py-2 mr-4 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-md text-white focus:outline-none hover:from-gray-700 hover:to-gray-800 hover:shadow-md hover:shadow-blue-600"
  onClick={startTimer}
  disabled={isActive}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#0096ff" d="M8 19V5l11 7z"></path>
  </svg>
  Start
</button>
<button
  className="px-4 flex flex-row justify-center items-center gap-1 py-2 mr-4 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-md text-white focus:outline-none hover:from-gray-700 hover:to-gray-800 hover:shadow-md hover:shadow-blue-600"
  onClick={pauseTimer}
  disabled={!isActive || isPaused}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#0096ff" d="M6 19h4V5H6zm8-14v14h4V5z"></path>
  </svg>
  Pause
</button>
<button
  className="px-4 flex flex-row justify-center items-center gap-1 py-2 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-md text-white focus:outline-none hover:from-gray-700 hover:to-gray-800 hover:shadow-md hover:shadow-blue-600"
  onClick={restartTimer}
  disabled={isActive}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="none" stroke="#0096ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7a8 8 0 1 1-5.3 14L4 17.6"></path>
      <path d="M9 17H4v5"></path>
    </g>
  </svg>
  Restart
</button>
          </div> 
    </div>
  );
};

export default PomodoroTimer;

