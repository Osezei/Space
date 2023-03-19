import React, { useState } from "react";
import Navigation from "../component/Navigation";
import { techInfo, techMobile } from "../utils/techInfo";
import styled from "styled-components";

const Technology = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <Section className="page tech text-white">
      <Navigation />
      <div className="">
        <div className="mt-5 lg:mt-10 lg:flex justify-center">
          <h3 className="text-sm md:text-2xl  text-home uppercase lg:w-full container">
            <span className="text-home text-[#d0d6f976] pr-2 ">03</span> space
            launch 101
          </h3>
        </div>
        <div className="hidden lg:flex  justify-between">
          <div className="grid grid-rows-3 ml-[160px] my-auto h-[303px] w-[80px]">
            {techInfo.map(({ id }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "w-[80px] h-[80px] border-2 rounded-full border-[#d0d6f976] bg-white text-[32px] text-black text-home ease-in-out"
                      : "w-[80px] h-[80px] border-2 rounded-full border-[#d0d6f976] text-home text-[32px] ease-in-out"
                  }`}
                >
                  {id}
                </button>
              );
            })}
          </div>
          <div className="text-white">
            {techInfo.map(({ id, image, title, titleTop, note }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div className="hidden lg:flex justify-between">
                      <div className="w-[444px] h-[303px] my-auto mr-40">
                        <h2 className="text-[16px] text-home text-[#D0D6F9] uppercase">
                          {titleTop}
                        </h2>
                        <h3 className="text-[50px] uppercase text-home">
                          {title}
                        </h3>
                        <p className="text-[18px] top-wording pt-[20px]">
                          {note}
                        </p>
                      </div>
                      <img
                        src={image}
                        alt={title}
                        className="w-[515px] h-[527px]"
                      />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
        {/* mobile and tablet */}
        <div className=" hidden">
          <div>
            {techMobile.map(({ id }) => {
              return (
                <button key={id} onClick={() => setToggled(id)}>
                  {id}
                </button>
              );
            })}
          </div>
          <div className="text-white">
            {techMobile.map(({ title, titleTop, note, id, image }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div className="flex">
                      <div>
                        <h2>{titleTop}</h2>
                        <h3>{title}</h3>
                        <p>{note}</p>
                      </div>
                      <img src={image} alt={title} />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Technology;

const Section = styled.div``;
