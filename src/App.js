import React from 'react';
import { BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';

import Singleopp from './pages/Singleopp';
import Browseopp from './pages/Browseopp';
import Postopportunity from './pages/PostOpp';
import Subscription from './pages/Subscription';

    function App() {
      return (
    
  
        <Router>
          <Navigation/>                  
            <Switch>

              <Route exact path="/">
                 <Home /> 
             </Route> 

              <Route path="/browseopp"> 
              <Browseopp/> 
              </Route> 

              <Route path="/postopp"> 
              <Postopportunity/> 
              </Route> 

              <Route path="/subscribe"> 
              <Subscription/> 
              </Route> 

              <Route path="/contactus">
                 <Contact />
               </Route>

               <Route path="/aboutus">
                 <Aboutus />
               </Route>

               <Route path="/singleopp/:id">
                 <Singleopp/>
               </Route>

            </Switch>
            <Footer/>
        </Router>
     
      );
    
      }
    
    export default App;


