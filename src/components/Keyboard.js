import React, { Component } from "react";
import "./Keyboard.css";
import { connect } from "react-redux";

class Keyboard extends Component {
  render() {
    return (
      <div
        className="keyboard"
        //data-update-trigger={this.props.cycleTtrigger}
      >
        <div className="logo">RS</div>

        <div className="lights">
          <span>1</span>
          <span>A</span>
          <span>V</span>
        </div>

        <div className="section-a">
          <div className="key function space1">Esc</div>

          <div className="key function">F1</div>
          <div className="key function">F2</div>
          <div className="key function">F3</div>

          <div className="key function space2">F4</div>
          <div className="key function">F5</div>
          <div className="key function">F6</div>
          <div className="key function">F7</div>
          <div className="key function space2">F8</div>

          <div className="key function">F9</div>
          <div className="key function">F10</div>
          <div className="key function">F11</div>
          <div className="key function">F12</div>
          {/*END FUNCTION KEYS*/}

          <div className="key num dual" ref="192">
            ~<br />`
          </div>

          <div className="key num dual" ref="49">
            !<br />1
          </div>
          <div className="key num dual" ref="50">
            @<br />2
          </div>
          <div className="key num dual" ref="51">
            #<br />3
          </div>
          <div className="key num dual" ref="52">
            $<br />4
          </div>
          <div className="key num dual" ref="53">
            %<br />5
          </div>
          <div className="key num dual" ref="54">
            ^<br />6
          </div>
          <div className="key num dual" ref="55">
            &<br />7
          </div>
          <div className="key num dual" ref="56">
            *<br />8
          </div>
          <div className="key num dual" ref="57">
            (<br />9
          </div>
          <div className="key num dual" ref="48">
            )<br />0
          </div>
          <div className="key num dual" ref="189">
            _<br />-
          </div>
          <div className="key num dual" ref="187">
            +<br />=
          </div>
          <div className="key backspace">Backspace</div>
          {/*}END NUMBER KEYS*/}

          <div className="key tab">Tab</div>

          <div className="key letter" ref="81">
            Q
          </div>
          <div className="key letter" ref="87">
            W
          </div>
          <div className="key letter" ref="69">
            E
          </div>
          <div className="key letter" ref="82">
            R
          </div>
          <div className="key letter" ref="84">
            T
          </div>
          <div className="key letter" ref="89">
            Y
          </div>
          <div className="key letter" ref="85">
            U
          </div>
          <div className="key letter" ref="73">
            I
          </div>
          <div className="key letter" ref="79">
            O
          </div>
          <div className="key letter" ref="80">
            P
          </div>
          <div className="key dual" ref="219">
            {"{"}
            <br />[
          </div>
          <div className="key dual" ref="221">
            }<br />]
          </div>
          <div className="key letter dual slash" ref="220">
            |<br />\
          </div>
          <div className="key caps">
            Caps <br /> Lock
          </div>
          <div className="key letter" ref="65">
            A
          </div>
          <div className="key letter" ref="83">
            S
          </div>
          <div className="key letter" ref="68">
            D
          </div>
          <div className="key letter" ref="70">
            F
          </div>
          <div className="key letter" ref="71">
            G
          </div>
          <div className="key letter" ref="72">
            H
          </div>
          <div className="key letter" ref="74">
            J
          </div>
          <div className="key letter" ref="75">
            K
          </div>
          <div className="key letter" ref="76">
            L
          </div>
          <div className="key dual" ref="186">
            :<br />;
          </div>
          <div className="key dual" ref="222">
            "<br />'
          </div>
          <div className="key enter">Enter</div>

          <div className="key shift left">Shift</div>
          <div className="key letter" ref="90">
            Z
          </div>
          <div className="key letter" ref="88">
            X
          </div>
          <div className="key letter" ref="67">
            C
          </div>
          <div className="key letter" ref="86">
            V
          </div>
          <div className="key letter" ref="66">
            B
          </div>
          <div className="key letter" ref="78">
            N
          </div>
          <div className="key letter" ref="77">
            M
          </div>
          <div className="key dual" ref="188">
            {"<"} <br />,
          </div>
          <div className="key dual" ref="190">
            ><br />.
          </div>
          <div className="key dual" ref="191">
            ?<br />/
          </div>
          <div className="key shift right">Shift</div>
          <div className="key ctrl">Ctrl</div>
          <div className="key">&hearts;</div>
          <div className="key">Alt</div>
          <div className="key space" ref="32" />
          <div className="key">Alt</div>
          <div className="key">&hearts;</div>
          <div className="key">Prnt</div>
          <div className="key ctrl">Ctrl</div>
        </div>
        {/*end section-a*/}

        <div className="section-b">
          <div className="key function small">Prnt Scrn</div>
          <div className="key function small">Scroll Lock</div>
          <div className="key function small">Pause Break</div>

          <div className="sec-func">
            <div className="key">Insert</div>
            <div className="key">Home</div>
            <div className="key dual">Page Up</div>
            <div className="key">Del</div>
            <div className="key">End</div>
            <div className="key dual">Page Down</div>

            <div className="arrows">
              <div className="key hidden" />
              <div className="key">^</div>
              <div className="key hidden" />
              <div className="key">{"<"}</div>
              <div className="key">v</div>
              <div className="key">></div>
            </div>
            {/* end arrows */}
          </div>
          {/*end sec-func*/}
        </div>
        {/*end section-b*/}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    clearOldKeyColorMark(
      this.refs[prevProps.matchedKeyCode],
      this.refs[prevProps.matchedTarget.toUpperCase().charCodeAt(0)]
    );
    addKeyColorMark(
      this.props.matchedKey,
      !this.props.matchedResult,
      this.refs[this.props.matchedKeyCode],
      this.refs[this.props.matchedTarget.toUpperCase().charCodeAt(0)]
    );
  }
}

const clearOldKeyColorMark = (prevKeyRed, prevKeyGreen) => {
  if (prevKeyRed === prevKeyGreen) {
    if (prevKeyRed) prevKeyRed.classList.remove("yellow");
  } else {
    if (prevKeyRed) prevKeyRed.classList.remove("red");
    if (prevKeyGreen) prevKeyGreen.classList.remove("green");
  }
};

const addKeyColorMark = (matchedKey, matchedFalse, keyRed, keyGreen) => {
  if (matchedKey && matchedFalse) {
    if (keyRed === keyGreen) {
      keyRed && keyRed.classList.add("yellow");
    } else {
      keyRed && keyRed.classList.add("red");
      keyGreen && keyGreen.classList.add("green");
    }
  }
};

// const addKeyGreenMark = (matchedKey, matchedTrue, key) => {
//   const code = matchedKey.toUpperCase().charCodeAt(0);
//   if (matchedKey && matchedTrue && key) console.log("green", code); // key.classList.add("green");
// };

const mapStateToProps = state => {
  return {
    matchedKeyCode: state.matchedKeyCode,
    matchedResult: state.matchedResult,
    matchedKey: state.matchedKey,
    matchedTarget: state.matchedTarget
    //cycleTtrigger: state.cycleTtrigger
  };
};

export default connect(
  mapStateToProps,
  null
)(Keyboard);
