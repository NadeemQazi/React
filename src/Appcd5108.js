import React from 'react'
//import './App.css'; 
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Nodjspg from './NodeJspg'
import {Header,Content} from './AppOld'
import Mongodb from './Mongodb'
import ReactTutorial from './LearningReact'
class Appcd5108 extends  React.Component{

 
render(){
return (
<div>
<h1> <center>Application Development  Module</center> </h1>
        <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Node Js Development</Link></li>
                    <li><Link to="/Mongodb">Mongo DB</Link></li>
                <   li><Link to="/React">How to Develop with React</Link></li>
                </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
                <Route exact path="/" component= {Nodjspg} />
                <Route path="/Mongodb"  component={Mongodb} />
                <Route path="/React" component ={ReactTutorial}/>
        </Switch>
        </div>
    </Router>
  
  
         </div>



</div>


 );


}


}
export default Appcd5108;