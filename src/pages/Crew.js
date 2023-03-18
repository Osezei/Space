import React, { useState } from "react";
import Navigation from "../component/Navigation";
import { crewInfo } from "../utils/crewInfo";
import styled from "styled-components";
import "../index.css";

const Crew = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <Section className="page crew ">
      <Navigation />
      <div className="text-white container relative">
        <div className="mt-10">
          <h3 className="text-sm md:text-2xl  text-home uppercase">
            <span className="text-home text-[#d0d6f976] pr-2 ">02</span> Meet
            your crew
          </h3>
        </div>
        <div>
          {crewInfo.map(({ id, name, position, image, note }) => {
            return (
              <article key={id}>
                {toggled === id ? (
                  <div className="flex justify-between">
                    <div className="my-auto">
                      <h2 className="uppercase text-xl lg:text-2xl mb-4 text-home text-[#d0d6f976] ">
                        {position}
                      </h2>
                      <h5 className="text-3xl lg:text-5xl uppercase mb-7 text-home">
                        {name}
                      </h5>

                      <p className=" top-wording text-lg leading-loose">
                        {note}
                      </p>
                    </div>
                    <div className="w-[950px] h-full">
                      <img src={image} alt={name} className="w-[500px]" />
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <div className="absolute bottom-[300px] left-[145px] lg:bottom-[70px] lg:left-0">
          {crewInfo.map(({ id, name }) => {
            return (
              <div
                key={id}
                onClick={() => setToggled(id)}
                className={`${
                  toggled === id
                    ? "dot dot-active mr-4 cursor-pointer"
                    : "dot mr-4 cursor-pointer"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Crew;

const Section = styled.div`
  .dot {
    height: 10px;
    width: 10px;
    background-color: #d0d6f976;
    border-radius: 50%;
    display: inline-block;
  }
  .dot-active {
    background-color: #fff;
  }
`;
