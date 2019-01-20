import React, { Component } from "react";
import "./Display.css";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    const { text, onChange, onKeyDown, articles, currentArticle } = this.props;
    const url = articles ? articles[currentArticle].url : "";
    const author = articles ? articles[currentArticle].source.name : "";
    return (
      <React.Fragment>
        <div className="display">
          <textarea
            ref="textarea"
            type="text"
            className="screen"
            value={text}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <a href={url}>
            {url ? "By:" : ""} {author}
          </a>
        </div>
        <div className="hinge" />
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const { textarea } = this.refs;
    const { cursorPosition, matchedKey, matchedTarget } = this.props;
    setCursorPosition(textarea, cursorPosition);
    removeFrameColor(textarea);
    setFrameColor(textarea, matchedKey, matchedTarget);
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

const setFrameColor = (screen, key, target) => {
  if (key) {
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
  const {
    text,
    cursorPosition,
    matchedKey,
    matchedTarget,
    articles,
    currentArticle
  } = state;
  return {
    text,
    cursorPosition,
    matchedKey,
    matchedTarget,
    articles,
    currentArticle
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e =>
    dispatch({
      type: "ON_CHANGE",
      target: e.target
    }),
  onKeyDown: e =>
    dispatch({
      type: "ON_KEY_DOWN",
      keyCode: e.keyCode
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
