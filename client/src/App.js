import React from "react";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BizLogin from "./pages/BizLogin";
import BizProfile from "./pages/BizProfile";
import Header from "./components/Header";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      < Header />
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