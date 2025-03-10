import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import { menuItems } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
import CallToAction from "@/components/common/CallToAction";
import { HashLink } from "react-router-hash-link";
const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export const values = [
  {
    title: "Integrity",
    description:
      "Upholding the highest ethical standards, we ensure honesty and transparency in all our dealings, fostering trust with clients and partners.",
    iconPath: "/assets/images/icons/integrity.png",
  },
  {
    title: "Professionalism",
    description:
      "Our team delivers top-tier service with expertise, attention to detail, and respect, ensuring every client receives exceptional support.",
    iconPath: "/assets/images/icons/professionalism.png",
  },
  {
    title: "Client-Centricity",
    description:
      "Placing clients at the center, we tailor our services to meet their unique needs, building lasting relationships based on trust and mutual success.",
    iconPath: "/assets/images/icons/client-centricity.png",
  },
  {
    title: "Innovation",
    description:
      "We embrace forward-thinking, leveraging the latest industry trends and technology to provide cutting-edge solutions that enhance efficiency.",
    iconPath: "/assets/images/icons/innovation.png",
  },
];

export default function MainPageAbout1() {
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
                <div className="container position-relative pt-50 pb-100 pb-sm-20">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-10 offset-md-1">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s">
                          About Our Company
                        </h2>
                        <h1 className="hs-title-1">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars">
                            <AnimatedText text="Welcome to Terminal Customs Consulting" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s">
                              We're a customs consulting firm, specialized in
                              delivering tailored compliance solutions and
                              driving efficiency in global trade operations.
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
              <div className="page-section pt-0">
                <div className="container container-default position-realative">
                  <div className="mt-n120 mt-sm-n60 overflow-hidden">
                    <img
                      src="/assets/images/about/about-5.jpg"
                      alt="Image Description"
                      width={1500}
                      height={844}
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      data-wow-offset={0}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0`} />
            <section className={`page-section scrollSpysection`} id="about">
              <div className="container position-relative">
                <div className="row mb-60 mb-xs-30">
                  <div className="col-md-8">
                    <h2 className="section-caption mb-xs-10">About Us</h2>
                    <h3 className="section-title mb-0">
                      <AnimatedText text="Empowering Your Business Through Expert Customs Solutions" />
                    </h3>
                  </div>
                  <div className="col-md-4 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                    {" "}
                    {/* Decorative Dots */}
                    <div
                      className="decoration-2 d-none d-md-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="-0.2">
                      <img
                        width="103"
                        height="223"
                        src="/assets/images/decoration-2.svg"
                        alt=""
                      />
                    </div>
                    {/* End Decorative Dots */}
                    <HashLink
                      to="/#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                      smooth>
                      <span className="link-strong link-strong-unhovered">
                        Explore Our Services{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true">
                        Explore Our Services{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"></i>
                      </span>
                    </HashLink>
                  </div>
                </div>
                <About />
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection bg-gray-light-1`}
              id="team">
              <Team />
            </section>
            <section className="page-section z-index-1 pb-0">
              <div className="container position-relative">
                {/* Decoration Circle */}
                <div
                  className="decoration-21 d-none d-lg-block"
                  data-rellax-y
                  data-rellax-speed="0.7"
                  data-rellax-percentage="0.5">
                  <img
                    width={148}
                    height={148}
                    className="svg-shape"
                    src="/assets/images/decoration-3.svg"
                    alt=""
                  />
                  {/* End decoration circle */}
                </div>
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2 className="section-title-small mb-20">Our Values</h2>
                    <p className="text-gray mb-0">
                      At the heart of our organization are core values that
                      guide our actions and shape our commitment to excellence.
                      Each value reflects our dedication to integrity,
                      professionalism, client satisfaction, and innovation.
                    </p>
                  </div>
                </div>
                {/* Features Grid */}
                <div className="row mt-n30 wow fadeInUp">
                  {/* Feature Item */}
                  {values.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6 col-xl-3 d-flex align-items-stretch">
                      <div className="alt-features-item box-shadow text-center mt-30">
                        <div className="alt-features-icon mb-20 ">
                          <img src={elm.iconPath} alt={elm.title} />
                        </div>
                        <h4 className="alt-features-title">{elm.title}</h4>
                        <div className="alt-features-descr">
                          {elm.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className={`page-section`}>
              <Testimonials />
            </section>
            <CallToAction />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
