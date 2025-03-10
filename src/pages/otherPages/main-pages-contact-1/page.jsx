import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import React from "react";
import { menuItems } from "@/data/menu";
import Contact2 from "@/components/homes/home-1/Contact2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export default function MainPageContact1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
                }}>
                <>
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s">
                              Contact Us
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars">
                                Connect with us
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </>
              </ParallaxContainer>
            </section>
            <>
              <section className="page-section pt-0" id="contact">
                <Contact2 />
              </section>
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
