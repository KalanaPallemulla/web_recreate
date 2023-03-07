import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideNav from "../Sidenav/index";

const Container = ({ children }) => {
  const [stickyClass, setStickyClass] = useState("mt-0");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setStickyClass("mt-16") : setStickyClass("mt-0");
    }
  };
  return (
    <div className="" style={{ backgroundColor: "rgb(19,12,25)" }}>
      <Navbar isShow={isShow} setIsShow={setIsShow} />
      {/* <SideNav /> */}
      <div
        className={`md:ml-20  ${stickyClass}`}
        onClick={() => setIsShow(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
