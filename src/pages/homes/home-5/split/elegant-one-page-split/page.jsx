import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import Hero3 from "@/components/homes/home-5/heros/Hero3";
import { elegantOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 5 Split Onepage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home5SplitOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark stick-fixed wow-menubar">
            <Header5 links={elegantOnepage} />
          </nav>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <Hero3 />
            </section>

            <Home5 onePage />
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
