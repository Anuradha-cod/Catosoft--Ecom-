import React, { useEffect } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import MainRouter from "../src/Router/MainRouter/MainRouter";

const App = () => {
  return (
    <div className="App">
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
