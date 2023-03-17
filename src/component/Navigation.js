import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/url";
import "../index.css";
import NavImage from "../assets/shared/logo.svg";
import Menu from "../assets/shared/icon-hamburger.svg";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav className="items-center pt-8 uppercase text-home">
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

        {/* <div className=" h-[0.05rem] w-[36rem] text-green-700 bg-[#d0d6f976] absolute right-[44rem]"></div> */}
        {/* <div className=" text-white text-sm tracking-widest bg-[#D0D6F9] color px-28 py-10 relative">
          <Link to="/" className="mr-6 title">
            <span className="fig">00</span>Home
          </Link>
          <Link to="/crew" className="mr-6 title">
            <span className="fig">01</span>Crew
          </Link>
          <Link to="/destination" className="mr-6 title">
            <span className="fig">02</span>Destination
          </Link>
          <Link to="/technology" className="mr-6 title">
            <span className="fig">03</span>Technology
          </Link>
        </div> */}
      </div>

      <div className="small-container flex justify-between md:hidden items-center">
        <div className="bg-white rounded-full ">
          <img src={NavImage} alt="navImage" />
        </div>
        <div className="text-white">
          <img src={Menu} alt="menu-bar" />
        </div>
      </div>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
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
