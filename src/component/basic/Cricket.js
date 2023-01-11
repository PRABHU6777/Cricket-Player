import React, { useState } from "react";
import "./style.css";
import Menu from "./playerApi";
import MenuCard from "./MenuCard";

const Cricket = () => {
  const [menuData, setMenudata] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenudata(updatedList);
  };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("batsman")}
          >
            BATSMAN
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("bowler")}
          >
            BOWLER
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("ALL-ROUNDER")}
          >
            ALL-ROUNDER
          </button>
          <button className="btn-group__item" onClick={() => setMenudata(Menu)}>
            ALL
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Cricket;
