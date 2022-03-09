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
            <NavLink to="/search" className="nav-link">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                heigth="16px"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6z"></path>
              </svg>
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/images" className="nav-link">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="16px"
                heigth="16px"
              >
                <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
              </svg>
              Images
            </NavLink>
            <li className="nav-item">
              <NavLink to="/videos" className="nav-link">
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  width="16px"
                  heigth="16px"
                >
                  <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
                </svg>
                Videos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link">
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  width="16px"
                  heigth="16px"
                >
                  <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
                </svg>
                News
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="nav-link">Books</NavLink>
            </li> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
