import styled from "styled-components";

export const Wrapper = styled.div`
  height:100%;
`;

export const SubWrapper = styled.div`
  margin: 0 auto;
  @media (max-width: 800px) {
    width:100%;
  }
`;


export const ColumnTitle = styled.h1`
  background:#00adb5;
  padding:6px 0 6px 0;
  text-align:center;
  color:#eeeeee;
  font-size:1.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  margin:0px;
  border-radius: 5px;
  margin-bottom:10px;
  width:350px;
    @media (max-width: 800px) {
    width:250px;
  }
`;

export const DropapbleContainer = styled.div`
  width:350px;
  @media (max-width: 800px) {
    width:250px;
  }
`;

export const Container = styled.div`
  padding: 16;
  margin: 0 0 12px 0;
  border-radius: 5px;
  background-color: #eeeeee;
  border-top: 10px solid #00ADB5;
  display: flex;
  flex-direction: column;

  img {
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 6px;
    border-radius: 5px;
    object-fit: cover;
    width: auto;
    height: 150px;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  color: black;
  text-transform: capitalize;
  margin-left: 10px;
  font-size: 1.2rem;
`;

export const TagContainer = styled.div`
  display: flex;
  margin: 5px 10px 8px 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: auto;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #7395c6;
  }

  input {
    align-self: center;
    flex: 1;
    background-color: #eeeeee;
    border: none;
    height: 40px;
    font-size: 14px;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }

  div {
    align-self: center;
    display: flex;
    width: 200px;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    div {
      width: auto;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    li {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #00adb5;

      span:nth-child(1) {
        margin-top: 3px;
      }

      span:nth-child(2) {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #0052cc;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }
`;
