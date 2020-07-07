import React from "react";

export default function About() {
  return (
    <div>
      <h1> John O'Neill</h1>{" "}
      <div className="subheading">
        Melbourne, Australia. + 61 403868689·{" "}
        <a href="mailto:joneill@activedata.tech" className="white-text">
          joneill @activedata.tech{" "}
        </a>
        <img alt="John" src="img/mypic.png" className="imagefloatt"></img>
        <div className="bodytext">
          An innovative, outcome focused and technology leader with experience
          in partnering with business leadership teams to deliver organizations'
          strategic objectives.
          <br></br>
          <hr></hr>
          <br></br>
          Risk management and compliance; Manages all aspects of risk in line
          with regulatory moderated standards including contingency planning and
          resolving incidents if they arise.
          <br></br>
          <hr></hr>
          <br></br>
          Has recently completed REACT Bootcamp at Monash Bootcamp, July 2020,
          enjoys learning new things!
        </div>
        <br />
      </div>
      <p className="lead"></p>{" "}
    </div>
  );
}
