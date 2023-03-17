import React, { useState } from "react";
import Navigation from "../component/Navigation";
import { destinationInfo } from "../utils/destinationInfo";
import styled from "styled-components";
import "../index.css";

const Destination = () => {
  const [toggled, setToggled] = useState(1);

  return (
    <Section className="page destination text-white ">
      <Navigation />
      <div className="container relative ">
        <div className="block lg:grid lg:grid-cols-2">
          <div className="mt-5 lg:mt-10 lg:flex justify-center">
            <h3 className="text-sm md:text-2xl  text-home uppercase lg:w-full">
              <span className="text-home text-[#d0d6f976] pr-2 ">01</span> Pick
              your destination
            </h3>
          </div>

          <div className="flex justify-center mt-[300px] md:mt-[400px] lg:justify-start  text-sm lg:mt-24">
            {destinationInfo.map(({ id, title }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "mr-6 text-home uppercase tracking-wider title-fixed"
                      : "mr-6 text-home uppercase tracking-wider title-destination"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {destinationInfo.map(
            ({
              title,
              note,
              image,
              id,
              distance,
              kilometers,
              km,
              time,
              days,
            }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div className=" mt-[10px] grid-rows-2 place-items-center lg:hidden ">
                      <div className=" w-[220px] md:w-[300px] lg:w-[450px] lg:mt-5 lg:ml-6 absolute lg:relative top-[60px] left-[80px] md:top-[80px] md:left-[220px]">
                        <img src={image} alt={title} className="" />
                      </div>
                      <div className="">
                        <h6 className="text-6xl lg:text-9xl uppercase py-5 lg:py-8 text-home text-center ">
                          {title}
                        </h6>
                        <p className="top-wording text-sm leading-loose text-center md:px-14 lg:px-0">
                          {note}
                        </p>
                        <div className="my-8 lg:mt-14 lg:mb-10 w-[350px] h-[0.05rem] md:w-[36rem] bg-[#d0d6f976] mx-auto"></div>
                        <div className="grid grid-rows-2 place-items-center lg:grid-cols-2">
                          <div>
                            <p className="uppercase text-home text-sm">
                              {" "}
                              {distance}
                            </p>
                            <h3 className="text-3xl text-home ">
                              {kilometers}
                              <span className="uppercase"> {km}</span>
                            </h3>
                          </div>
                          <div className="mt-3">
                            <p className="uppercase text-home text-sm">
                              {time}
                            </p>
                            <h3 className="text-3xl text-home uppercase">
                              {days}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {toggled === id ? (
                    <div className="hidden mt-[10px] lg:grid grid-cols-2 ">
                      <div className=" w-[450px] mt-5 ml-6">
                        <img src={image} alt={title} className="" />
                      </div>
                      <div className="">
                        <h6 className="text-9xl uppercase py-8 text-home ">
                          {title}
                        </h6>
                        <p className="top-wording text-sm leading-loose">
                          {note}
                        </p>
                        <div className="my-8 lg:mt-14 lg:mb-10 w-[350px] h-[0.05rem] md:w-[36rem] bg-[#d0d6f976] mx-auto"></div>
                        <div className="grid grid-rows-2 place-items-center lg:grid-cols-2">
                          <div>
                            <p className="uppercase text-home text-sm">
                              {" "}
                              {distance}
                            </p>
                            <h3 className="text-3xl text-home ">
                              {kilometers}
                              <span className="uppercase"> {km}</span>
                            </h3>
                          </div>
                          <div className="mt-3">
                            <p className="uppercase text-home text-sm">
                              {time}
                            </p>
                            <h3 className="text-3xl text-home uppercase">
                              {days}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

export default Destination;

const Section = styled.div`
  .title-destination {
    position: relative;
  }

  .title-destination::after {
    content: " ";
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    height: 3px;
    width: 0;
    background: #d0d6f976;
    transition: 0.3s;
  }
  .title-destination:hover::after {
    width: 100%;
    left: 0;
  }

  .title-fixed {
    position: relative;
  }

  .title-fixed::after {
    content: " ";
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    height: 3px;
    width: 100%;
    background: #fff;
    transition: 0.3s;
  }
`;
