import addScrollspy from "@/utlis/addScrollSpy";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function OnePageNav({ links, animateY = false }) {
  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);
  const { pathname } = useLocation();

  return (
    <>
      {links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li key={index}>
            <Link
              className={
                pathname.split("/")[1] == link.href.split("/")[1]
                  ? "active"
                  : ""
              }
              to={link.href}
            >
              {animateY ? (
                <span class="btn-animate-y">
                  <span class="btn-animate-y-1">{link.text}</span>
                  <span class="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </Link>
          </li>
        ))}
      {!links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li className="scrollspy-link" key={index}>
            <a onClick={() => closeMobileMenu()} className="" href={link.href}>
              {animateY ? (
                <span class="btn-animate-y">
                  <span class="btn-animate-y-1">{link.text}</span>
                  <span class="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </a>
          </li>
        ))}
    </>
  );
}
