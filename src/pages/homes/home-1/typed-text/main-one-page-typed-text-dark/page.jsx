import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import Home1 from "@/components/homes/home-1";
import Hero2 from "@/components/homes/home-1/heros/Hero2";
import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Typed Text Onepage Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1TypedTextOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header1 links={mainDemoOnepage} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content bg-scroll scrollSpysection"
                id="home"
              >
                <div className="bg-shape-1">
                  <img
                    width="1443"
                    height="844"
                    src="/assets/images/bg-shape-1.svg"
                    alt=""
                    className="opacity-004"
                  />
                </div>
                <Hero2 />
              </section>
              <Home1 onePage dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
