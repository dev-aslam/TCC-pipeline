import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { useEffect, useState } from "react";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { Link } from "react-router-dom";
import Blog from "@/components/homes/home-1/Blog";
import { menuItems } from "@/data/menu";
import { useNavigate, useLocation } from "react-router-dom";
import { servicesBlog } from "@/data/servicesBlog";
import MetaComponent from "@/components/common/MetaComponent";
import CallToAction from "@/components/common/CallToAction";
const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export default function MainBlogSinglePageFullWidthService({ key }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    let blogFilter = servicesBlog.filter((elm) => elm.pathname === path);
    if (blogFilter.length > 0) {
      setBlog(blogFilter[0]);
      setIsReady(false);
      setTimeout(() => setIsReady(true), 50);
    } else {
      navigate("/404");
    }
  }, [key, navigate]);

  return (
    <>
      <MetaComponent meta={metadata} />
      {isReady && (
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
                            Services
                          </h2>
                          <h1 className="hs-title-1 mb-20">
                            {blog && (
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars">
                                {/* {blog.subsections.subheading} */}
                                <AnimatedText
                                  text={blog.subsections.subheading}
                                />
                              </span>
                            )}
                          </h1>
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
                <section
                  className="page-section scrollSpysection wow fadeInUp"
                  data-wow-delay="0.5s">
                  <div className="container container-default">
                    {/* <h3 className="h3 mb-50 text-center">Our Values</h3> */}
                    {blog &&
                      blog.subsections.contents.map((elm, ind) => (
                        <div
                          key={ind}
                          className={`row ${
                            ind !== blog.subsections.contents.length - 1
                              ? "mb-50"
                              : ""
                          } ${ind % 2 === 0 ? "" : "flex-row-reverse"}`}>
                          <div className="col-lg-5 col-sm-12 d-flex justify-content-center">
                            <img
                              src={elm.image}
                              className="img-fluid"
                              style={{ height: "350px", objectFit: "contain" }}
                              alt={elm.title}
                            />
                          </div>
                          <div className="col-lg-7 d-flex justify-content-center flex-column col-sm-12">
                            <h4 className="h4" style={{ fontWeight: 600 }}>
                              {elm.title}
                            </h4>
                            <p
                              className="text-gray"
                              style={{ textAlign: "justify" }}>
                              {elm.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              </>
              <section
                className={`page-section scrollSpysection wow fadeInUp pt-0`}
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
                        Read more in our blog{" "}
                        <i className="mi-arrow-right size-18" />
                      </Link>
                    </div>
                  </div>
                  <Blog />
                </div>
              </section>
              <CallToAction />
            </main>
            <Footer1 />
          </div>{" "}
        </div>
      )}
    </>
  );
}
