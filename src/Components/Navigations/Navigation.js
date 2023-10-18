import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavData } from "./nav-data";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./Navigation.css";

const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarHandler = () => {
    setShowSideBar(true);
  };

  const hideSideBarHandler = () => {
    setShowSideBar(false);
  };

  return (
    <React.Fragment>
      <div className="absolute w-[100%]">
        <div className="bg-[#175c15c7] h-[3rem] flex justify-start items-center">
          <Link to="#" className="ml-[2rem] bg-none">
            <MenuOutlinedIcon onClick={showSideBarHandler} />
          </Link>
          <span className="text-xl text-slate-50">
            <Link to="/">
              <h1>DASHBOARD TOKO ALFAN</h1>
            </Link>
          </span>
        </div>
      </div>
      <nav className={showSideBar ? "nav-menu active z-10" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={hideSideBarHandler}>
          <li className="navbar-toggle">
            <Link to="#" className="ml-[2rem] text-[2rem] bg-none">
              <CloseOutlinedIcon />
            </Link>
          </li>

          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.style}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
