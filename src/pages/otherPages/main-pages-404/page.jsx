import Footer1 from "@/components/footers/Footer1";
import { Link } from "react-router-dom";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export default function MainPageNotFound() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <section
              className="home-section bg-light-alpha-90 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
              }}
              id="home">
              <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                {/* Home Section Content */}
                <div className="home-content">
                  <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <div className="hs-wrap">
                        <div className="wow fadeInUp" data-wow-delay=".1s">
                          <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                        </div>
                        <div
                          className="mb-40 mb-sm-30 wow fadeInUp"
                          data-wow-delay=".2s">
                          <h2 className="section-descr mb-20">
                            The page you were looking for could not be found.
                          </h2>
                        </div>
                        <div
                          className="local-scroll wow fadeInUp"
                          data-wow-delay=".3s">
                          <Link
                            to={`/`}
                            className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim">
                            <i className="mi-arrow-left size-24 align-center" />
                            <span>Back To Home Page</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Home Section Content */}
              </div>
            </section>
            {/* End Home Section */}
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
