import { links } from "express/lib/response";
import React from "react";

const SideBar = () => {
  return (
    <>
    <h4>sidebar</h4>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
