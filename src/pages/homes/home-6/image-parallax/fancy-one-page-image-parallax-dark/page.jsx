import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import Hero2 from "@/components/homes/home-6/heros/Hero2";

import { fancyOnepage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 6 Image Parallax Onepage Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home6ImageParallaxOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-fancy">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyOnepage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-fancy/section-bg-1.jpg)",
                }}
                id="home"
              >
                <Hero2 />
              </ParallaxContainer>

              <Home6 onePage dark />
            </main>
            <footer className="page-section footer bg-dark-2 light-content pb-30">
              <Footer6 />
            </footer>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
