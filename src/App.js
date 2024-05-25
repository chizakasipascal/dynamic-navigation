import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import DynamicComponent from "./DynamicComponent";

const App = () => {
  const [screens, setScreens] = useState([<Home />, <About />, <Contact />]);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const nextScreen = () => {
    setCurrentScreenIndex((prevIndex) => (prevIndex + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === 0 ? screens.length - 1 : prevIndex - 1
    );
  };

  const addDynamicComponent = () => {
    setScreens([...screens, <DynamicComponent />]);
  };

  return (
    <div className="App">
      <div className="screen">{screens[currentScreenIndex]}</div>
      <div className="navigation-buttons">
        <button onClick={prevScreen}>Previous</button>
        <button onClick={nextScreen}>Next</button>
      </div>
      <div className="add-component-button">
        <button onClick={addDynamicComponent}>Add Dynamic Component</button>
      </div>
    </div>
  );
};

export default App;
