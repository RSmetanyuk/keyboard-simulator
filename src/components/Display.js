import React, { Component } from "react";
import "./Display.css";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="display">
          <div className="screen">{this.props.text}</div>
        </div>
        <div className="hinge" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps)(Display);
