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
        <div className=" my-5 lg:mt-10 text-center md:text-left">
          <h3 className="text-sm md:text-2xl  text-home uppercase">
            <span className="text-home text-[#d0d6f976]">02</span> Meet your
            crew
          </h3>
        </div>
        <div>
          {crewInfo.map(({ id, name, position, image, note }) => {
            return (
              <article key={id}>
                {toggled === id ? (
                  <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:justify-between">
                    <div className="w-[327px] h-[237px] md:w-[500px]  md:h-[335px] mt-10 md:mx-auto lg:w-full lg:my-auto text-center lg:text-left">
                      <h2 className="uppercase text-xl md:text-2xl mb-4 text-home text-[#d0d6f976] ">
                        {position}
                      </h2>
                      <h5 className="text-2xl md:text-5xl uppercase mb-3 lg:mb-7 text-home">
                        {name}
                      </h5>

                      <p className="lg:w-[444px] lg:h-[160px] top-wording text-lg leading-loose">
                        {note}
                      </p>
                    </div>

                    <img
                      src={image}
                      alt={name}
                      className="w-[327px] h-[223px] md:w-[369px] md:h-[532px] lg:w-[500px] lg:h-[600px] mx-auto"
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <div className="absolute bottom-[245px] left-[145px] md:left-[330px] md:bottom-[540px] lg:bottom-[80px] lg:left-0">
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
