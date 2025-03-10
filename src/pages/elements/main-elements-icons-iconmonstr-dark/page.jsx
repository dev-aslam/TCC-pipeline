import Footer1 from "@/components/footers/Footer1";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import { menuItemsDark } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Element Page Icon Iconmonstr Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function ElementPageIconIconmonstrDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
                  }}
                >
                  <div className="container position-relative pt-30 pt-sm-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-20">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Iconmonstr Icons" />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              <p
                                className="section-descr mb-0 wow fadeIn"
                                data-wow-delay="0.2s"
                                data-wow-duration="1.2s"
                              >
                                Open this file in the HTML editor and copy the
                                code of the wished component.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
              </section>
              <section className="page-section bg-dark-1 light-content">
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 mb-30">
                      <div className="text-center">
                        <p>
                          You can use a set of 4512+
                          <a
                            href="https://iconmonstr.com"
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            Iconmonstr Icons
                          </a>
                          . Open
                          <a
                            href="https://iconmonstr.com"
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            Iconmonstr website
                          </a>
                          , copy SVG code of the icon, and add attributes
                          <code>
                            viewBox="0 0 24 24" fill="currentColor"
                            aria-hidden="true"
                          </code>
                          for SVG tag of the icon, like in the examples below.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-n30">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M22.819 11.51c-1.16-1.632-3.001-3.002-5.014-3.826-1.548 1.815-2.639 5.324-.159 8.423 2.178-1.091 4.091-2.908 5.173-4.597zm-6.105 5.001c-2.565-3.434-1.455-7.185.093-9.183-.896-.275-1.356-.341-1.779-.402-1.868-2.159-4.438-1.964-5.047-1.944.157.295.445.754.633 2.241-2.881.806-3.873 1.766-5.98 3.573-.393-.43-1.378-1.54-3.024-1.968.627 1.763.688 3.763.079 5.37 1.727-.379 2.817-1.84 2.974-2.014 2.201 2.282 3.161 3.4 5.952 4.415.051.995-.503 2.126-.634 2.374.685.022 3.213.204 5.072-1.975.513-.1.931-.203 1.661-.487zm7.286-5.028c-2.387 4.033-6.093 5.927-8.417 6.428-1.233 1.371-3.017 2.066-5.306 2.066-.715 0-1.234-.06-2.101-.141.632-.594 1.172-1.573 1.362-2.573-2.249-.915-3.692-2.408-4.863-3.629-2.031 1.953-4.087 1.655-4.675 1.655.361-.627 2.199-3.713 0-7.592.552.009 2.661-.159 4.702 1.726 1.207-1.04 2.571-2.204 4.798-2.917-.229-1.005-.631-1.692-1.325-2.387.72-.067 1.433-.119 2.13-.119 1.948 0 3.768.404 5.228 1.99 4.479.719 7.218 3.587 8.467 5.493zm-3.032-.505c0 .552-.448 1-1 1-.551 0-1-.448-1-1 0-.551.449-1 1-1 .552 0 1 .449 1 1z" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#1</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-10.772 0h-2.457c-.448-1.286-.489-1.599-.931-1.781-.468-.193-.77.044-1.922.598l-1.736-1.735c.587-1.217.786-1.473.6-1.922-.188-.451-.528-.495-1.782-.932v-2.457c1.285-.448 1.598-.488 1.782-.932.192-.465-.04-.758-.6-1.921l1.736-1.736c1.163.561 1.467.792 1.921.6.46-.191.505-.556.932-1.782h2.457c.449 1.287.49 1.599.932 1.781.466.194.776-.045 1.922-.599l1.735 1.736c-.581 1.208-.784 1.473-.599 1.921.191.46.556.505 1.782.932v2.457c-1.27.442-1.597.487-1.782.933-.187.452.022.722.599 1.921l-1.735 1.735c-1.096-.526-1.452-.798-1.916-.601-.465.193-.508.553-.938 1.784zm-.71-13h-1.036c-.243.722-.462 1.375-1.26 1.705-.744.31-1.383.032-2.098-.314l-.733.733c.363.74.644 1.303.315 2.098-.343.827-.969.991-1.706 1.259v1.046c.723.244 1.375.453 1.706 1.25.332.802.033 1.378-.315 2.1l.733.731c.711-.348 1.355-.622 2.098-.314.757.314 1.011.909 1.259 1.706h1.029c.244-.723.471-1.375 1.272-1.708.773-.32 1.4-.01 2.094.316l.731-.732c-.336-.724-.656-1.268-.313-2.098.344-.828.963-.985 1.706-1.26v-1.036c-.724-.243-1.375-.463-1.706-1.26-.33-.798-.044-1.367.315-2.098l-.732-.733c-.715.344-1.345.627-2.099.315-.789-.327-.994-.922-1.26-1.706zm-.539 8.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.979-1.5h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#2</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M16.993 14.001h2v2h1v-2h2v-1h-2v-2h-1v2h-2v1zm4.585 8.604c-.637-1.059-1.569-2.625-2.154-3.607-.517-.007-1.016-.085-1.49-.225l-.172 4.21h-11.462l-.283-6.222s-2.7 4.175-3.625 5.848c-.421.769-1.618.265-1.367-.548.608-1.952 1.948-6.316 2.669-8.859.2-.704.851-1.195 1.584-1.195h9.991c-.167.47-.274.968-.274 1.494 0 2.483 2.018 4.501 4.502 4.501.763 0 1.47-.209 2.1-.544.595 2.018 1.201 4.064 1.352 4.596.228.828-.89 1.348-1.371.551m-2.081-12.604c1.933 0 3.502 1.567 3.502 3.5 0 1.932-1.569 3.5-3.502 3.5-1.933 0-3.502-1.568-3.502-3.5 0-1.933 1.569-3.5 3.502-3.5m3.219 7.714l-.253-.853c.935-.825 1.537-2.018 1.537-3.361 0-2.484-2.018-4.5-4.503-4.5-1.562 0-2.936.797-3.744 2.005h-10.475c-1.179 0-2.225.792-2.546 1.924-.719 2.533-2.055 6.886-2.662 8.834-.047.151-.07.31-.07.485 0 .43.307 1.739 1.727 1.739.623 0 1.234-.338 1.542-.896.504-.914 1.29-2.189 1.891-3.144l.183 4.035h13.379l.162-3.937c.569.956 1.306 2.191 1.836 3.072.326.544.911.882 1.524.882.634 0 1.735-.497 1.735-1.741 0-.154-.021-.313-.065-.474-.291-1.022-.735-2.516-1.198-4.07m-10.701-17.715c-2.774 0-5.027 2.251-5.027 5.024s2.253 5.025 5.027 5.025c2.775 0 5.028-2.252 5.028-5.025 0-2.773-2.253-5.024-5.028-5.024m0 1c2.22 0 4.027 1.805 4.027 4.024 0 2.219-1.807 4.025-4.027 4.025s-4.026-1.806-4.026-4.025c0-2.219 1.806-4.024 4.026-4.024" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#3</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M16.835 0c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m-9.669-1c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m9.648 14.828c.694 0 1.231.524 1.277 1.245.05.741.172 2.201.28 3.489l.156 1.896c.02.251.164.542.508.542.404 0 .455-.425.46-.556l.472-11.447c.022-.512.701-.655.937-.222l1.645 2.977c.118.215.451.125.451-.117l-1.6-5.675c-.093-.335-.402-.567-.749-.567h-17.303c-.346 0-.655.232-.749.566l-1.59 5.61c-.022.402.364.326.442.183l1.645-2.977c.244-.439.916-.283.937.222l.471 11.448c.011.256.146.555.49.555.329 0 .497-.271.518-.541l.16-1.94c.107-1.277.227-2.712.277-3.448.047-.719.584-1.243 1.277-1.243.584 0 1.218.465 1.27 1.244.049.734.169 2.169.276 3.446l.16 1.94c.019.251.161.542.499.542.382 0 .439-.389.446-.556.122-2.956.629-12.29.635-12.384.014-.266.233-.473.499-.473h1.963c.266 0 .485.208.499.474.006.094.494 9.427.617 12.384.012.276.174.555.509.555.344 0 .49-.291.508-.541l.165-1.982c.105-1.266.223-2.679.272-3.406.052-.778.687-1.243 1.27-1.243m2.222 8.172c-.807 0-1.44-.616-1.506-1.465-.035-.455-.092-1.143-.155-1.889-.108-1.294-.231-2.761-.282-3.507-.015-.231-.154-.311-.279-.311-.079 0-.256.078-.272.31-.049.731-.168 2.15-.274 3.422-.066.779-.126 1.502-.163 1.976-.065.848-.698 1.464-1.504 1.464-.826 0-1.474-.65-1.511-1.513-.106-2.567-.489-9.954-.591-11.9h-1.015c-.105 1.944-.502 9.333-.608 11.899-.038.892-.631 1.514-1.444 1.514-.803 0-1.432-.616-1.497-1.465l-.16-1.934c-.107-1.283-.228-2.724-.277-3.462-.016-.233-.194-.311-.272-.311-.125 0-.265.081-.279.309-.05.74-.171 2.182-.278 3.465l-.16 1.934c-.065.848-.702 1.464-1.513 1.464-.827 0-1.453-.637-1.491-1.513l-.398-9.665-.78 1.413c-.323.584-1.088.781-1.573.538-.46-.195-.754-.637-.754-1.138 0-.115.016-.229.047-.339l1.59-5.609c.215-.762.919-1.294 1.711-1.294h17.303c.793 0 1.497.533 1.712 1.294l1.59 5.61c.031.109.047.223.047.338 0 .503-.297.947-.759 1.14l-.037.017c-.566.218-1.238-.028-1.53-.558l-.781-1.412-.398 9.664c-.038.892-.638 1.514-1.459 1.514" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#4</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M12.005 5.001c-.687 0-1.245.559-1.245 1.246 0 .687.558 1.245 1.245 1.245s1.245-.558 1.245-1.245-.558-1.246-1.245-1.246m0 3.492c-1.238 0-2.245-1.008-2.245-2.246 0-1.239 1.007-2.247 2.245-2.247 1.237 0 2.245 1.008 2.245 2.247 0 1.238-1.008 2.246-2.245 2.246m6.74-3.492c-.686 0-1.245.559-1.245 1.246 0 .687.559 1.245 1.245 1.245.687 0 1.245-.558 1.245-1.245s-.558-1.246-1.245-1.246m0 3.492c-1.238 0-2.245-1.008-2.245-2.246 0-1.239 1.007-2.247 2.245-2.247 1.239 0 2.245 1.008 2.245 2.247 0 1.238-1.006 2.246-2.245 2.246m-13.49-3.492c-.687 0-1.245.559-1.245 1.246 0 .687.558 1.245 1.245 1.245s1.245-.558 1.245-1.245-.558-1.246-1.245-1.246m0 3.492c-1.238 0-2.245-1.008-2.245-2.246 0-1.239 1.007-2.247 2.245-2.247 1.238 0 2.245 1.008 2.245 2.247 0 1.238-1.007 2.246-2.245 2.246m13.665 6.161c.541 0 .979.403 1.018.935.032.438.29 3.26.29 3.26.023.262.425.251.436.002l.315-6.936c.021-.489.67-.662.925-.237l1.097 1.802-1.057-3.329c-.038-.123-.182-.211-.342-.211h-19.203c-.161 0-.305.088-.343.211l-1.06 3.4 1.1-1.873c.262-.43.905-.246.926.237l.314 6.936c.013.244.412.247.437-.002 0 0 .257-2.822.29-3.261.039-.531.476-.934 1.017-.934.465 0 .97.351 1.013.935.033.438.29 3.26.29 3.26.027.264.437.268.437.001.082-1.812.417-7.612.417-7.612.016-.261.231-.467.493-.47 1.007-.011.621-.011 1.624 0 .262.003.477.209.492.47 0 0 .282 5.803.418 7.613.022.292.427.266.436-.001 0 0 .258-2.823.291-3.262.042-.583.548-.934 1.012-.934.47 0 .977.351 1.018.937.033.451.291 3.258.291 3.258.033.255.421.263.436.001.082-1.812.417-7.612.417-7.612.015-.261.232-.467.494-.47.997-.011.615-.011 1.61 0 .262.003.479.209.494.47 0 0 .335 5.8.417 7.613.014.241.414.232.436 0 0 0 .258-2.809.291-3.263.041-.583.547-.934 1.013-.934m1.526 5.346c-.64 0-1.163-.459-1.214-1.065 0 0-.259-2.83-.292-3.273-.069.458-.328 3.273-.328 3.273-.049.606-.571 1.065-1.212 1.065-.655 0-1.189-.485-1.218-1.103-.069-1.498-.31-5.722-.391-7.133h-.654c-.081 1.411-.322 5.635-.391 7.132-.029.619-.563 1.104-1.217 1.104-.641 0-1.163-.459-1.213-1.067 0 0-.259-2.813-.293-3.271-.068.443-.327 3.273-.327 3.273-.05.606-.572 1.065-1.213 1.065-.654 0-1.189-.485-1.218-1.103-.069-1.498-.309-5.721-.39-7.133h-.666c-.081 1.412-.322 5.635-.39 7.132-.029.619-.564 1.104-1.217 1.104-.64 0-1.163-.459-1.215-1.065 0 0-.258-2.83-.291-3.273-.069.443-.327 3.273-.327 3.273-.052.606-.574 1.065-1.214 1.065-.654 0-1.189-.485-1.218-1.103l-.24-5.298-.244.401c-.234.389-.759.569-1.202.413-.389-.136-.651-.494-.651-.891l.041-.268 1.061-3.401c.17-.546.692-.914 1.297-.914h19.203c.595 0 1.129.375 1.298.914l1.059 3.399.041.27c0 .398-.263.755-.652.891-.415.149-.966-.023-1.201-.414l-.245-.401-.24 5.298c-.027.619-.561 1.104-1.216 1.104" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#5</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M22 9.74l-2 1.02v7.24c-1.007 2.041-5.606 3-8.5 3-3.175 0-7.389-.994-8.5-3v-7.796l-3-1.896 12-5.308 11 6.231v8.769l1 3h-3l1-3v-8.26zm-18 1.095v6.873c.958 1.28 4.217 2.292 7.5 2.292 2.894 0 6.589-.959 7.5-2.269v-6.462l-7.923 4.039-7.077-4.473zm-1.881-2.371l9.011 5.694 9.759-4.974-8.944-5.066-9.826 4.346z" />
                          </svg>
                          {/* End Icon Code */}
                          <div className="icons-example-box-number">#6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
