import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
const App = () => {
  const [screens, setScreens] = useState([]);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(null);

  const addScreen = (screenName) => {
    setScreens((prevScreens) => [...prevScreens, screenName]);
    setCurrentScreenIndex(screens.length);
  };

  const nextScreen = () => {
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === null || prevIndex === screens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevScreen = () => {
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0 ? screens.length - 1 : prevIndex - 1
    );
  };

  const renderScreen = (screenName) => {
    switch (screenName) {
      case "Home":
        return <Home onClick={addScreen} />;
      case "About":
        return <About onClick={addScreen} />;
      case "Contact":
        return <Contact onClick={addScreen} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="available-screens">
        <Home onClick={addScreen} />
        <About onClick={addScreen} />
        <Contact onClick={addScreen} />
      </div>
      <div className="navigation-buttons">
        <button onClick={prevScreen} disabled={screens.length === 0}>
          Previous
        </button>
        <button onClick={nextScreen} disabled={screens.length === 0}>
          Next
        </button>
      </div>
      <div className="screen">
        {currentScreenIndex !== null &&
          renderScreen(screens[currentScreenIndex])}
      </div>
    </div>
  );
};

export default App;
