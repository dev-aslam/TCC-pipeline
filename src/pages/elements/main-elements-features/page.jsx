import Footer1 from "@/components/footers/Footer1";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
// import Features from "@/components/homes/home-1/Features";
import { resources } from "@/data/resources";
import { Link } from "react-router-dom";
import { menuItems } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
import CallToAction from "@/components/common/CallToAction";
const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};

export default function ElementPageFeatures() {
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
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s">
                          Insights
                        </h2>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars">
                            <AnimatedText text="Resources" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s">
                              Access in-depth resources to help you stay ahead
                              in customs and trade compliance
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white"></div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row mb-n30">
                    {/* Services Item*/}
                    {resources.map((elm, ind) => {
                      return (
                        <div
                          className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-30"
                          key={ind}>
                          <a
                            href={elm.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none services-3-item round text-center w-100">
                            <div className="">
                              <div
                                className="wow fadeInUpShort"
                                data-wow-offset={50}>
                                <div className="icons-example-box-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    width="48"
                                    height="64"
                                    viewBox="0 0 48 64">
                                    <path d="M6 8h42v44.125c0 2.125-1.75 3.875-3.875 3.875h-40.25c-2.125 0-3.875-1.75-3.875-3.875v-38.125h4v2h-2v36.125c0 1 0.875 1.875 1.875 1.875h40.25c1 0 1.875-0.875 1.875-1.875v-42.125h-38v40h-2v-42zM12 16v-2h16v2h-16zM12 26v-2h30v2h-30zM12 36v-2h24v2h-24zM12 46v-2h30v2h-30z"></path>
                                  </svg>
                                </div>
                                <h3 className="services-3-title mt-50">
                                  {elm.heading}
                                </h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                    {/* End Services Item*/}
                  </div>
                </div>
              </section>
            </>
            <CallToAction />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
