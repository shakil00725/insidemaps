import Loader from "react-loader-spinner";
import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>
    );
  }
}
