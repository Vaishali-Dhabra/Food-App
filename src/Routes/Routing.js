import React from "react";
import Header from "../Components/Header";

const Routing = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Routing;
