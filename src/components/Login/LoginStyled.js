import styled from "styled-components";

export const LoginWrapper = styled.div`
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  height: 60%;
  background: #eeeeee;
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #00adb5;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }

  > h1 {
    font-size: 1.5em;
    color: #00adb5;
  }

  > input {
    box-shadow: inset 0 0 55px 1px #393e46;
    background: #393e46;
    border: none;
    font-size: 1rem;
    padding: 10px;
    margin: 10px;
    height: 30px;
    width: 70%;
    color: #00adb5;
  }

  > button {
    width: 50%;
    margin: 1em;
    font-size: 1rem;
    border: none;
    background: #00adb5;
    color: white;
    height: 3em;
    borderl: none;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    border: 2px solid #393e46;
    cursor: pointer;
    color: #393e46;
  }

  > span {
    font-size: 0.8em;
    font-weight: bold;

    > a {
      text-decoration: none;
      color: #2ed4ae;
    }
  }
`;

export const Wrapper = styled.section`
  width: 900px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
