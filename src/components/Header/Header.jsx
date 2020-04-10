import React from "react";
import {
  Wrapper,
  SubWrappers,
  SearchBar,
  Icon,
} from "./HeaderStyled";

const Header = ({sortList, filterSearch}) => {
  return (
    <Wrapper>
      <SubWrappers>
      <SearchBar>
      <input onChange={filterSearch} type="text" placeholder="Search..." />
      <Icon onClick={() => sortList()} fontSize="large" />
      </SearchBar>
      </SubWrappers>
    </Wrapper>
  );
};

export default Header;
