import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./styles/Header.css";

export default function Header() {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY > lastScrollY) {
  //       // if scroll down hide the navbar
  //       setShow(true);
  //     } else {
  //       // if scroll up show the navbar
  //       setShow(false);
  //     }

  //     // remember current page location to use in the next move
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener("scroll", controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);
  return (
    <div className="header-container">
      <Nav />
    </div>
  );
}
