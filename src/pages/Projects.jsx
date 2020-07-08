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
            <p>
              This is an application that allows you to search for things on the
              internet, then display Wikipedia, News Items and Flickr images
              based on using public API's.
            </p>
            <a href="https://github.com/joneill-bootcamp/Project1">
              GitHub Repo
            </a>
            <img
              alt="Project1"
              src="/img/project1.png"
              className="imagefloat"
            ></img>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Project 2</b>
            </h4>
            <p>
              This is COVID19 graphing utliity that lets you explore the current
              state of world data (based on verified data from John Hopkins in
              the US) of COVID19 stats, remembers your queries and allows you to
              chose graph styles.
            </p>
            <a href="https://github.com/joneill-bootcamp/Project2A">
              GitHub Repo
            </a>
            <br></br>
            <a href="https://boiling-shelf-01773.herokuapp.com/graph">
              Heroku Link
            </a>
            <img
              alt="Project2"
              src="/img/project2.png"
              className="imagefloat"
            ></img>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Weather Dashboard</b>
            </h4>
            <p>
              This app allows you to look at the weather for any city in the
              world, get the current conditions and a 5 day forecast.
            </p>
            <a href="https://github.com/joneill-bootcamp/WeatherDashboard">
              GitHub Repo
            </a>
            <img
              alt="Weather"
              src="/img/weather.png"
              className="imagefloat"
            ></img>
          </div>
        </li>

        <li>
          <div className="Card white-text">
            <h4>
              <b>Progressive Budget Plaanner</b>
            </h4>
            <p>
              A very simple budgeting application, it will work offline or line,
              you can run this offline, the app will remember your entries, when
              you are back online, your work will be uploaded to server, so you
              can do your budget on the go.
            </p>
            <a href="https://github.com/joneill-bootcamp/ProgressiveBudget">
              GitHub Repo
            </a>
            <br></br>
            <a href="https://limitless-journey-00145.herokuapp.com/">
              Heroku Link
            </a>
            <img
              alt="Budget"
              src="/img/budget.png"
              className="imagefloat"
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
}
