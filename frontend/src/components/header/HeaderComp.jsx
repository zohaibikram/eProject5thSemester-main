import { Link, NavLink } from "react-router-dom";
import {useContext} from 'react'
import { Context } from "../ContextApi/ContextApi";

const HeaderComp = () => {
  const {isLoggedin,logout} = useContext(Context)
  
  return (
    <>
      {/* <div className="submenu-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9">
              <div className="submenu-left-content">
                <ul>
                  <li>
                    <img src="assets/images/submenu-icon-1.svg" alt="images" />
                    <a href="">+923272153650</a>
                  </li>
                  <li>
                    <img src="assets/images/submenu-icon.svg" alt="images" />
                    <p>Metro Star Gate Rd, Karachi, 75200, Pakistan</p>
                  </li>
                  <li>
                    <img src="assets/images/submenu-icon-2.svg" alt="images" />
                    <a href="">
                      <span
                        className="__cf_email__"
                        data-cfemail="aac2cfc6c6c5eac4cfd9dedf84c9c5c7"
                      >
                        zohaibikram756@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="submenu-right-content">
                <ul>
                  <li>
                    <p>Follow Us:</p>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Start Menubar Area -->  */}
      <div className="navbar-area">
        {/* <!-- Start Menu For Mobile Device -->   */}
        <div className="container">
          <div className="mobile-nav">
            <div className="logo">
              <a href="index.html">
                <img
                  src="assets/images/logo-one.png"
                  className="logo-light"
                  alt="images"
                />
                <img
                  src="assets/images/logo-two.png"
                  className="logo-dark"
                  alt="images"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End Menu For Mobile Device -->  */}

        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a href="index.html">
                <img
                  src="assets/images/logo-one.png"
                  className="logo-light"
                  alt="images"
                />
                <img
                  src="assets/images/logo-two.png"
                  className="logo-dark"
                  alt="images"
                />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item nav-item-five">
                    <NavLink to="/" className="nav-link ">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-five">
                    <NavLink to="/about" className="nav-link">
                      About Us
                    </NavLink>
                  </li>

                  <li className="nav-item nav-item-five">
                    <NavLink to="/event" className="nav-link dropdown-toggle">
                      Event
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/eventDetail" className="nav-link bg-border-top">
                          Event Detail
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-five">
                    <NavLink to="/blog" className="nav-link dropdown-toggle">
                      Blog
                    </NavLink>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/blogDetail" className="nav-link bg-border-top">
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

                <div className="others-option-vg d-flex align-items-center">
                  <div className="option-item">
                    <form className="search-form">
                      <input
                        className="search-input"
                        placeholder="Search Here"
                        type="text"
                      />

                      <button type="submit" className="search-button">
                        <i className="bx bx-search"></i>
                      </button>
                    </form>
                  </div>

                  <div className="option-item">
      {isLoggedin ? (
        <button onClick={logout} className="default-btn">
          Logout <i className="bx bx-log-out"></i>
        </button>
      ) : (
        <Link to="/account" className="default-btn">
          Register Now <i className="bx bx-plus"></i>
        </Link>
      )}
    </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-option justify-content-center d-flex align-items-center">
                  <div className="option-item">
                    <form className="search-form">
                      <input
                        className="search-input"
                        placeholder="Search Here"
                        type="text"
                      />

                      <button type="submit" className="search-button">
                        <i className="bx bx-search"></i>
                      </button>
                    </form>
                  </div>

                  <div className="option-item">
                    <a href="pricing.html" className="default-btn">
                      Get Free Estimate <i className="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Menubar Area --> */}
    </>
  );
};

export default HeaderComp;
