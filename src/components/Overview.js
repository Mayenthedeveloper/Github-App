import React, { useContext } from "react";
import { isDOMComponentElement } from "react-dom/test-utils";
import { GithubContext } from "../context/GithubContext";

function Overview() {
  const { overview } = useContext(GithubContext);
  let id = 0;

  return (
    <div className="overviewContainer">
      {overview &&
        overview.map((item, index) => (
          <a
            href={item.html_url}
            target="_blank"
            key={index}
            rel="noopener noeferrer"
          >
            <div className={"overview overview" + ++id}>
              {item.name && <h2>{item.name}</h2>}
              {item.language && (
                <p>
                  <span></span>
                  {item.language}
                </p>
              )}
            </div>
          </a>
        ))}
    </div>
  );
}

export default Overview;
