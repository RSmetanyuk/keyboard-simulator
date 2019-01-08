import React, { Component } from "react";
import "./Keyboard.css";

class Keyboard extends Component {
  render() {
    return (
      <div className="keyboard">
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

          <div className="key num dual">
            ~<br />`
          </div>

          <div className="key num dual">
            !<br />1
          </div>
          <div className="key num dual">
            @<br />2
          </div>
          <div className="key num dual">
            #<br />3
          </div>
          <div className="key num dual">
            $<br />4
          </div>
          <div className="key num dual">
            %<br />5
          </div>
          <div className="key num dual">
            ^<br />6
          </div>
          <div className="key num dual">
            &<br />7
          </div>
          <div className="key num dual">
            *<br />8
          </div>
          <div className="key num dual">
            (<br />9
          </div>
          <div className="key num dual">
            )<br />0
          </div>
          <div className="key num dual">
            _<br />-
          </div>
          <div className="key num dual">
            +<br />=
          </div>
          <div className="key backspace">Backspace</div>
          {/*}END NUMBER KEYS*/}

          <div className="key tab">Tab</div>

          <div className="key letter">Q</div>
          <div className="key letter">W</div>
          <div className="key letter">E</div>
          <div className="key letter">R</div>
          <div className="key letter">T</div>
          <div className="key letter">Y</div>
          <div className="key letter">U</div>
          <div className="key letter">I</div>
          <div className="key letter">O</div>
          <div className="key letter">P</div>
          <div className="key dual">
            {"{"}
            <br />[
          </div>
          <div className="key dual">
            }<br />]
          </div>
          <div className="key letter dual slash">
            |<br />\
          </div>
          <div className="key caps">
            Caps <br /> Lock
          </div>
          <div className="key letter">A</div>
          <div className="key letter">S</div>
          <div className="key letter">D</div>
          <div className="key letter">F</div>
          <div className="key letter">G</div>
          <div className="key letter">H</div>
          <div className="key letter">J</div>
          <div className="key letter">K</div>
          <div className="key letter">L</div>
          <div className="key dual">
            :<br />;
          </div>
          <div className="key dual">
            "<br />'
          </div>
          <div className="key enter">Enter</div>

          <div className="key shift left">Shift</div>
          <div className="key letter">Z</div>
          <div className="key letter">X</div>
          <div className="key letter">C</div>
          <div className="key letter">V</div>
          <div className="key letter">B</div>
          <div className="key letter">N</div>
          <div className="key letter">M</div>
          <div className="key dual">
            {"<"} <br />,
          </div>
          <div className="key dual">
            ><br />.
          </div>
          <div className="key dual">
            ?<br />/
          </div>
          <div className="key shift right">Shift</div>
          <div className="key ctrl">Ctrl</div>
          <div className="key">&hearts;</div>
          <div className="key">Alt</div>
          <div className="key space" />
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
}

export default Keyboard;
