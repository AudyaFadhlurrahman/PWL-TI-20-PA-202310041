import React from "react";
import bg from "../../assets/bg.png";

export default function Layout(props) {
  return (
    <div
      className="d-flex flex-column flex-root min-vh-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <h2 className="mb-12 text-white text-center my-4">{props.title}</h2>
          <div className="w-75 bg-body rounded shadow-sm p-4 p-lg-15 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
