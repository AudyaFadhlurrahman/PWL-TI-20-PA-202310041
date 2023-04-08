import React from "react";

export default function Footers() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            {/* <svg className="bi" width="30" height="24">
              <use xlink:href="#bootstrap" />
            </svg> */}
            <i className="bi bi-bootstrap-fill"></i>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2022 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            {/* <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#twitter" />
              </svg>
            </a> */}
            <i className="bi bi-twitter"></i>
          </li>
          <li className="ms-3">
            {/* <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#instagram" />
              </svg>
            </a> */}
            <i className="bi bi-instagram"></i>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              {/* <svg className="bi" width="24" height="24">
                <use xlink:href="#facebook" />
              </svg> */}
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
