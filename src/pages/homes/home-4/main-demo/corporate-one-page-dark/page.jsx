import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1Dark from "@/components/homes/home-4/heros/Hero1Dark";
import { corporateOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 4 Main Demo Onepage Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home4MainDemoOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent sticky wow-menubar wch-unset">
              <Header4 links={corporateOnepage} />
            </nav>

            <main id="main">
              <section
                className="page-section bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero1Dark />
              </section>

              <Home4 onePage dark />
            </main>
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
