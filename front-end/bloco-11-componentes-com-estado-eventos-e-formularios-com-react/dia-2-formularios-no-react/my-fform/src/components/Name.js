import React, { Component } from "react";

/**
 * @author
 * @class Name
 **/

class Name extends Component {
  state = {};
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label>
          name
          <textarea
            name="name"
            value={value}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Name;
