import React from "react";

import { FaSearch } from "react-icons/fa";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-navbar position-sticky top-0 navbar navbar-expand container-fluid shadow-sm">
        <div className="container d-flex gap-5 align-items-center">
          <div className="main-logo-container">
            <h1 className="navbar-brand navbar-logo text-white">Web-Decor</h1>
          </div>

          <div className="navbar-search d-flex ">
            <button className="opacity-50 fw-bolder text-white">
              <FaSearch />
            </button>
            <input
              className="input-search-navbar w-100 text-light"
              type="search"
              placeholder="Search for Products/Brands/More"
              required
            />
          </div>

          <div className="user text-white fs-5 ">user actions</div>
          {/* <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#loginModal" data-toggle="modal" data-target="#loginModal">login</a></li> */}

          <div className="threeDots fw-bold fs-5 text-white">
            <a
              href="#"
              class="nav-link dropup-toggle"
              className="threeDots fw-bold fs-5 text-white"
              data-bs-toggle="dropup"
            >
              {" "}
              <BsThreeDotsVertical />
            </a>
            <div class="dropup-menu bg-light ml-0">
              <Link to="/register" class="dropup-item text-dark p-3 fw-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
