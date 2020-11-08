import React from 'react'

class Myform extends React.Component 
{
  constructor(props) 
{
    super(props);
    this.state = 
    {
      username: '',
      age: null,
      job:'',
      gender:''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
    handleSubmit=(event) =>{

    event.preventDefault();
}
render() {
    return (
      <form OnSubmit={this.handleSubmit}>
      <h1>Hello {this.state.username} {this.state.age} {this.state.job} {this.state.gender}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
       onChange={this.myChangeHandler}
      />
<p> Gender </p>
        <input name= "gender" type="radio" value="Male"   onChange={this.myChangeHandler}/> Male
        <input name= "gender" type="radio" value="Female"  onChange={this.myChangeHandler}/> Female
        <p> What is your Employment Status </p>
       <select name='job' value={this.state.value} onChange={this.myChangeHandler}>
            <option value="Self-employed">Self-employed</option> 
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
            <option value="Not working">Not working</option>
            <option value="Retired">Retired</option>
            <option value="Military">Military</option>
          </select>  
          <input type="submit" value="Submit" />
      </form>
    )  
} 
}
export default Myform;