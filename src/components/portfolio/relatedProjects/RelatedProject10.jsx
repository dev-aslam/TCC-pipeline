import { portfolios13 } from "@/data/portfolio";

import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProject10() {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      <Gallery>
        <ul className="works-grid work-grid-4 work-grid-gut hover-white work-grid-hover-alt">
          {portfolios13.slice(0, 4).map((item, index) => (
            <li key={index} className={"work-item   "}>
              {item.type == "lightbox" ? (
                <a className={"work-ext-link"}>
                  <Item
                    original={item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={719}
                    height={461}
                  >
                    {({ ref, open }) => (
                      <>
                        <div onClick={open} className="work-img">
                          <div className="work-img-bg " />
                          <img
                            width={719}
                            height={461}
                            ref={ref}
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            data-wow-delay={item.delay}
                          />
                        </div>
                        <div className="work-intro text-start">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.descr}</div>
                        </div>
                      </>
                    )}
                  </Item>
                </a>
              ) : (
                <Link
                  to={`/main-portfolio-single-1/${item.id}`}
                  className={"work-ext-link"}
                >
                  <div className="work-img">
                    <div className="work-img-bg " />
                    <img
                      width={650}
                      height={773}
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      data-wow-delay={item.delay}
                    />
                  </div>
                  <div className="work-intro text-start">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.description}</div>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>{" "}
      </Gallery>
    </div>
  );
}
