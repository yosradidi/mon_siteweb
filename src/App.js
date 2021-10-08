import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/footer.js";
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";
import Profile from "./component/profile.js";
import News from "./component/News.js";
import Login from "./component/Login.js";

import "./App.css";
import { Route, Switch } from "react-router-dom";






function App() {
  
  return (
 
    <div className="container">
      <div className="form-box">
      </div>
      <Route path="/login">
        <Login/>
      </Route>

      <Header
      
      />
<Switch>
       <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/contact">
           <Contact/>
        </Route>
        <Route path="/profile">
           <Profile/>
        </Route>
        <Route path="/news">
           <News/>
        </Route>
       
        </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
