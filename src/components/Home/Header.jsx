import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";

export default function Header({ lang, setLang, value, setValue }) {
  return (
    <div style={{ background: "#EFF1F3" }}>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
      <HeaderMain lang={lang} />
    </div>
  );
}
