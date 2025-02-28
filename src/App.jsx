import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./components/MainPage";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status (is the page loading or not?)
  const [menuOpen, setMenuOpen] = useState(false);

  // Initially, loading state is set to true (the page is now loading)
  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading status to false after 3 seconds (page is done loading and now renders main page content)
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="transition-opacity duration-700 opacity-100">
          <MainPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </>
  );
}

export default App;
