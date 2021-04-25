import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../../Router/childRouter/Router/Home";
import LoginCust from "../../Router/childRouter/Router/LoginCust";
import Register from "../../Router/childRouter/Router/Register";
import SeeAllProduc from "../../Router/childRouter/Router/SeeAllProduc";
import Header from "../../component/header/Header";
import PaymentCheckOut from "../../Router/childRouter/Router/PaymentCheckOut";
import PrivatRouter from "./PrivatRouter";
const MainRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/login" component={() => <LoginCust />} />
        <Route path="/seeAllProduc" component={() => <SeeAllProduc />} />
        <PrivatRouter
          path="/paymentCheckOut"
          component={() => <PaymentCheckOut />}
        />
      </Switch>
    </>
    // )}
    // </AppConsumer>
  );
};

export default MainRouter;
