import React, { Component } from 'react';
import Name from './Name';
import Sex from './Sex';
class Forms extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: 0,
      chooseSex: 'M',
      isComing: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div>
        <fieldset>
          <legend>Please enter the required information</legend>
          <Sex state={this.state.chooseSex} handleChange={this.handleChange}/>
          <Name state={this.state.name} handleChange={this.handleChange} />
          <label>
            age
            <input type="number" name="age" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Is coming ?
            <input type="checkbox" name="isComing" value={this.state.value} onChange={this.handleChange} />
          </label>
        </fieldset>
        
      </div>
    )
  }
}



export default Forms;