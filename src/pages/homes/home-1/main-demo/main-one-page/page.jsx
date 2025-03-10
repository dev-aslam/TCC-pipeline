import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Main Demo Onepage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1MainDemoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home1 onePage />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
