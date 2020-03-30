import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {petname: ",breed: ",}
   

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    
    alert(`A name was submitted: ${this.state.petname}`);
    alert(`A name was submitted: ${this.state.breed}`);

  } 

  render() {
    return (
      <form onSubmit={this.handleChange}>
        <h2>  yey,we love dogs!Give us the basics about your pup.</h2>
        <label>  
          Name: 
        <input name="petname"  value={this.state.name} onChange={this.handleChange}/>
         </label>
        <label>  
          breed: 
      <input name="breed"  value={this.state.breed} onChange={this.handleChange}/>
          </label>
        <input type="submit"  value="Submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}