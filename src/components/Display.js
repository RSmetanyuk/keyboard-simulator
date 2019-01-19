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
            className="screen"
            value={this.props.text}
            onChange={this.props.onChange}
            onKeyDown={this.props.onKeyDown}
          />
          <a href={this.props.url}>
            {this.props.url ? "By:" : ""} {this.props.author}
          </a>
        </div>
        <div className="hinge" />
      </React.Fragment>
    );
  }

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem("test", nextProps);
  };

  componentDidUpdate() {
    console.log("upd");
    setCursorPosition(this.refs.txt, this.props.cursorPosition);
    removeFrameColor(this.refs.txt);
    setFrameColor(
      this.refs.txt,
      this.props.matchedKey,
      this.props.matchedKey,
      this.props.matchedTarget
    );
  }
}

const setCursorPosition = (element, position) => {
  element.setSelectionRange(position, position);
};

const removeFrameColor = screen => {
  screen.classList.remove("yellowFrame");
  screen.classList.remove("greenFrame");
  screen.classList.remove("redFrame");
};

const setFrameColor = (screen, matched, key, target) => {
  if (matched) {
    if (key === target) {
      screen.classList.add("greenFrame");
    } else if (key.toUpperCase() === target.toUpperCase()) {
      screen.classList.add("yellowFrame");
    } else {
      screen.classList.add("redFrame");
    }
  }
};

const mapStateToProps = state => {
  return {
    text: state.text,
    cursorPosition: state.cursorPosition,
    matchedResult: state.matchedResult,
    matchedKey: state.matchedKey,
    matchedTarget: state.matchedTarget,
    url: state.articles ? state.articles[state.currentArticle].url : "",
    author: state.articles ? state.articles[state.currentArticle].author : ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e =>
      dispatch({
        type: "ON_CHANGE",
        e: e.target
      }),
    onKeyDown: e =>
      dispatch({
        type: "ON_KEY_DOWN",
        keyCode: e.keyCode
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
