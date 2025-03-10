import Blog from "@/components/homes/home-1/Blog";
import { brands } from "@/data/brands";
import Facts from "@/components/homes/home-1/Facts";
import Service from "@/components/homes/home-1/Service";
import Testimonials from "@/components/homes/home-1/Testimonials";
import { Link } from "react-router-dom";
import Service5 from "../home-5/Service";
import CallToAction from "@/components/common/CallToAction";
import Marquee from "react-fast-marquee";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section wow fadeInUp ${dark ? " light-content" : ""}`}>
        <div className="container">
          <div className="pb-0 text-center">
            <h3 className="section-title-small">Trusted by</h3>
            {/* <p className="text-gray mb-4">
              We provide top-tier advisory services to major UAE sectors,
              solving complex customs challenges with unmatched expertise.
            </p> */}
            <Marquee>
              {brands.map((elm, i) => (
                <div key={i}>
                  <div className="logo-item" style={{ opacity: 1 }}>
                    <img
                      src={elm.src}
                      alt={elm.name}
                      style={{ maxHeight: elm.height }}
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      <section
        className={`page-section pt-0 ${
          dark ? "bg-dark-1 light-content" : ""
        }`}>
        <div>
          <Service5 />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services">
        <Service />
      </section>

      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
        }}>
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                Proud of our achievements.
              </h2>
              <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s">
                Driving excellence in customs compliance and consulting.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim">
                    <span>REQUEST A CONSULTATION</span>
                  </a>
                ) : (
                  <Link
                    to={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim background-secondary ">
                    <span>REQUEST A CONSULTATION</span>
                  </Link>
                )}
              </div>
            </div>{" "}
            <Facts />
          </div>
        </div>
      </ParallaxContainer>

      <section className={`page-section ${dark ? "light-content" : ""}`}>
        <Testimonials />
      </section>
      <section
        className={`page-section  scrollSpysection wow fadeInUp pt-0 ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog">
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Blog</h2>
              <h3 className="section-title mb-0">
                <span
                  className="wow charsAnimIn text-secondary"
                  data-splitting="chars">
                  The latest news
                </span>
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 text-start text-md-end pt-40 pt-sm-20">
              <Link
                to={`/blogs`}
                className="link-hover-anim underline align-middle"
                data-link-animate="y">
                Read more in our blog <i className="mi-arrow-right size-18" />
              </Link>
            </div>
          </div>
          <Blog />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
