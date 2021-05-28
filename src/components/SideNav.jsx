import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/SideNav.css";
import { SidebarData } from "./SidebarData";

export default function SideNav({ children }) {
  const [sidebarData, setSidebarData] = useState([]);
  const toggle = useRef();
  const nav = useRef();
  const bodypd = useRef();
  const headerpd = useRef();
  const showNavbar = () => {
    // show navbar
    nav.current.classList.toggle("show");
    // change icon
    toggle.current.classList.toggle("bx-x");
    // add padding to body
    bodypd.current.classList.toggle("container-pd");
    // add padding to header
    headerpd.current.classList.toggle("body-pd");
  };

  const generateNav = (data) => {
    const temp = [];
    data.forEach((s, index) => {
      temp.push(
        <Link
          key={index}
          to={s.path}
          className={`nav_link ${s.active ? "active" : ""}`}
          onClick={() => colorLink(index)}
        >
          {s.icon}
          <span className="nav_name">{s.title}</span>
        </Link>
      );
    });
    setSidebarData(temp);
  };

  useEffect(() => {
    generateNav(SidebarData);
  }, []);

  const colorLink = (index) => {
    SidebarData.forEach((s) => {
      s.active = false;
    });
    SidebarData[index].active = true;
    generateNav(SidebarData);
  };

  return (
    <div className="container-fluid" ref={bodypd}>
      <header className="header" ref={headerpd}>
        <div className="header_toggle">
          <i className="bx bx-menu" ref={toggle} onClick={showNavbar}></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>

      <div className="l-navbar" ref={nav}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">HMS</span>
            </Link>
            <div className="nav_list">
              {/* {SidebarData.map((s, index) => {
                console.log(s);
                return (
                  <Link
                    key={index}
                    to={s.path}
                    className={`nav_link ${s.active ? "active" : ""}`}
                    onClick={() => colorLink(index)}
                  >
                    {s.icon}
                    <span className="nav_name">{s.title}</span>
                  </Link>
                );
              })} */}
              {sidebarData}
            </div>
          </div>
          <Link to="/" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>

      <div className="height-100 bg-white">{children}</div>
    </div>
  );
}
