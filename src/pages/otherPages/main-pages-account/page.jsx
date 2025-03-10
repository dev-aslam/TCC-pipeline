import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";
import { useState } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signIn } from "@/firebase/auth";
import { useAuth } from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";

const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};
export default function MainPageAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { initializeUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn({ email, password })
      .then((userCred) => {
        initializeUser(userCred.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
                      <div>
                        <div className="wow fadeInUp" data-wow-delay=".1s">
                          <h1 className="hs-title-1 mb-40 mb-sm-30">
                            Admin Login
                          </h1>
                        </div>
                        <form
                          className="form contact-form"
                          onSubmit={handleSubmit}>
                          <div className="mb-30">
                            {/* Name */}
                            <div
                              className="form-group"
                              style={{ textAlign: "start" }}>
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="input-lg round form-control"
                                placeholder="Enter email"
                                required
                                aria-required="true"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            {/* Password */}
                            <div
                              className="form-group"
                              style={{ textAlign: "start" }}>
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                name="password"
                                id="password"
                                className="input-lg round form-control"
                                placeholder="Enter password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                aria-required="true"
                              />
                            </div>
                          </div>
                          {/* {errorMessage && (
                            <div className="error mb-30">{errorMessage}</div>
                          )} */}
                          <button
                            className="submit_btn btn text-white btn-mod btn-large btn-round login-btn btn-hover-anim"
                            id="login-btn">
                            <span>Login</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Home Section Content */}
              </div>
            </section>
            <ToastContainer />
            {/* End Home Section */}
          </main>
          {/* <Footer1 /> */}
        </div>
      </div>
    </>
  );
}
