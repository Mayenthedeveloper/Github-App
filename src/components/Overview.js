import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

function Overview() {
  const { overview } = useContext(GithubContext);

  return <div className="overviewContainer"></div>;
}

export default Overview;
