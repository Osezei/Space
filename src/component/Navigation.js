import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/url";
import "../index.css";
import NavImage from "../assets/shared/logo.svg";
import Menu from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

import styled from "styled-components";

const Navigation = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Nav className="items-center pt-8 uppercase text-home text-white nav-list pag">
      <div className="hidden md:flex justify-between items-center">
        <div className="bg-white rounded-full ml-10">
          <img src={NavImage} alt="navImage" />
        </div>

        <div className="hidden lg:block h-[0.05rem] w-[36rem] text-green-700 bg-[#d0d6f976] absolute right-[44rem]"></div>
        <div className="text-white text-sm tracking-widest bg-[#D0D6F9] color px-10 lg:px-28 py-10 relative">
          <ul>
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id}>
                  <Link to={url} className="title mr-6">
                    {" "}
                    <span className="fig lg:mr-1">{titleNumber}</span> {title}
                  </Link>
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>

      <div className="small-container flex justify-between items-center md:hidden">
        <div className="bg-white rounded-full ">
          <img src={NavImage} alt="navImage" />
        </div>

        <nav
          className={`${
            toggled === true
              ? "navigation relative"
              : " navigation relative navigation-close"
          }`}
        >
          {/* close button */}
          <button
            onClick={() => setToggled(false)}
            className={`${
              toggled === true
                ? "block absolute top-[38px] right-[35px]"
                : "hidden"
            }`}
          >
            <img src={Close} alt="close" />
          </button>

          {/* links */}
          <ul className="flex flex-col mt-32 gap-2">
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id} className="mt-4">
                  {toggled === true ? (
                    <Link to={url} className="ml-[30px] text-[16px] text-home">
                      <span className="mr-2">{titleNumber}</span> {title}
                    </Link>
                  ) : null}
                </li>
              );
            })}{" "}
          </ul>
        </nav>

        <button
          onClick={() => setToggled(true)}
          className={`${toggled === true ? "hidden" : "block"}`}
        >
          <img src={Menu} alt="menu-bar" />
        </button>
      </div>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  .pag {
  }
  .fig {
    font-weight: 700;
    letter-spacing: 2px;
    font-family: sans-serif;
  }
  .color {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .title {
    position: relative;
  }

  .title::after {
    content: " ";
    position: absolute;
    bottom: -2.6rem;
    left: 0;
    display: block;
    height: 3px;
    width: 0;
    background: #fff;
    transition: 0.3s;
  }
  .title:hover::after {
    width: 100%;
    left: 0;
  }
  .nav-fixed {
    position: relative;
  }

  .nav-fixed::after {
    content: " ";
    position: absolute;
    bottom: -2.6rem;
    left: 0;
    display: block;
    height: 3px;
    width: 100%;
    background: #fff;
    transition: 0.3s;
  }
`;
