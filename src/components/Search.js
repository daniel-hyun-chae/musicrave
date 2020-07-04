import React from "react";
import Switch from "./Switch";

const Search = () => {
  return (
    <div className="search">
      <div className="search__switch">
        <span className="search__switch-option">by track</span>
        <Switch />
        <span className="search__switch-option">by artist</span>
      </div>
      <input type="text" className="search__box" />
    </div>
  );
};

export default Search;
