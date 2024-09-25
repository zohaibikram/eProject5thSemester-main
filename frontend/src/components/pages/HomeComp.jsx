import { useState } from "react";
import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

const HomeComp = () => {
    const [ticketCount, setTicketCount] = useState('');

    const handleChange = (event) => {
        setTicketCount(event.target.value);
    };  
  return (
    <>
      <Carousel />
      {/* Start Conference Area */}
      <div className="conference-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-conference-img">
                <img
                  src="assets/images/conference/conference-img-3.jpg"
                  alt="images"
                  data-cue="slideInDown"
                  data-duration="2000"
                />
                <div
                  className="conference-img-2"
                  data-cue="slideInLeft"
                  data-duration="2000"
                >
                  <img
                    src="assets/images/conference/conference-img-1.jpg"
                    alt="images"
                  />
                </div>
                <div
                  className="conference-img-3"
                  data-cue="slideInUp"
                  data-duration="2000"
                >
                  <img
                    src="assets/images/conference/conference-img-2.jpg"
                    alt="images"
                  />
                </div>
                <div
                  className="conference-experience"
                  data-cue="slideInUp"
                  data-duration="2000"
                >
                  <i className="flaticon-award"></i>
                  <h5>35+ Years Experience Of Speakers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-conference-content"
                data-cue="slideInRight"
              >
                <div className="section-title left-title">
                  <span className="top-title">Why Join Conference</span>
                  <h2>Conferences And Organization Seminars Celebration</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have form by injected humour or
                    words which dont look believable.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="conference-item">
                      <div className="conference-icon">
                        <i className="flaticon-clock"></i>
                      </div>
                      <h3>When To Start</h3>
                      <p>Tuesday – Friday 27 – 30 June 2024</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="conference-item">
                      <div className="conference-icon">
                        <i className="flaticon-map-location"></i>
                      </div>
                      <h3>Where The Location</h3>
                      <p>Mueensbay Ball 471 Dickel Yiamond Road, USA</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="conference-item">
                      <div className="conference-icon">
                        <i className="flaticon-employee"></i>
                      </div>
                      <h3>Visionary Speaker</h3>
                      <p>There are many variation but majority have suffered</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="conference-item">
                      <div className="conference-icon">
                        <i className="flaticon-sponsor"></i>
                      </div>
                      <h3>International Sponsor</h3>
                      <p>There are many variation but majority have suffered</p>
                    </div>
                  </div>
                </div>
                <a href="pricing.html" className="default-btn btn-style-one">
                  Buy A Tickets <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Conference Area */}
      {/* <!-- Start Conference Planning Area --> */}
      <div className="conference-planning-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Conference Planning</span>
            <h2>Why Your Should Attend The Conference</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-cue="slideInLeft"
              data-duration="1000"
            >
              <div className="single-conference-card">
                <div className="planning-icon">
                  <i className="flaticon-networking"></i>
                </div>
                <h3>Networking People</h3>
                <p>
                  Get the most of reduction in your us operating costs for the
                  whole which of amazing ui/ux experiences.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-cue="slideInDown"
              data-duration="1000"
            >
              <div className="single-conference-card">
                <div className="planning-icon">
                  <i className="flaticon-ownership"></i>
                </div>
                <h3>Business Owners</h3>
                <p>
                  Get the most of reduction in your us operating costs for the
                  whole which of amazing ui/ux experiences.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-cue="slideInRight"
              data-duration="1000"
            >
              <div className="single-conference-card">
                <div className="planning-icon">
                  <i className="flaticon-promoted"></i>
                </div>
                <h3>Promote Reunions</h3>
                <p>
                  Get the most of reduction in your us operating costs for the
                  whole which of amazing ui/ux experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Conference Planning Area --> */}
      {/* <!-- Start Our Conference Schedules Area --> */}
      <div className="conference-schedules-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Conference Schedules</span>
            <h2>Join Our Best Development Action Conference</h2>
          </div>
          <div className="conference-schedules-tab">
            <ul className="nav nav-tabs">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Day (1)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Day (2)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Day (3)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#day-fore-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Day (4)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#day-five-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Day (5)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#day-six-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Day (6)
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-1.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-4.jpg"
                              alt="images"
                            />
                            <h3>Charlene Bernhard</h3>
                            <p>Chief Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Ui/Ux Design</span>
                        <h3>Digital World Conference</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-2.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-5.jpg"
                              alt="images"
                            />
                            <h3>Ernestine Willms</h3>
                            <p>Web Technologist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Video Streaming</span>
                        <h3>Renewal Day Experience</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-3.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-6.jpg"
                              alt="images"
                            />
                            <h3>Samara Kovacek</h3>
                            <p>Co-founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Coffee & Snacks</span>
                        <h3>Building A Successful Business</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-1.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-4.jpg"
                              alt="images"
                            />
                            <h3>Charlene Bernhard</h3>
                            <p>Chief Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Ui/Ux Design</span>
                        <h3>Digital World Conference</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-2.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-5.jpg"
                              alt="images"
                            />
                            <h3>Ernestine Willms</h3>
                            <p>Web Technologist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Video Streaming</span>
                        <h3>Renewal Day Experience</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-2.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-5.jpg"
                              alt="images"
                            />
                            <h3>Ernestine Willms</h3>
                            <p>Web Technologist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Video Streaming</span>
                        <h3>Renewal Day Experience</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-3.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-6.jpg"
                              alt="images"
                            />
                            <h3>Samara Kovacek</h3>
                            <p>Co-founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Coffee & Snacks</span>
                        <h3>Building A Successful Business</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="day-fore-tab-pane"
                role="tabpanel"
                aria-labelledby="day-fore-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-1.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-4.jpg"
                              alt="images"
                            />
                            <h3>Charlene Bernhard</h3>
                            <p>Chief Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Ui/Ux Design</span>
                        <h3>Digital World Conference</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-2.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-5.jpg"
                              alt="images"
                            />
                            <h3>Ernestine Willms</h3>
                            <p>Web Technologist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Video Streaming</span>
                        <h3>Renewal Day Experience</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-3.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-6.jpg"
                              alt="images"
                            />
                            <h3>Samara Kovacek</h3>
                            <p>Co-founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Coffee & Snacks</span>
                        <h3>Building A Successful Business</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="day-five-tab-pane"
                role="tabpanel"
                aria-labelledby="day-five-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-3.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-6.jpg"
                              alt="images"
                            />
                            <h3>Samara Kovacek</h3>
                            <p>Co-founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Coffee & Snacks</span>
                        <h3>Building A Successful Business</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-1.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-4.jpg"
                              alt="images"
                            />
                            <h3>Charlene Bernhard</h3>
                            <p>Chief Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Ui/Ux Design</span>
                        <h3>Digital World Conference</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="day-six-tab-pane"
                role="tabpanel"
                aria-labelledby="day-six-tab"
                tabIndex="0"
              >
                <div
                  className="conference-schedules-content"
                  data-cue="slideInUp"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="single-schedules-item">
                        <div className="schedules-images">
                          <img
                            src="assets/images/conference-schedules/conference-schedules-img-1.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="schedules-text">
                          <span>
                            <img
                              src="assets/images/conference-schedules/conference-schedules-icon.svg"
                              alt="images"
                            />
                            08:30 - 09:30 AM
                          </span>
                          <div className="client-item">
                            <img
                              src="assets/images/conference-schedules/conference-schedules-img-4.jpg"
                              alt="images"
                            />
                            <h3>Charlene Bernhard</h3>
                            <p>Chief Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="schedules-design-content">
                        <span>Ui/Ux Design</span>
                        <h3>Digital World Conference</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          randomised words which dont look even slightly
                          believable anything embarrassing hidden in the middle
                          of text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="schedules-btn">
                        <a
                          href="pricing.html"
                          className="default-btn btn-style-one"
                        >
                          Buy A Tickets <i className="bx bx-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conference-schedules-shape">
                    <img
                      src="assets/images/conference-schedules/conference-schedules-shape.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Conference Schedules Area --> */}
      {/* <!-- Start Conference Team Area --> */}
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Conference Speakers</span>
            <h2>Experience With The Knowledge Of Our Speakers</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInLeft">
              <div className="team-card">
                <div className="team-images">
                  <a href="speakers.html">
                    <img src="assets/images/team/team-1.jpg" alt="images" />
                  </a>
                </div>
                <ul className="team-list">
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
                <h3>Mckenna Osinski</h3>
                <p>Journalist</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInDown">
              <div className="team-card">
                <div className="team-images">
                  <a href="speakers.html">
                    <img src="assets/images/team/team-2.jpg" alt="images" />
                  </a>
                </div>
                <ul className="team-list">
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
                <h3>Hassie Kassulke</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="team-card">
                <div className="team-images">
                  <a href="speakers.html">
                    <img src="assets/images/team/team-3.jpg" alt="images" />
                  </a>
                </div>
                <ul className="team-list">
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
                <h3>Domenico Hayes</h3>
                <p>Executive Officer</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInRight">
              <div className="team-card">
                <div className="team-images">
                  <a href="speakers.html">
                    <img src="assets/images/team/team-4.jpg" alt="images" />
                  </a>
                </div>
                <ul className="team-list">
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
                <h3>Henderson Welch</h3>
                <p>Business Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Conference Team Area --> */}

      {/* <!-- Start Upcoming area --> */}
      <div
        className="upcoming-area pt-100 pb-100 jarallax"
        data-jarallax='{"speed": 0.3}'
      >
        <div className="container">
          <div className="section-title">
            <span className="top-title">Upcoming Conferences</span>
            <h2>Counting Time & Not Yet Registered? Hurry Up!</h2>
          </div>
          <div className="upcoming-list">
            <ul className="live-auctions-countdown flex-wrap d-flex justify-content-center">
              <li
                className="align-items-center flex-column d-flex justify-content-center"
                data-cue="slideInRight"
              >
                <span className="days">00</span>
                Days
              </li>
              <li
                className="align-items-center bgs-border-10 flex-column d-flex justify-content-center"
                data-cue="slideInRight"
              >
                <span className="hours">00</span>
                Hours
              </li>
              <li
                className="align-items-center flex-column d-flex justify-content-center"
                data-cue="slideInRight"
              >
                <span className="minutes">00</span>
                Minutes
              </li>
              <li
                className="align-items-center bgs-border-10 flex-column d-flex justify-content-center"
                data-cue="slideInRight"
              >
                <span className="seconds">00</span>
                Seconds
              </li>
            </ul>
            <div className="upcoming-btn">
              <a href="register.html" className="default-btn">
                Register Now <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="upcoming-shape-1">
          <img src="assets/images/upcoming-shape-1.png" alt="images" />
        </div>
        <div className="upcoming-shape-2">
          <img src="assets/images/upcoming-shape-2.png" alt="images" />
        </div>
      </div>
      {/* <!-- End Upcoming area --> */}

      {/* <!-- Start Why The Conference Area --> */}
      <div className="why-the-conference-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-the-conference-image">
                <img
                  src="assets/images/conference/why-the-conference-1.jpg"
                  alt="images"
                  data-cue="slideInDown"
                />
                <div
                  className="why-the-conference-img-2"
                  data-cue="slideInLeft"
                >
                  <img
                    src="assets/images/conference/why-the-conference-2.jpg"
                    alt="images"
                  />
                </div>
                <div className="why-the-conference-img-3" data-cue="slideInUp">
                  <img
                    src="assets/images/conference/why-the-conference-3.jpg"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-cue="slideInRight">
              <div className="why-the-conference-content">
                <div className="section-title left-title">
                  <span className="top-title">Why The Conference</span>
                  <h2>Experience Gained On Conference And Innovative Days</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have form by injected humour or
                    randomised words which dont look believable.
                  </p>
                </div>
                <ul>
                  <li>
                    <img
                      src="assets/images/conference/why-the-conference-icon.svg"
                      alt="images"
                    />{" "}
                    We will provide a professional service every time.
                  </li>
                  <li>
                    <img
                      src="assets/images/conference/why-the-conference-icon.svg"
                      alt="images"
                    />{" "}
                    We will ensure that your event is accessible on all
                    platforms and devices.
                  </li>
                  <li>
                    <img
                      src="assets/images/conference/why-the-conference-icon.svg"
                      alt="images"
                    />{" "}
                    We can set up your event for an unlimited audience.
                  </li>
                  <li>
                    <img
                      src="assets/images/conference/why-the-conference-icon.svg"
                      alt="images"
                    />{" "}
                    We complete event follow-ups to ensure a high customer
                    retention rate.
                  </li>
                  <li>
                    <img
                      src="assets/images/conference/why-the-conference-icon.svg"
                      alt="images"
                    />{" "}
                    We only use very good tools that ensure a fast and safe
                    experience.
                  </li>
                </ul>
                <a href="pricing.html" className="default-btn btn-style-one">
                  Buy A Tickets <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why The Conference Area --> */}

      {/* <!-- Start Our Testimonials Area  --> */}
      <div className="testimonials-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Testimonials</span>
            <h2>What Did Our Visitors Say About Us?</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-xl-3 col-sm-6 col-md-6"
              data-cue="slideInLeft"
            >
              <div className="testimonials-card">
                <span>15 - June - 2024</span>
                <p>
                  Had a fantastic time at genes expo got to meet a lot of great
                  people and hear some amazin talks thanks @genesisexpo for a
                  super day!
                </p>
                <div className="testimonials-cliend">
                  <a href="testimonials.html">
                    <img
                      src="assets/images/testimonials/testimonials-1.jpg"
                      alt="images"
                    />
                  </a>
                  <h3>Yolanda Medhurst</h3>
                  <p>Rigging Chaser</p>
                </div>
                <div className="testimonials-icon">
                  <img
                    src="assets/images/testimonials/testimonials-shape.svg"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 col-md-6"
              data-cue="slideInUp"
            >
              <div className="testimonials-card">
                <span>18 - June - 2024</span>
                <p>
                  Had a fantastic time at genes expo got to meet a lot of great
                  people and hear some amazin talks thanks @genesisexpo for a
                  super day!
                </p>
                <div className="testimonials-cliend">
                  <a href="testimonials.html">
                    <img
                      src="assets/images/testimonials/testimonials-2.jpg"
                      alt="images"
                    />
                  </a>
                  <h3>Jerrold Farrell</h3>
                  <p>Founder Card</p>
                </div>
                <div className="testimonials-icon">
                  <img
                    src="assets/images/testimonials/testimonials-shape.svg"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 col-md-6"
              data-cue="slideInDown"
            >
              <div className="testimonials-card">
                <span>25 - June - 2024</span>
                <p>
                  Had a fantastic time at genes expo got to meet a lot of great
                  people and hear some amazin talks thanks @genesisexpo for a
                  super day!
                </p>
                <div className="testimonials-cliend">
                  <a href="testimonials.html">
                    <img
                      src="assets/images/testimonials/testimonials-3.jpg"
                      alt="images"
                    />
                  </a>
                  <h3>Tamara Waelchi</h3>
                  <p>Chiropractic Doctor</p>
                </div>
                <div className="testimonials-icon">
                  <img
                    src="assets/images/testimonials/testimonials-shape.svg"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 col-md-6"
              data-cue="slideInRight"
            >
              <div className="testimonials-card">
                <span>30 - June - 2024</span>
                <p>
                  Had a fantastic time at genes expo got to meet a lot of great
                  people and hear some amazin talks thanks @genesisexpo for a
                  super day!
                </p>
                <div className="testimonials-cliend">
                  <a href="testimonials.html">
                    <img
                      src="assets/images/testimonials/testimonials-4.jpg"
                      alt="images"
                    />
                  </a>
                  <h3>Ana Greenholt</h3>
                  <p>Chief Executive</p>
                </div>
                <div className="testimonials-icon">
                  <img
                    src="assets/images/testimonials/testimonials-shape.svg"
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Testimonials Area  --> */}

      {/* <!-- Start Blog Area --> */}
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-4">
              <div className="single-blog-left-content">
                <div className="section-title left-title">
                  <span className="top-title">Our News</span>
                  <h2>Get Every Single Updated Article, Tips And News</h2>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available but the majority have form by injected humou or
                    randomised word which dont abelievable.
                  </p>
                </div>
                <a
                  href="blog-details.html"
                  className="default-btn btn-style-one"
                >
                  More Articles <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-xl-8">
              <div className="blog-right-hover-content">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="blog-image">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="about-image"
                      />
                      <img
                        src="assets/images/blog/blog-2.jpg"
                        className="blog-img1"
                        alt="about-image"
                      />
                      <img
                        src="assets/images/blog/blog-3.jpg"
                        className="blog-img2"
                        alt="about-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog-hover-content">
                      <ul>
                        <li>
                          <div className="single-hover-content">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-1.svg"
                                  alt="images"
                                />{" "}
                                30-June-24
                              </li>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-2.svg"
                                  alt="images"
                                />
                                By <a href="blog-details.html">Admin</a>
                              </li>
                            </ul>
                            <a href="blog-details.html">
                              <h3>
                                This Entrepreneur Is Bringing Online Personal
                                Market Experience
                              </h3>
                            </a>
                            <a href="blog-details.html" className="read-more">
                              Read More<i className="bx bx-plus"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="single-hover-content">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-1.svg"
                                  alt="images"
                                />{" "}
                                30-June-24
                              </li>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-2.svg"
                                  alt="images"
                                />
                                By <a href="blog-details.html">Admin</a>
                              </li>
                            </ul>
                            <a href="blog-details.html">
                              <h3>
                                Hiring Your Startup’s First Customer Success
                                Lead
                              </h3>
                            </a>
                            <a href="blog-details.html" className="read-more">
                              Read More<i className="bx bx-plus"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="single-hover-content">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-1.svg"
                                  alt="images"
                                />{" "}
                                30-June-24
                              </li>
                              <li>
                                <img
                                  src="assets/images/blog/blog-icon-2.svg"
                                  alt="images"
                                />
                                By <a href="blog-details.html">Admin</a>
                              </li>
                            </ul>
                            <a href="blog-details.html">
                              <h3>
                                Every Profitable Marketing Strategy Requires
                                High-Quality Content
                              </h3>
                            </a>
                            <a href="blog-details.html" className="read-more">
                              Read More<i className="bx bx-plus"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-shape">
          <img src="assets/images/blog/blog-shape-1.png" alt="images" />
        </div>
      </div>
      {/* <!-- End Blog Area --> */}

      {/* <!-- Start Our Conference Location Area --> */}
      <div className="location-conference-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Conference Location</span>
            <h2>Get Directions To The Venue</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-cue="fadeIn"
              data-duration="2000"
            >
              <form className="location-conference-form">
                <h3>Make An Adventure With Us</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="select-icon">
                        <select
                          className="form-select"
                          value={ticketCount}
                          onChange={handleChange}
                          aria-label="Default select example"
                        >
                          <option value="" disabled>
                            Select Number Of Tickets
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <i className="bx bxs-down-arrow"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="message"
                        rows="3"
                        className="form-control"
                        placeholder="Your Message"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="default-btn btn-style-one">
                      Buy A Tickets <i className="bx bx-plus"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-6" data-cue="fadeIn">
              <div className="location-image">
                <img src="assets/images/location-1.png" alt="images" />
                <div
                  className="location-shape"
                  data-cue="zoomIn"
                  data-duration="2000"
                >
                  <img src="assets/images/location-shape.png" alt="images" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-cue="fadeIn"
              data-duration="2000"
            >
              <div className="location-branch-card">
                <h3>Branch One</h3>
                <div className="location-text">
                  <h4>Venue</h4>
                  <p>Event Grand Conference Hall</p>
                </div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>Street Here, New York City 512 USA</p>
                </div>
                <div className="location-text">
                  <h4>Start</h4>
                  <p>Saturday - 10:00 AM</p>
                </div>
                <div className="location-text">
                  <h4>End</h4>
                  <p>Tuesday - 06:00 AM</p>
                </div>
                <Link to='/contact' className="default-btn">
                  Get Directions <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Conference Location Area --> */}
    </>
  );
};

export default HomeComp;
