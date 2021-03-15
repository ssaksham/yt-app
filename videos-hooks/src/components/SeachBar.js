import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <form onSubmit={onSubmit} className="search-bar ui form">
      <div className="field">
        <label>Video Search</label>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
    </form>
  );
};

export default SearchBar;
