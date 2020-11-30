import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Appnhq from './Appnhq';
import Appcd5108  from './Appcd5108'
import GreetingElement from './myGreetingApp'
import AppColor from './AppbackgroundColor'
import GreetingElementwithProp from './myGreetingProp';
import reportWebVitals from './reportWebVitals';
import Form_Hook from './personform'

ReactDOM.render(
  <React.StrictMode>
   <Form_Hook/>
   <AppColor heading="This is first element" lbl="Name :"  color="green"/>
   <AppColor heading="This is second element" lbl="Name :"  color="blue"/>
   <AppColor heading="This is third third element" lbl="Name :"  color="Yellow"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
