import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("isLogin");
  };

  const menuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 2, name: "Explore", path: "/explore", icon: "bi-compass" },
    { id: 3, name: "Messages", path: "/messages", icon: "bi-send" },
    { id: 4, name: "Profile", path: "/profile", icon: "bi bi-person-fill" },
  ];

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <i class="bi bi-bootstrap-fill fs-3"></i>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {menuList.map((v, index) => (
            <li className="nav-item me-1" key={index}>
              <NavLink
                className="nav-link text-hover-success text-dark px-3"
                to={v.path}
              >
                <i className={"bi me-2 fs-5 text-dark " + v.icon}></i>
                {v.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="col-md-3 text-end">
          {isLogin ? (
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-dark me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
