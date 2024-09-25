

const ContactComp = () => {
  return (
   <>
     {/* <!-- Start Page Banner Area --> */}
        <div className="page-banner-area page-testimonials">
            <div className="container-fluid">
                <div className="single-page-banner-content">
                    <h1>Contact Us</h1>
                    <ul>
                        <li><a href="index.html">Home</a></li> 
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="page-banner-shape-1">
                <img src="assets/images/banner/banner-one-shape-1.png" alt="images"/>
            </div>
            <div className="page-banner-shape-2">
                <img src="assets/images/banner/banner-one-shape-2.png" alt="images"/>
            </div>
            <div className="page-banner-shape-3">
                <img src="assets/images/banner/banner-one-shape-3.png" alt="images"/>
            </div>
        </div>
        {/* <!-- End Page Banner Area --> */}

        {/* <!-- Start Contact Us Area --> */}
        <div className="contact-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" data-cue="slideInRight" data-duration="1500">
                        <div className="contact-form-content">
                            <div className="section-title left-title">
                                <span className="top-title">Get In Touch</span>
                                <h2>Feel Free To Contact And Reach Us !</h2>
                                <p>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimu minu
                                veniam exercitationem? Phasellus? Officia pulvinar sem cumque quisque.</p>
                            </div>
                            <form id="contactForm"> 
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Your Name" required data-error="Please enter your name"/>
                                            <div className="help-block with-errors"></div> 
                                        </div>
                                    </div>
        
                                    <div className="col-lg-6 col-md-6">  
                                        <div className="form-group">
                                            <input type="email" id="email" placeholder="Your Email" required data-error="Please enter your email" className="form-control"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div> 
                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="subject" id="subject" className="form-control" placeholder="Subject" required data-error="Please enter your subject"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group"> 
                                            <textarea name="message" className="form-control" id="message" cols="5" rows="5" placeholder="Enter your message" required data-error="Write your message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    name="gridCheck"
                                                    value="I agree to the terms and privacy policy."
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="gridCheck"
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    I Agree To The <a href="terms-conditions.html">Terms & Conditions</a> And <a href="privacy-policy.html">Privacy Policy</a>
                                                </label> 
                                                <div className="help-block with-errors gridCheck-error"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">    
                                            Send Your Message<i className="bx bx-plus"></i>
                                        </button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>

                                </div> 
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4" data-cue="slideInRight" data-duration="1500">
                        <div className="single-contact-card">
                            <div className="contact-box">
                                <img src="assets/images/conference-schedules/schedules-style-two-icon-4.svg" alt="images"/>
                                <h3>Address</h3>
                                <p>Shahrah e Faisal, Star Gate Rd, Mall, Karachi, 75200, Pakistan</p>
                            </div>
                            <div className="contact-box">
                                <img src="assets/images/submenu-icon-1.svg" alt="images"/>
                                <h3>Phone</h3>
                                <ul>
                                    <li><a href="tel:012325621563">+923272153650</a></li>
                                    <li><a href="tel:22476244232">+923162562156</a></li>
                                </ul>
                            </div>
                            <div className="contact-box">
                                <img src="assets/images/conference-schedules/schedules-style-two-icon-3.svg" alt="images"/>
                                <h3>Email Us Directly</h3>
                                <ul>
                                    <li><a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#dba8aeababb4a9af9bb5bea8afaef5b8b4b6"><span className="__cf_email__" data-cfemail="46353336362934320628233532336825292b">dani.playz49@gmail.com</span></a></li>
                                    <li><a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#325a575e5e57725c574146471c515d5f"><span className="__cf_email__" data-cfemail="771f121b1b183719120403025914181a">daniyalsajid128@gmail.com</span></a></li>
                                </ul>
                            </div>
                            <div className="contact-list">
                                <h3>Follow Us</h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Contact Us Area --> */}

        {/* <!-- Start Contact Map area --> */}
        <div className="google-map-area">
            <div className="container-fluid">
                <div className="contact-map"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.30295618471!2d67.1494969744307!3d24.88764574417096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33999ec8ecc87%3A0xda9cc5004c86e53f!2sMETRO%20Stargate%20Store%2C%20Karachi!5e0!3m2!1sen!2s!4v1726545639824!5m2!1sen!2s"></iframe>
                </div>
            </div>
        </div>
        {/* <!-- End Contact Map area --> */}
   </>
  )
}

export default ContactComp
