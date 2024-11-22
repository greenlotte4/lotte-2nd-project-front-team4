import React, { useRef, useEffect } from "react";
import "../../styles/main/Sliebar.css"; 

const Sidebar = ({ items, userButtonText }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    const handleMouseOver = () => {
      sidebar.classList.add("expanded");
      const icons = sidebar.querySelectorAll(".icon");
      icons
      .forEach((icon) => icon.classList.remove("hidden"));
    };

    const handleMouseOut = () => {
      sidebar.classList.remove("expanded");
      const icons = sidebar.querySelectorAll(".icon");
      icons.forEach((icon) => icon.classList.add("hidden"));
    };

    if (sidebar) {
      sidebar.addEventListener("mouseover", handleMouseOver);
      sidebar.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("mouseover", handleMouseOver);
        sidebar.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <nav className="sidebar" ref={sidebarRef}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <img className="icon hidden" src={item.icon} alt={item.text} />
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <button className="organization-button">{userButtonText}</button>
    </nav>
  );
};

export default Sidebar;
