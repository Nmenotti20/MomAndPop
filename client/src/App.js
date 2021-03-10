import React from "react";
import Footer from "./components/Footer";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BizLogin from "./pages/BizLogin";
import BizProfile from "./pages/BizProfile";
import Header from "./components/Header";


import Landing from "./pages/Landing";
import Feed from "./components/Feed";
import LocalBusiness from "./components/LocalBusiness";
import RightContainer from "./components/RightContainer";
function App() {
  return (
    <Router>

      < Header />
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6">

            <LocalBusiness />
          </div>
          <div className="col-lg-4 col-md-6">

            <Feed />
          </div>
          <div className="col-lg-4 col-md-6">

            <RightContainer />
          </div>

        </div>
      </div> */}


      <Route path="/" exact component={Landing} />
      <Route path="/settings" component={Settings} />
      <Route path="/userlogin" component={UserLogin} />

      <Route path="/profile" component={Profile} />
      <Route path="/businesslogin" component={BizLogin} />
      <Route path="/businessprofile" component={BizProfile} />
      <Footer />
    </Router>
  );
}

export default App;