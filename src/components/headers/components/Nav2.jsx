/* eslint-disable react/prop-types */
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
export default function Nav2({ links = [] }) {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);

  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] == i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent2 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[1] == i) {
      tempMenuOpen[1] = -1;
    } else {
      tempMenuOpen[1] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links?.slice(0, 4)?.map((item, index) => (
        <li className={menuOpen[0] == index ? "js-opened" : ""} key={index}>
          <Link
            to={item?.href}
            onClick={() => toggleParent1(index)}
            className={`${item.subMenu.length > 0 && "mn-has-sub"} ${
              item.href === pathname ? "active" : ""
            } ${
              item.subMenu.some((e1) =>
                e1?.links?.some(
                  (e2) => e2?.href?.split("/")[1] == pathname?.split("/")[1]
                )
              )
                ? "active"
                : ""
            }`}>
            {item.title}{" "}
            {item.subMenu.length > 0 && <i className="mi-chevron-down" />}
          </Link>
          <ul
            className={`mn-sub mn-has-multi ${
              menuOpen[0] == index ? "mobile-sub-active" : ""
            } `}>
            {item?.subMenu?.map((subItem = {}, subIndex) => (
              <li className="mn-sub-multi" key={subIndex}>
                {subItem?.title && (
                  <span className="mn-group-title">{subItem.title}</span>
                )}
                <ul>
                  {subItem.links.map((link, linkIndex) => {
                    const currentPath = pathname.split("/")[1];
                    const linkBasePath = link.href.split("/")[1];

                    // Default to an empty string for inactive links
                    let linkClassName = "";

                    // Check if the base paths match
                    if (currentPath === linkBasePath) {
                      // Get the remaining path segments
                      const currentFullPath = pathname
                        .split("/")
                        .slice(1)
                        .join("/");
                      const linkFullPath = link.href
                        .split("/")
                        .slice(1)
                        .join("/");

                      // If there's a dynamic segment (like a parameter ":id"), match the base part
                      if (link.href.includes(":")) {
                        if (currentFullPath.startsWith(linkFullPath)) {
                          linkClassName = "active";
                        }
                      } else if (currentFullPath === linkFullPath) {
                        // Exact match for static links
                        linkClassName = "active";
                      }
                    }

                    return (
                      <li key={linkIndex}>
                        <Link className={linkClassName} to={link.href}>
                          {link.icon && <i className={link.icon} />} {link.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
      {/* End Item With Sub */}
      {/* Item With Sub */}
      {/* {links.slice(3, 5).map((item, index) => (
        <li className={menuOpen[0] == index + 3 ? "js-opened" : ""} key={index}>
          <a
            onClick={() => toggleParent1(index + 3)}
            href="#"
            className={`mn-has-sub ${
              item.subItems.some((e1) =>
                e1.links.some(
                  (e2) => e2.href.split("/")[1] == pathname.split("/")[1]
                )
              )
                ? "active"
                : pathname.split("/")[1]?.includes("main-portfolio-lazyload")
                ? "active"
                : ""
            }`}>
            {item.title} <i className="mi-chevron-down" />
          </a>
          {item.subItems && (
            <ul
              className={`mn-sub  ${
                menuOpen[0] == index + 3 ? "mobile-sub-active" : ""
              } `}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  className={menuOpen[1] == subIndex ? "js-opened" : ""}
                  key={subIndex}>
                  <a
                    href="#"
                    onClick={() => toggleParent2(subIndex)}
                    className={`mn-has-sub ${
                      subItem.links.some(
                        (e2) => e2.href.split("/")[1] == pathname.split("/")[1]
                      )
                        ? "active"
                        : ""
                    }`}>
                    {subItem.title} <i className="mi-chevron-right right" />
                  </a>
                  {subItem.links && (
                    <ul
                      className={`mn-sub  ${
                        menuOpen[1] == subIndex ? "mobile-sub-active" : ""
                      } `}>
                      {subItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            className={
                              pathname.split("/")[1] == link.href.split("/")[1]
                                ? "active"
                                : ""
                            }
                            to={link.href}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {!index && (
                <>
                  {item.subItems[0].links[0].href.includes("-dark") ? (
                    <li>
                      <Link
                        className={
                          pathname
                            .split("/")[1]
                            .includes("main-portfolio-lazyload")
                            ? "active"
                            : ""
                        }
                        to="/main-portfolio-lazyload-dark">
                        Lazyload
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        className={
                          pathname
                            .split("/")[1]
                            .includes("main-portfolio-lazyload")
                            ? "active"
                            : ""
                        }
                        to="/main-portfolio-lazyload">
                        Lazyload
                      </Link>
                    </li>
                  )}
                </>
              )}
            </ul>
          )}
        </li>
      ))} */}
    </>
  );
}
