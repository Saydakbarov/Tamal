import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";

export default function Header({ lang, setLang }) {
  return (
    <div style={{ background: "#EFF1F3" }}>
      <HeaderMenu lang={lang} setLang={setLang} />
      <HeaderMain lang={lang} />
    </div>
  );
}
