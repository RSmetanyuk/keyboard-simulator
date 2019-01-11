import React, { Component } from "react";
import "./Display.css";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="display">
          <textarea
            ref="txt"
            type="text"
            data-update-trigger={this.props.cycleTtrigger}
            className={`screen ${
              this.props.matchedKey
                ? (this.props.matchedResult && "greenFrame") ||
                  (!this.props.matchedResult && "redFrame")
                : ""
            }`}
            value={this.props.text}
            onChange={this.props.onChange}
          />
        </div>
        <div className="hinge" />
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    setCursorPosition(this.refs.txt, this.props.cursorPosition);
  }
}

const setCursorPosition = (element, position) => {
  element.setSelectionRange(position, position);
};

const mapStateToProps = state => {
  return {
    text: state.text,
    cycleTtrigger: state.cycleTtrigger,
    cursorPosition: state.cursorPosition,
    matchedResult: state.matchedResult,
    matchedKey: state.matchedKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e =>
      dispatch({
        type: "ON_CHANGE",
        e: e.target
      })
    // onKeyPress: b =>
    //   dispatch({
    //     type: "ON_KEY_PRESS",
    //     b: b
    //   })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
