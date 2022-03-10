import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import "./navbar.css";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="border-b dark:border-gray-700 border-gray-200">
      <div className="header-warp flex flex-warp sm:justify-between justify-center items-center ">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <div className="logo-search flex items-center">
            <Link to="/">
              <img
                className="logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="logo"
              />
            </Link>
            <Search />
          </div>

          <div className="navbar-right flex items-center">
            <button
              type="button"
              onClick={() => setDarkTheme(!darkTheme)}
              className="dark-light-btn text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border hover:shadow-lg"
            >
              {darkTheme ? "💡" : "🌙"}
            </button>
            <div className="navbar-apps">
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </div>
            <div className="nav-profile">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/search" className="nav-link search">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="16px"
                heigth="16px"
              >
                <path
                  fill="#5f6368"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#5f6368"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#5f6368"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#5f6368"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/images" className="nav-link images ">
              <svg
                class="DCxYpf"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                heigth="16px"
              >
                <path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#5f6368"
                  d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#5f6368"
                  d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#5f6368"
                  d="M14 13l-2.25 2.75L10 14l-4 4h12z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#5f6368"
                  d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"
                ></path>
              </svg>
              Images
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/videos" className="nav-link videos">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="16px"
                heigth="16px"
              >
                <path fill="#5f6368" d="M10 16.5l6-4.5-6-4.5"></path>
                <path
                  fill="#5f6368"
                  d="M20 12h2v7.5a2.5 2.5 0 0 1-2.5 2.5H12v-2h7a1 1 0 0 0 1-1v-7"
                ></path>
                <path
                  fill="#5f6368"
                  d="M20 12V5a1 1 0 0 0-1-1h-7V2h7.6A2.4 2.4 0 0 1 22 4.4V12h-2"
                ></path>
                <path
                  fill="#5f6368"
                  d="M12 20v2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2H12v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"
                ></path>
              </svg>
              Videos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link news">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="16px"
                heigth="16px"
              >
                <path
                  fill="#5f6368"
                  d="M22 12h-2v6.22c-.07.48-.51.82-1 .78h-7v2h7c1.59.05 2.92-1.17 3-2.76V12"
                ></path>
                <path
                  fill="#5f6368"
                  d="M19 3h-7v2h7c.49-.04.92.3 1 .78V12h2V5.76A2.93 2.93 0 0 0 19 3"
                ></path>
                <path
                  fill="#5f6368"
                  d="M12 3H5a2.93 2.93 0 0 0-3 2.76V12h2V5.78A.94.94 0 0 1 5 5h7V3"
                ></path>
                <path
                  fill="#5f6368"
                  d="M4 12H2v6.24A2.916 2.916 0 0 0 5 21h7v-2H5c-.49.04-.92-.3-1-.78L4.01 12"
                ></path>
                <path
                  fill="#5f6368"
                  d="M10 7H6v6h4V7m8 4h-6v2h6v-2m0 4H6v2h12v-2m0-8h-6v2h6V7"
                ></path>
              </svg>
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
