import Service from "@/components/homes/home-1/Service";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";
import AnimatedText from "@/components/common/AnimatedText";

const Services = () => {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header1Multipage links={menuItems} />
        </nav>
      </div>
      <main id="main">
        <section className=" page-section pt-0 pb-0" id="home">
          <ParallaxContainer
            className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
            style={{
              backgroundImage:
                "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
            }}>
            <div className="container position-relative pt-50 pb-100 pb-sm-20">
              {/* Section Content */}
              <div className="text-center">
                <div className="row">
                  {/* Page Title */}
                  <div className="col-md-10 offset-md-1">
                    <h2
                      className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                      data-wow-duration="1.2s">
                      Our Services
                    </h2>
                    <h1 className="hs-title-1">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Customs Advisory & Compliance Services" />
                      </span>
                    </h1>
                    <div className="row">
                      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <p
                          className="section-descr mb-0 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s">
                          Expert Guidance and Comprehensive Solutions for All
                          Your Customs and Trade Compliance Needs
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
        <section className={`page-section scrollSpysection`} id="services">
          {" "}
          <Service />
        </section>
      </main>
    </div>
  );
};
export default Services;
