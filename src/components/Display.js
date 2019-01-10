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
            data-rotation={this.props.rotation}
            className={`screen ${
              this.props.lastMatchedSymbol
                ? (this.props.lastMatched && "lastMatchedTrue") ||
                  (!this.props.lastMatched && "lastMatchedFalse")
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
    this.refs.txt.setSelectionRange(
      this.props.cursorPosition,
      this.props.cursorPosition
    );
    //console.log(this.props.rotation);
  }
  co;
}

const mapStateToProps = state => {
  return {
    text: state.text,
    rotation: state.rotation,
    cursorPosition: state.cursorPosition,
    lastMatched: state.lastMatched,
    lastMatchedSymbol: state.lastMatchedSymbol
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
