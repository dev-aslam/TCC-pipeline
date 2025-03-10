import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Blogs1 from "@/components/blog/Blogs1";
import { menuItems } from "@/data/menu";
import MetaComponent from "@/components/common/MetaComponent";
import CallToAction from "@/components/common/CallToAction";

const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export default function MainBlogColumnsPage3Col() {
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
                            <AnimatedText text="Blog & Articles" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn text-black"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s">
                              Stay informed with the latest industry insights
                              and success stories
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white"></div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <Blogs1 />
            </section>
            <CallToAction />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
