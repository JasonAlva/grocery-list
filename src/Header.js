import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: "mediumblue", color: "#fff" }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
