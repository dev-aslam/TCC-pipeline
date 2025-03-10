import { useEffect } from "react";
import "./styles/styles.css";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { Route, Routes, useLocation } from "react-router-dom";
import Home1MainDemoMultiPage from "@/pages/homes/home-1/main-demo/main-multi-page/page";
import MainBlogColumnsPage3Col from "./pages/blogs/main-blog-columns-3col/page";
import MainBlogSinglePageFullWidth from "./pages/blog-single/main-blog-single-fullwidth/page";
import ElementPageFeatures from "./pages/elements/main-elements-features/page";
import MainPageAbout1 from "./pages/about/main-pages-about-1/page";
import MainPageContact1 from "./pages/otherPages/main-pages-contact-1/page";
import MainPageNotFound from "./pages/otherPages/main-pages-404/page";
import MainBlogSinglePageFullWidthService from "./pages/blog-single/main-blog-services/page";
import { servicesBlog } from "./data/servicesBlog";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    init_wow();
    parallaxMouseMovement();

    const setupMainNav = () => {
      var mainNav = document.querySelector(".main-nav");
      if (mainNav?.classList?.contains("transparent")) {
        mainNav.classList.add("js-transparent");
      }
      window.addEventListener("scroll", headerChangeOnScroll);
    };

    const timeoutId = setTimeout(() => {
      setupMainNav();
    }, 50);

    parallaxScroll();
    window.scrollTo(0, 0);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [pathname]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {});
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home1MainDemoMultiPage />} />
          <Route path="about" element={<MainPageAbout1 />} />
          <Route path="services">
            {servicesBlog.map((service) => (
              <Route
                key={service.id}
                path={service.pathname}
                element={<MainBlogSinglePageFullWidthService />}
              />
            ))}
            <Route path="" element={<MainPageNotFound />} />
          </Route>
          <Route path="blogs" element={<MainBlogColumnsPage3Col />} />
          <Route path="blog/:id" element={<MainBlogSinglePageFullWidth />} />
          <Route path="resources" element={<ElementPageFeatures />} />
          <Route path="contact-us" element={<MainPageContact1 />} />
        </Route>
        <Route path="*" element={<MainPageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
