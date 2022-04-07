import React from "react";
import Nav from "./Nav/Nav";

function Layout({ isLogin, children }) {
  return (
    <>
      <Nav isLogin={isLogin} />
      {children}
    </>
  );
}

export default Layout;
