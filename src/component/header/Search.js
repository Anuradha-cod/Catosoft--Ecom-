import React from "react";

const Search = ({ setSearchHide, setSearchTerm }) => {
  return (
    <div className="search-div">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={() => setSearchHide(true)}
        className="search"
        placeholder="Search for products"
      />
    </div>
  );
};

export default Search;
