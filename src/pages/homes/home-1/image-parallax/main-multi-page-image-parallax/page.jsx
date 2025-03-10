import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import { menuItems } from "@/data/menu";
import Hero3 from "@/components/homes/home-1/heros/Hero3";
import Header1Multipage from "@/components/headers/Header1Multipage";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Image Parallax MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1ImageParallaxMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-13.jpg)",
              }}
              id="home"
            >
              <Hero3 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
