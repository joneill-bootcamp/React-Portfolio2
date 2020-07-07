import React from "react";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <div className="Card white-text">
            <h4>
              <b>Project 1</b>
            </h4>
            <a href="https://github.com/joneill-bootcamp/Project1">
              GitHub Repo
            </a>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Project 2</b>
            </h4>
            <a href="https://github.com/joneill-bootcamp/Project2A">
              GitHub Repo
            </a>
            <br></br>
            <a href="https://boiling-shelf-01773.herokuapp.com/graph">
              Heroku Link
            </a>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Weather Dashboard</b>
            </h4>
            <a href="https://github.com/joneill-bootcamp/WeatherDashboard">
              GitHub Repo
            </a>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Progressive Budget Plaanner</b>
            </h4>
            <a href="https://github.com/joneill-bootcamp/ProgressiveBudget">
              GitHub Repo
            </a>
            <br></br>
            <a href="https://limitless-journey-00145.herokuapp.com/">
              Heroku Link
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
