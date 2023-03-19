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
                        <p className="text-[18px] top-wording pt-[20px] text-[#D0D6F9]">
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
        <div className="mt-14 lg:hidden">
          <div>
            {techMobile.map(({ id, image, title }) => {
              return (
                <div key={id}>
                  {toggled === id ? (
                    <>
                      <img src={image} alt={title} className="" />
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-16">
            {techMobile.map(({ id }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "w-[40px] h-[40px] md:w-[80px] md:h-[80px] border-2 rounded-full border-[#d0d6f976] bg-white text-[16px] md:text-[32px] text-black text-home ease-in-out mr-[16px]"
                      : "w-[40px] h-[40px] md:w-[80px] md:h-[80px] border-2 rounded-full border-[#d0d6f976] text-home text-[16px] md:text-[32px] ease-in-out mr-[16px]"
                  }`}
                >
                  {id}
                </button>
              );
            })}
          </div>
          <div className="text-white text-center">
            {techMobile.map(({ title, titleTop, note, id, image }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div className="flex justify-center">
                      <div>
                        <h2 className="text-[#D0D6F9] text-[16px] text-home uppercase mt-[25px]">
                          {titleTop}
                        </h2>
                        <h3 className="text-[40px] uppercase text-home">
                          {title}
                        </h3>
                        <p className="mt-[20px] text-[#D0D6F9] w-[327px] h-[150px] md:w-[458px] md:h-[140px] text-[15px] md:text-[16px]">
                          {note}
                        </p>
                      </div>
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
