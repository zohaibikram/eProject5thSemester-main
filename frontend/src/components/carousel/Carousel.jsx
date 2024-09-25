import { useEffect } from "react";



const Carousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $(".hero-auto-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
    });
  }, []);

  return (
    // <!-- Start Banner area -->
    <div className="hero-area">
      <div className="hero-auto-slider owl-carousel owl-theme">
        <div className="hero-slider-item">
          <div className="container-fluid">
            <div className="hero-content">
              <h1 data-cue="slideInLeft" data-duration="1000">
                Provide The Future Of Your Investment
              </h1>
              <p data-cue="slideInLeft" data-duration="1300">
                There are many variations of passages of lorem ipsum available
                but the majority have some form by injected humour or randomised
                slightly.
              </p>
              <div className="hero-bottom" data-cue="slideInLeft" data-duration="1500">
                <a href="register.html" className="default-btn">
                  Register Now <i className="bx bx-plus"></i>
                </a>
                <a href="#" className="default-btn btn-style-one">
                  View Schedule <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-shape-1">
            <img src="assets/images/banner/banner-one-shape-1.png" alt="images" />
          </div>
          <div className="hero-shape-2">
            <img src="assets/images/banner/banner-one-shape-2.png" alt="images" />
          </div>
          <div className="hero-shape-3">
            <img src="assets/images/banner/banner-one-shape-3.png" alt="images" />
          </div>
          <div className="hero-shape-4">
            <img src="assets/images/banner/banner-one-shape.png" alt="images" />
          </div>
        </div>
        <div className="hero-slider-item bg-img-1">
          <div className="container-fluid">
            <div className="hero-content">
              <h1 data-cue="slideInLeft" data-duration="1000">
                Exaltation & Development Conference
              </h1>
              <p data-cue="slideInLeft" data-duration="1300">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered some form by injected humour or
                randomised even slightly.
              </p>
              <div className="hero-bottom" data-cue="slideInUp" data-duration="1500">
                <a href="register.html" className="default-btn">
                  Register Now <i className="bx bx-plus"></i>
                </a>
                <a href="#" className="default-btn btn-style-one">
                  View Schedule <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-shape-1">
            <img src="assets/images/banner/banner-one-shape-1.png" alt="images" />
          </div>
          <div className="hero-shape-2">
            <img src="assets/images/banner/banner-one-shape-2.png" alt="images" />
          </div>
          <div className="hero-shape-3">
            <img src="assets/images/banner/banner-one-shape-3.png" alt="images" />
          </div>
          <div className="hero-shape-5">
            <img src="assets/images/banner/banner-one-shape-4.png" alt="images" />
          </div>
        </div>
      </div>
    </div>
    // <!-- End Banner area -->
  );
};

export default Carousel;
 