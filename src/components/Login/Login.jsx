import React from "react";
import { Wrapper, LoginWrapper } from "./LoginStyled";

const Login = ({getOrgID, getMasterToken, getToken}) => {
  return(
    <Wrapper>
    <LoginWrapper>
      <h1>Inside Maps</h1>
      <input onChange={getOrgID} type="text" placeholder="Enter OrgID" />
      <input onChange={getMasterToken} type="text" placeholder="Enter OrgToken" />
      <button onClick={getToken}>Login</button>
    </LoginWrapper>
  </Wrapper>
  )
};

export default Login;
