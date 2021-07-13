import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

function Form() {
  const { search, setSearch, getSearch } = useContext(GithubContext);

  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        autoFocus
        placeholder="Search for a user...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Form;
