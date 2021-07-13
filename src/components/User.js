import React, { useContext } from "react";
import { GitubContext } from "../context/GithubContext";

function User() {
  const { user } = useContext(GitubContext);

  return (
    <div className="user">
      <div className="userContainer">
        <div className="imgContainer">
          <img src={user.avatar_url} alt="user" />
        </div>
        <div className="userRow">
          <div className="userInfo">
            {user.name && <h2>{user.name}</h2>}
            {user.login && <h2>{user.login}</h2>}
          </div>
          {user.bio && (
            <div className="userDesc">
              <p>{user.bio}</p>
            </div>
          )}
          <div className="userLinks">
            {user.location && (
              <p>
                <i className="fas fa-marker-alt fa-sm"></i>
                {user.location}
              </p>
            )}
            {user.blog && (
              <a
                href={`https://${user.blog}`}
                target="_blank"
                rel="noopener noreferer"
              >
                <i className="fas fa-link fa-sm">{user.blog}</i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
