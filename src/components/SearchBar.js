import React from "react";
import styled from "styled-components";

const SearchBar = ({search}) => {
    return (
        <Style>
            <input placeholder="Search" className="search-bar"></input>
            <button onClick={() => search()} className={"search-button"}>Search</button>
        </Style>
    )
}

const Style = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

.search-bar {
    flex-grow:1;
}
`

export default SearchBar