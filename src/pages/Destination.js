import React, { useState } from "react";
import Navigation from "../component/Navigation";
import { destinationInfo, destinationUrl } from "../utils/destinationInfo";
import "../index.css";

const Destination = () => {
  const [toggled, toggle] = useState();

  return (
    <section className="page destination text-white relative">
      <Navigation />
      <div className="">
        <h3>01 Pick your destination</h3>
      </div>
      <div className="flex">
        {destinationInfo.map((info) => {
          return (
            <div key={info.id} className="border-2 bg-red-700">
              <button
                onClick={() => toggle(info.id)}
                className="border-2 bg-green-700"
              >
                hello
              </button>
              <article className="mt-10">
                {toggled === info.id ? (
                  <div>
                    <img src={info.image} alt={info.title} />
                  </div>
                ) : null}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Destination;
