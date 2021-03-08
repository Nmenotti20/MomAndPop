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
import Login from "./components/Login";
import Feed from "./components/Feed";

function App() {

  return (
    <div>

      <Router>
        {/* <Navbar /> */}
        < Header />
        <Feed />
        <Route path="/" exact component={UserLogin} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile" component={Profile} />
        <Route path="/businesslogin" component={BizLogin} />
        <Route path="/businessprofile" component={BizProfile} />
        <Footer />
      </Router>
      )
    </div>

  );
}

export default App;
