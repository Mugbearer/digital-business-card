import React from "react";
import "./index.css";
import Info from "./components/info";
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";

function App() {
  return (
    <div id="app">
      <div id="card">
        <Info />
        <div className="about-interests">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
