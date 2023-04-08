import React from "react";
import error from "../../../../../assets/404_Error.svg";

export default function notFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={error} alt="404 not found" style={{ width: "40%" }} />
      <h5>Page Not Found</h5>
    </div>
  );
}
