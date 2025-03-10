import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Home1 from "@/components/homes/home-1";

import Hero4 from "@/components/homes/home-1/heros/Hero4";
import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Slider Fullscreen Onepage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1SliderFullscreenOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <Hero4 />

            <Home1 onePage />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
