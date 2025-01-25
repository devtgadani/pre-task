import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);
  const tabs = ["Hi", "About", "Gsoc 2025", "Contact Us"];

  useEffect(() => {
    const activeElement = navRef.current?.children[activeTab];
    const currentElement = navRef.current?.querySelector(".slider");

    if (activeElement && currentElement) {
      const { offsetLeft: activeLeft, offsetWidth: activeWidth } = activeElement;
      const { offsetLeft: currentLeft, offsetWidth: currentWidth } = currentElement;

      // Calculate intermediate width to stretch across both tabs
      const stretchWidth =
        activeLeft > currentLeft
          ? activeLeft + activeWidth - currentLeft
          : currentLeft + currentWidth - activeLeft;

      // Animate slider
      setSliderStyle({
        left: `${Math.min(activeLeft, currentLeft)}px`,
        width: `${stretchWidth}px`,
        transition: "all 0.2s linear",
      });

      // After the stretch animation, shrink the slider to the target tab's width
      setTimeout(() => {
        setSliderStyle({
          left: `${activeLeft}px`,
          width: `${activeWidth}px`,
          transition: "all 0.2s linear",
        });
      }, 200);
    }
  }, [activeTab]);

  return (
    <div className="nav-container">
      <h1 className="text-h1">Navigation Border Animation</h1>
      <nav className="navbar">
        <ul className="navbar-list" ref={navRef}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`navbar-item ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
          <div className="slider" style={sliderStyle} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
