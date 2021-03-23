import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import NewUser from "./pages/NewUser";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BusinessRoute from './utils/ProtectedRoutes/BusinessRoute';
import UserRoute from './utils/ProtectedRoutes/UserRoute';
import BizLogin from "./pages/BizLogin";
import BizRegister from "./pages/BizRegister";
import BizProfile from "./pages/BizProfile";
import Header from "./components/Header";


import Landing from "./pages/Landing";
import UserContext from './utils/Context/UserContext';
function App() {
  const [user, setUser] = useState({
    token: '',
    loggedInAs: '',
    name: '',
    image: '',
    changeUser: (token, loggedInAs, name, image) => {
      setUser({ ...user, token, loggedInAs, name, image })
    }
  });
    
  useEffect(() => {
    if (document.cookie.split(';')[0].split('=')[0] === "token" && localStorage.getItem("loggedInAs")) {
      setUser({
        ...user,
        token: document.cookie.split(';')[0].split('=')[1],
        loggedInAs: localStorage.getItem("loggedInAs"),
        name: localStorage.getItem("name"),
        image: localStorage.getItem("image")
        // loggedInAs: document.cookie.split(';')[1].split('=')[1],
        // name: document.cookie.split(';')[2].split('=')[1],
        // image: document.cookie.split(';')[3].split('=')[1]
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

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/NewUser" exact component={NewUser} />
          <Route path="/userlogin" exact component={UserLogin} />        
          <Route path="/businesslogin" exact component={BizLogin} />
          <Route path="/businessregister" exact component={BizRegister} />
          {/* <Route path="/businessprofile" component={BizProfile} /> */}
          <BusinessRoute path="/businessprofile" exact component={BizProfile} user={user} />
          <UserRoute path="/profile" exact component={Profile} user={user} />
          <Route>
            <div>
              <h1>No page here</h1>
            </div>
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;