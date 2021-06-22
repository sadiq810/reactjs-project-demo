import React from "react";
import { BrowserRouter,  Switch,  Route } from "react-router-dom";

import MobileOverLay from "./components/MobileOverLay";
import Header from "./components/Header";
import Home from "./pages/Home";
import MemberBenefit from "./pages/MemberBenefit";
import FindProgram from "./pages/FindProgram";
import About from "./pages/About";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProgramDetails from "./pages/ProgramDetails";
import ApplyUniversity from "./pages/ApplyUniversity";
import MyApplications from "./pages/MyApplications";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/'} exact={true}> <Home /></Route>
          <Route path={'/member-benefit'} exact={true}> <MemberBenefit /></Route>
          <Route path={'/find-program'} exact={true}> <FindProgram /></Route>
          <Route path={'/program-detail/:id'} exact={true}> <ProgramDetails /></Route>
          <Route path={'/apply-university/:id'} exact={true}> <ApplyUniversity /></Route>
          <Route path={'/my-applications'} exact={true}> <MyApplications /></Route>
          <Route path={'/my-profile'} exact={true}> <Profile /></Route>
          <Route path={'/about'} exact={true}> <About /></Route>
          <Route path={'/login'} exact={true}> <Login /></Route>
          <Route path={'/register'} exact={true}> <Register /></Route>
        </Switch>

        <MobileOverLay />
      </BrowserRouter>

    </>
  );
}

export default App;
