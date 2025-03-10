import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";
import { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";

export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="position-relative">
        <div className="container min-height-100vh pt-100 pt-lg-120 pb-20 d-flex align-items-center">
          {/* Home Section Content */}
          <div className="home-content text-start">
            <div className="row">
              <div className="col-xl-7 d-flex align-items-center mb-lg-120">
                <div>
                  <h2
                    className="section-caption text-center text-xl-start mb-30 mb-xs-10 wow fadeInUp"
                    data-wow-duration="1.2s">
                    Terminal Customs Consulting
                  </h2>
                  <h1 className="hs-title-1 text-center text-xl-start mb-30">
                    <AnimatedText
                      text={
                        "Expert Customs Consulting for Global Trade Success."
                      }
                    />
                  </h1>

                  <p
                    className="section-descr text-center text-xl-start mb-50 wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="1.2s">
                    Achieve efficient and compliant customs operations with our
                    expert consultancy services, including handling customs
                    audits, ensuring compliance with rules and regulations, and
                    managing customs legal cases.
                  </p>
                  <div
                    className="local-scroll mt-n10 wow fadeInUp wch-unset d-flex justify-content-center justify-content-xl-start mb-md-20"
                    data-wow-delay="0.7s"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}>
                    <button
                      onClick={() => setModalShow(true)}
                      className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10 background-secondary">
                      <span>Get Free Consultancy</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                {/* Main Image */}
                {/* <div className="hero-image"></div> */}
                <div className="image-container">
                  <div className="composition-8">
                    {/* Decorative Dots */}
                    <div
                      className="composition-8-decoration-1 mt-n90 mt-md-n60 wow fadeIn"
                      data-wow-duration="1.3s">
                      <img
                        src="/assets/images/hero-section/decoration-1.svg"
                        alt=""
                      />
                    </div>
                    {/* End Decorative Dots */}
                    <img
                      src="/assets/images/hero-section/hs-image-6.png"
                      alt="hero section image"
                      className="wow fadeScaleOutIn"
                      data-wow-duration="1.3s"
                      loading="lazy"
                    />
                  </div>
                  {/* End Main Image */}
                </div>
              </div>
            </div>
          </div>
          {/* End Home Section Content */}
        </div>
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}
