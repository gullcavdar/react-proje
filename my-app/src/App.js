import React, { Component } from 'react';
import Navbar from './layout/Navbar';
//import User from './components/User';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';
import Contribute from './pages/Contribute';

class App extends Component{
     
    render(){
      return (
        <Router>
          <div className="container mt-5">
            { /*<Route exact path="/" render={
                () => {
                  return <h3>Home Page</h3>
                }
              }
            />*/}
            {/*<Route exact path="/" component = {Home}/>*/}
            {/*<Route exact path="/about" component = {About}/>*/}
            
            <Navbar title="User App"/>
            <hr/>
            <Switch>

              <Route exact path="/" component={Users}/>
              <Route exact path="/add" component={AddUser}/>
              <Route exact path="/github" component={Contribute}/>
              <Route exact path="/edit/:id" component={UpdateUser}/>
              <Route component={NotFound}/>

            </Switch>
           
            
            

          </div>
        </Router>
        
      );
    }
}


export default App;
