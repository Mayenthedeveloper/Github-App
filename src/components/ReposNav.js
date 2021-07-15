import React from "react";
import { NavLink } from "react-router-dom";

function ReposNav() {
  return (
    <div className="reposContainer">
      <NavLink activeClassName="active" to="/oveview">
        Overview
      </NavLink>
      <NavLink activeClassName="active" to="/repos">
        Repos
      </NavLink>
      <NavLink activeClassName="active" to="/followers">
        Followers
      </NavLink>
    </div>
  );
}

export default ReposNav;
