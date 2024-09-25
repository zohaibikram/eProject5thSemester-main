import { useState } from "react";

const FooterComp = () => {
  const [email, setEmail] = useState('');
  const [formResult, setFormResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Please enter a valid email address');
      setFormResult('');
      return;
    }

    // Assuming form submission to backend or handling the subscribe action
    console.log('Form submitted:', email);
    setError('');
    setFormResult('Thank you for subscribing!'); // Example success message

    // Optionally, clear the input field after submission
    setEmail('');
  };

  return (
    <>
      {/* <!-- Start Footer Area --> */}
      <div className="footer-area pt-100 jarallax" data-jarallax='{"speed": 0.3}'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-xl-4 col-lg-12 col-md-4" data-cue="slideInUp">
                  <div className="footer-widget">
                    <a href="index.html">
                      <img src="assets/images/logo-two.png" alt="images" />
                    </a>
                    <p>There are many variations of ipsum available majority have words which dont look.</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-6 col-md-4" data-cue="slideInUp">
                  <div className="footer-widget footer-widget-link">
                    <h2>Useful Links</h2>
                    <ul className="footer-widget-list">
                      <li><a href="speakers.html">Speakers</a></li>
                      <li><a href="event-details.html">Venue Info</a></li>
                      <li><a href="event-details.html">Our Partners</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-6 col-md-4" data-cue="slideInUp">
                  <div className="footer-widget footer-widget-link2">
                    <h2>Find Conference</h2>
                    <ul className="footer-widget-list">
                      <li><a href="#">Business Conference</a></li>
                      <li><a href="#">Design Conference</a></li>
                      <li><a href="#">Web Design Seminar</a></li>
                      <li><a href="#">Global Conference</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-5" data-cue="slideInUp">
                  <div className="footer-instagram">
                    <h2>Instagram</h2>
                    <div className="row">
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-1.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-2.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-3.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-4.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-5.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-4 col-sm-4 col-md-4">
                        <div className="instagram-img">
                          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/footer/instagram-6.jpg" alt="images" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-12 col-md-7" data-cue="slideInUp">
                  <div className="footer-subscribe">
                    <h2>Subscribe To Our Newsletter</h2>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="EMAIL"
                        required
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button type="submit" className="default-btn">
                        Subscribe Now <i className="bx bx-plus"></i>
                      </button>
                      {error && <p className="error">{error}</p>}
                      <div id="validator-newsletter" className="form-result">
                        {formResult}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-content">
            <p>
              © <b>Zohaib</b> is Proudly Owned by <a href="https://hibotheme.com/" target="_blank" rel="noopener noreferrer">HiboTheme</a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Footer Area -->  */}
    </>
  );
};

export default FooterComp;
