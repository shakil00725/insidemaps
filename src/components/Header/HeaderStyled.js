import styled from "styled-components";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";

export const Icon = styled(SortByAlphaIcon)`
  height: 100px;
  color: #393e46;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;


export const Wrapper = styled.div`
  position:sticky;
  top:0;
  background: #00adb5;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-bottom: 5px solid #393e46;
`;

export const SubWrappers = styled.div`
  max-width: 1403px;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;


export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  input {
    border-radius: 5px;
    font-size:1.2rem;
    box-shadow: inset 0 0 55px 1px #393e46;
    background: #393e46;
    border: none;
    padding: 10px;
    height: 30px;
    width: 80%;
    color: white;
  }
`;
