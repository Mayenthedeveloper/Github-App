import { RSA_NO_PADDING } from "constants";
import React, { createContext, useState, useEffect, Children } from "react";

export const GithubContext = createContext();

function GithubContext({ children }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [overview, setOverview] = useState(null);
  const [search, setSearch] = useState("");
  const [arrow, setArow] = useState("");
  const [error, setError] = useState(initialState);

  const getData = () => {
    fetch(`https://api.github.com/users${Search}`).then((res) =>
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
    fetch(`https://api.github.com/users${search}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  };

  const getOverview = () => {
    fetch(`https://api.github.com/users${search}/repos?per_pages=8&&sort=asc`)
      .then((res) => res.json())
      .then((data) => setOverview(data));
  };

  const getFollowers = () => {
    fetch(`https://api.github.com/users${search}/followers`)
      .then((res) => res.json)
      .then((data) => setFollowers(data));
  };

  return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>;
}

export default GithubContext;
