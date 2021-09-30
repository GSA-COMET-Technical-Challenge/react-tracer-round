import React from "react";
import styled from "styled-components";

const SearchBar = ({ search }) => {
  return (
        <form onSubmit={() => search()}>
    <Style>
      <input className="search-bar"/>
      <input type="submit" value="Search" className={"search-button"} />
    </Style>
        </form>
  );
};

const Style = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  column-gap: 1rem;

  .search-bar {
    flex-grow: 1;
    background-color: white;
    border-color: gray;
    border-width: 1px;
  }

  .search-button {
    background-color: white;
    border-color: gray;
    border-width: 1px;
  }
`;

export default SearchBar;
