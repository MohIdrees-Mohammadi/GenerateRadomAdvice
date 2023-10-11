import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvices();
  }

  fetchAdvices = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <>
        <nav>Generate Random Advice | imsciences</nav>
        <div className="mainDiv">
          <div className="card">
            <h1 className="adviceHeading">{advice ? advice : "loading..."}</h1>
            <button className="button" onClick={this.fetchAdvices}>
              <span>GIVE ME ADVICE</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
