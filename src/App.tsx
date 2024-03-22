import React from "react";
import "./App.css";
import Body from "./components/Body";

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">TODO</span>
      <Body />
    </div>
  );
};

export default App;
