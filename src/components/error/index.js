import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.error}</h4>
      </div>
    );
  }
}

export default Error;
