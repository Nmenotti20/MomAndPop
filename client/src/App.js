import React from "react";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BizLogin from "./pages/BizLogin";
import BizProfile from "./pages/BizProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Login} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/businesslogin" component={BizLogin} />
      <Route path="/businessprofile" component={BizProfile} />
      <Footer />
    </Router>
  );
}

export default App;
