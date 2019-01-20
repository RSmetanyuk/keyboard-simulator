import React from "react";

const About = () => (
  <div className="about">
    <p>This is the keyboard blind-typing simulator.</p>
    <p>
      For training, set the cursor in front of the text and try to repeat it
      from real keyboard.
    </p>
    <p>You may paste or type your own text for training.</p>
    <p>Pres 'web' button to download text from web.</p>
    <p>
      While training, you can see next color indicators:
      <ul>
        <li>ngreen - the correct key;</li>
        <li>yellow - the correct key but the wrong register;</li>
        <li>red - the wrong key.</li>
      </ul>
    </p>
    <p>
      Others languiges and special charscters havn't keyboard suggestion of
      right key.
    </p>
  </div>
);

export default About;
