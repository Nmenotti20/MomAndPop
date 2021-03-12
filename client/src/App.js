import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoutes/BusinessRoute';
import BizLogin from "./pages/BizLogin";
import BizRegister from "./pages/BizRegister";
import BizProfile from "./pages/BizProfile";
import Header from "./components/Header";


import Landing from "./pages/Landing";
import Feed from "./components/Feed";
import LocalBusiness from "./components/LocalBusiness";
import RightContainer from "./components/RightContainer";
import UserContext from './utils/Context/UserContext';
function App() {
  const [user, setUser] = useState({
    token: '',
    loggedInAs: '',
    changeUser: (token, loggedInAs) => {
      setUser({ ...user, token, loggedInAs })
    }
  });
    
  useEffect(() => {
    if (document.cookie.split(';')[0].split('=')[0] === "token" && document.cookie.split(';')[1].split('=')[1]) {
      setUser({
        token: document.cookie.split(';')[0].split('=')[1],
        loggedInAs: document.cookie.split(';')[1].split('=')[1]
      });
    }
  }, [])

  return (
    <Router>
      <UserContext.Provider value={ user }>
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
        <Route path="/businessregister" component={BizRegister} />
        {/* <Route path="/businessprofile" component={BizProfile} /> */}
        <ProtectedRoute path="/businessprofile" component={BizProfile} user={user} />
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;