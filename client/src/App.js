import React from "react";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Login} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Footer />
    </Router>
  );
}

export default App;
