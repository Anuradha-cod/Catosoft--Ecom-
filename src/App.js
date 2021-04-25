import React, { useEffect } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import MainRouter from "../src/Router/MainRouter/MainRouter";
import { loadUsers } from "../src/Redux/Action/auth";
import store from "../src/Redux/store";
import setAuthToken from "./../src/Router/Utility/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUsers());
  });
  return (
    <div className="App">
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
