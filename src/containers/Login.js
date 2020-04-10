import React, { Component } from "react";
import Login from "../components/Login/Login";
import axios from "axios";
import Home from "../containers/Home";

class LoginContainer extends Component {
  state = {
    masterToken: null,
    orgID: null,
    sessionToken: null,
    isLoggedIn: false,
  };

  orgIdChange = (event) => this.setState({ orgID: event.target.value });
  masterTokenChange = (event) =>
    this.setState({ masterToken: event.target.value });

  getSessionToken = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const api = {
      Authorization: `Bearer ${this.state.masterToken}`,
    };
    const data = await axios.get(
      `${proxyurl}https://www.insidemaps.com/api/v2/sessionToken`,
      { headers: api }
    );
    this.setState({ sessionToken: data.data.data });
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn, sessionToken, orgID } = this.state;
    return isLoggedIn ? (
      <Home token={sessionToken} orgID={orgID} />
    ) : (
      <div>
        <Login
          getOrgID={this.orgIdChange}
          getMasterToken={this.masterTokenChange}
          getToken={this.getSessionToken}
        />
      </div>
    );
  }
}

export default LoginContainer;
