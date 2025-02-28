import React, { useState, useEffect } from "react";
import '../index.css'
const LoadingScreen = () => {
  const [text, setText] = useState(""); // State to hold the current text
  const fullText = "<Hello World />"; // The full text to display

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length === fullText.length) {
        // Check if the current text length matches the full text length
        clearInterval(interval); // If yes, clear the interval to stop further execution
      } else {
        setText((prev) => fullText.slice(0, prev.length + 1)); // If no, update the text by adding the next character from fullText to text
      }
    }, 100); // Run the interval every 100 milliseconds

    return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts or text changes
  }, [text]); // Dependency array with text, so the effect runs when text changes

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-red-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {" "}
          {/* For actual animation */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
