import React, { Component } from "react";

class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jessica Maria",
    };
  }
  clickedMe() {
    this.setState({
      name: 'Changed Text'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick = {} className="btn btn-success">Change Text</button>
      </div>
    );
  }
}

export default Name;
