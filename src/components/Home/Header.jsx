import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";

export default function Header() {
  return (
    <div style={{ background: "#EFF1F3" }}>
      <HeaderMenu />
      <HeaderMain />
    </div>
  );
}
