import React, { Component } from "react";
import "./Display.css";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="display">
          <textarea
            type="text"
            className="screen"
            value={this.props.text}
            onChange={this.props.onChange}
          />
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

const mapDispatchToProps = dispatch => {
  return {
    onChange: e =>
      dispatch({
        type: "ON_CHANGE",
        e: e.target
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
