import React from "react";
import Navigation from "../component/Navigation";
import { destinationInfo } from "../utils/destinationInfo";

const Destination = () => {
  return (
    <section className="page destination text-white">
      <Navigation />
      <div>
        <h3>01 Pick your destination</h3>
      </div>
      <div>
        {destinationInfo.map((info) => {
          const {
            id,
            image,
            title,
            note,
            distance,
            kilometers,
            km,
            time,
            days,
          } = info;
          return (
            <article key={id}>
              <div>
                {/* <h3>{url}</h3> */}
                <img src={image} alt={title} />
              </div>
              <div>
                <p>{note}</p>
                <div>
                  <div>
                    <p>{distance}</p>
                    <h3>
                      {kilometers}
                      <span>{km}</span>
                    </h3>
                  </div>
                  <div>
                    <p>{time}</p>
                    <h3>{days}</h3>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Destination;
