import React from "react";

const Search = ({handleSearch}) => {

  const handleSearchType = (e) => {
    console.log("Searching...")
    handleSearch(e.target.value);
  }
 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchType}
      />
    </div>
  );
}

export default Search;
