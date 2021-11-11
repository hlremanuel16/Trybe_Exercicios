import React, { Component } from 'react'


/**
* @author
* @class Sex
**/

class Sex extends Component {
  state = {}
  render() {
    const { value, handleChange } = this.props;
    return(
      <div>
        <label>
          sex
          <select 
            value={value} 
            onChange={handleChange} 
            name="chooseSex">
            <option name='sex'>M</option>
            <option name="sex">F</option>
          </select>
        </label>
      </div>
      )
   }
 }


export default Sex