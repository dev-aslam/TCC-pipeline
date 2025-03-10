import Footer3 from "@/components/footers/Footer3";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import Hero3 from "@/components/homes/home-4/heros/Hero3";
import { corporateMultipage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 4 BG Video MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home4BGVideoMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-corporate">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header4 links={corporateMultipage} />
            </nav>
          </div>
          <main id="main">
            <section
              className="home-section light-content scrollSpysection"
              id="home"
            >
              <Hero3 />
            </section>

            <Home4 />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
