import React, { useState } from "react";
import FakeAPI from "./FakeAPI.js";
import CardContent from "./CardContent.js";
import Navbar from "./Navbar";
import "./Style.css";

const uniqueList = [
  ...new Set(
    FakeAPI.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Main = () => {
  const [menuData, setMenuData] = useState(FakeAPI);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(FakeAPI);
      return;
    }

    const updatedList = FakeAPI.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar
        className="position"
        filterItem={filterItem}
        menuList={menuList}
      />
      <CardContent menuData={menuData} />
    </>
  );
};

export default Main;
