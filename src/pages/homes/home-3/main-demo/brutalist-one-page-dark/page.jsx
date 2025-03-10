import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3 from "@/components/homes/home-3";
import Hero1 from "@/components/homes/home-3/heros/Hero1";
import { brutalistOnepage } from "@/data/menu";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 3 Main Demo Onepage Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home3MainDemoOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="theme-brutalist">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header3 links={brutalistOnepage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section parallax-5 light-content scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
                }}
                id="home"
              >
                <Hero1 />
              </ParallaxContainer>

              <Home3 onePage dark />
            </main>
            <footer className="page-section footer-2 bg-dark-2 light-content">
              <Footer3 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
