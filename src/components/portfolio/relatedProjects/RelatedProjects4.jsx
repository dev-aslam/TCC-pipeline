import { portfolios7 } from "@/data/portfolio";

import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProjects4() {
  return (
    <>
      <div className="container relative">
        <div className="text-center mb-80 mb-sm-60 position-relative z-index-1">
          <h2 className="section-title">Related Projects</h2>
        </div>
      </div>
      <div className="full-wrapper ps-lg-3 pe-lg-3">
        <div className="ps-lg-4 pe-lg-4">
          {/* Works Grid */}
          <ul className="works-grid work-grid-3 work-grid-gut-lg work-grid-hover-alt work-grid-round masonry">
            {/* Work Item (External Page) */}
            <Gallery>
              {/* Work Item (Lightbox) */}
              {portfolios7.slice(1, 4).map((item, index) => (
                <li
                  key={index}
                  className={`work-item mix ${item.categories.join(" ")}`}
                >
                  {" "}
                  {item.description == "Lightbox" ? (
                    <>
                      <a className="work-lightbox-link mfp-image">
                        <Item
                          original={item.imgSrc}
                          thumbnail={item.imgSrc}
                          width={698}
                          height={508}
                        >
                          {({ ref, open }) => (
                            <div onClick={open} className="work-img">
                              <div className="work-img-bg " />
                              <img
                                ref={ref}
                                src={item.imgSrc}
                                width={698}
                                height={508}
                                alt="Work Description"
                                data-wow-delay={item.dataWowDelay}
                              />
                            </div>
                          )}
                        </Item>
                        <div className="work-intro">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </a>{" "}
                    </>
                  ) : (
                    <>
                      <Link
                        to={`/gradient-portfolio-single/${item.id}`}
                        className="work-ext-link"
                      >
                        <div className="work-img">
                          <div className="work-img-bg " />
                          <img
                            src={item.imgSrc}
                            width={698}
                            height={508}
                            alt="Work Description"
                            data-wow-delay={item.dataWowDelay}
                          />
                        </div>
                        <div className="work-intro">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </Link>
                    </>
                  )}
                </li>
              ))}{" "}
            </Gallery>
            {/* End Work Item */}
          </ul>
          {/* End Works Grid */}
        </div>
      </div>{" "}
    </>
  );
}
