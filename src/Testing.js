import React from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/url";

const Testing = () => {
  return (
    <section>
      <div>
        <ul>
          {links.map((link) => {
            const { id, titleNumber, title, url } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  {" "}
                  <span>{titleNumber}</span> {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testing;
