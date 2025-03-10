import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero4 from "@/components/homes/home-1/heros/Hero4";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Slider Fullscreen MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1SliderFullscreenMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <Hero4 />
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
