import React, { createContext, useState, useEffect, Children } from "react";

export const GithubContext = createContext();

function GithubState({ children }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [overview, setOverview] = useState(null);
  const [search, setSearch] = useState("");
  const [arrow, setArow] = useState("");
  const [error, setError] = useState("");

  const getSearch = (e) => {
    e.preventDefault();
    getData();
    setSearch();
    console.log("submitted...");
  };

  const getData = () => {
    fetch(`https://api.github.com/users/${search}`).then((res) =>
      res.json().then((data) => {
        if (data.message) {
          setUser(null);
          setRepos(null);
          setFollowers(null);
          setOverview(null);
          setError("User not found....");
        } else {
          setUser(data);
          getOverview();
          getRepos();
          getFollowers();
          setError("");
        }
      })
    );
  };

  const getRepos = () => {
    fetch(`https://api.github.com/users/${search}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  };

  const getOverview = () => {
    fetch(`https://api.github.com/users/${search}/repos?per_pages=8&&sort=asc`)
      .then((res) => res.json())
      .then((data) => setOverview(data));
  };

  const getFollowers = () => {
    fetch(`https://api.github.com/users/${search}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  };

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        overview,
        search,
        setSearch,
        getSearch,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;
