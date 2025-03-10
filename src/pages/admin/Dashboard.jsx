import { firebaseSignOut } from "@/firebase/auth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const logoutOnClick = (e) => {
    e.preventDefault();
    firebaseSignOut();
  };

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <div className="main-nav-sub container mx-auto full-wrapper">
              <div className="nav-logo-wrap local-scroll">
                <Link to={`/`} className="logo">
                  <img
                    src="/assets/images/logo-dark-1-nav.svg"
                    alt="Your Company Logo"
                    width={200}
                    height={34}
                    className="light-mode-logo"
                  />
                </Link>
              </div>
              <div className="inner-nav">
                <ul className="items-end clearlist">
                  <li>
                    <Link
                      to="/"
                      onClick={logoutOnClick}
                      className="opacity-1 no-hover">
                      <span
                        className="link-hover-anim underline"
                        data-link-animate="y">
                        <span className="link-strong link-strong-unhovered">
                          Logout
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true">
                          Logout
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <main id="main">
        <section
          className="home-section bg-light-alpha-90 parallax-5"
          style={{
            backgroundImage:
              "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
          }}
          id="home">
          <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
            {/* Home Section Content */}
            <div className="home-content"></div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Dashboard;
