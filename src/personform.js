import React, { useState } from "react";
import "./App.css";
import axios from 'axios';
function Form_Hook() {
  const [state, setState] = useState({
    empname: "",
    
    salary: "",
    gender: "",
    
    
    Age: 0
  });
  const [count, setCount] = useState(0);
  let url="http://localhost:5000/add1"

  const handleChange = (e) => {
      console.log("wwww")
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  
  const submit_form = (e)=>{
    console.log("in form submit")
   

    axios.post(url).then((res)=>
    {console.log("axios succed "+ res.data)}

    )
    .catch((error)=>{console.log(error)})
    console.log("after acios")
  }
  return (
    <div className="App-header">
      <h1>React full Form Handling</h1>
      <form onSubmit={submit_form}>
        <label>
          EmpName:{" "}
          <input
            type="text"
            name="empname"
            value={state.empname}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Salary:{" "}
          <input
            type="text"
            name="salary"
            value={state.salary}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        
        
       
        <br />
        <br />
        <label>
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
          <input type='submit' value='Submit'/>
        </label>
      </form>
      <h5>
        Name: {state.empname} Gender:{state.gender}
      </h5>
      
      <p>Message: {state.salary}</p>
      
      
      <h5>Price : ${state.price}</h5>
    </div>
  );
}

export default Form_Hook;
