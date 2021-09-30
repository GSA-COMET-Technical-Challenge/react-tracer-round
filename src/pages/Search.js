import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  return (
    <Style>
      <div className="content">
        <SearchBar />
      </div>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  justify-content: center;

  .content {
    width: 100%;
    max-width: 1000px;
    padding: 0.5rem;
  }
`;

export default SearchPage;
