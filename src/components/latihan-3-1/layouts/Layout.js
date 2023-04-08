import React from "react";
import Footers from "./components/footers/Footers";
import Header from "./components/headers/Header";

export default function Layout(props) {
  return (
    <div id="main-layout">
      <Header />
      <main className="mt-20 py-10">{props.children}</main>
      <Footers />
    </div>
  );
}
