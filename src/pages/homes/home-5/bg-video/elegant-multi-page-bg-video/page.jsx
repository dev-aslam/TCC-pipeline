import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import Hero2 from "@/components/homes/home-5/heros/Hero2";
import { elegantMultipage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 5 BG Video MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home5BGVideoMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={elegantMultipage} />
          </nav>
          <main id="main">
            <section
              className="home-section light-content z-index-1 scrollSpysection"
              id="home"
            >
              <Hero2 />
            </section>

            <Home5 />
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
