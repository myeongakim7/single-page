import React from "react";
import myStyle from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={myStyle.textPrimary}>Disney Homepage</h1>
      {/* module 전용 css = 모듈 style  */}
      <nav>
        <a href="#title">Title</a>
        <a href="#disney">Disney</a>
        <a href="#marvel">Marvel</a>
        <a href="#starwars">Star Wars</a>
        <a href="#NGO">National Geography</a>
        <a href="#20th">20th Centry Studios</a>
      </nav>
    </header>
  );
}
