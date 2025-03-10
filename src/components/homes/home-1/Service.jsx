import AnimatedText from "@/components/common/AnimatedText";
import { Link } from "react-router-dom";
import React from "react";

const tabData = [
  {
    id: "services-item-1",
    title: "Customs Compliance",
    description:
      "Our customs & trade compliance services ensure your operations meet all regulatory requirements, from obtaining import-code registrations to conducting regular compliance checks.",
    link: "services/customs-trade-compliance",
    imageSrc: "/assets/images/services/services-2.jpg",
  },
  {
    id: "services-item-2",
    title: "Customs Advisory",
    description:
      "We provide expert guidance on customs and trade regulations, including tariff classifications and customs valuation.",
    link: "services/customs-advisory",
    imageSrc: "/assets/images/services/services-1.jpg",
  },
  {
    id: "services-item-3",
    title: "Customs Audits",
    description:
      "We help you navigate audits and legal challenges effectively, offering comprehensive support during customs audits and managing penalty waivers and appeals.",
    link: "services/customs-audits-ligitataion-support",
    imageSrc: "/assets/images/services/services-3.jpg",
  },
  {
    id: "services-item-4",
    title: "Digital Compliance",
    description:
      "Leveraging technology to improve customs processes, implementing advanced customs management systems and utilizing data analytics for compliance risks.",
    link: "services/customs-digital-transformation",
    imageSrc: "/assets/images/services/services-4.jpg",
  },
  {
    id: "services-item-5",
    title: "Clearance & Freight",
    description:
      "Our customs clearance & freight management services ensure your goods move smoothly across borders. We handle all aspects of customs clearance, from documentation to coordination with customs authorities.",
    link: "services/customs-clearance-freight-management",
    imageSrc: "/assets/images/services/services-5.jpg",
  },
];

export default function Service() {
  return (
    <div className="container position-relative">
      {/* decorations */}
      <div
        className="decoration-21 d-none d-lg-block"
        data-rellax-y
        data-rellax-speed="0.7"
        data-rellax-percentage="0.5">
        <img
          width={148}
          height={148}
          className="svg-shape"
          src="/assets/images/decoration-3.svg"
          alt=""
        />
      </div>
      {/* decorations end */}
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Our Services</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Customs Advisory & Compliance Services" />
          </h3>
          <div className="row">
            <div className="col-lg-9">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s">
                Expert Guidance and Comprehensive Solutions for All Your Customs
                and Trade Compliance Needs
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist">
            {tabData.map((tab, index) => (
              <li key={tab.id} role="presentation" className="mx-16">
                <a
                  href={`#${tab.id}`}
                  className={index === 0 ? "active" : ""}
                  aria-controls={tab.id}
                  role="tab"
                  aria-selected={index === 0}
                  data-bs-toggle="tab">
                  {tab.title} <span className="number">{`0${index + 1}`}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}>
          <div className="tab-content services-content">
            {tabData.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-pane services-content-item fade ${
                  index === 0 ? "show active" : ""
                }`}
                id={tab.id}
                role="tabpanel">
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title">{tab.title}</h4>
                    <p className="text-gray mb-0">
                      {tab.description}
                      <br />
                      <Link to={tab.link}>Learn More</Link>
                    </p>
                  </div>
                </div>
                <img
                  width={945}
                  height={1016}
                  className="services-image"
                  src={tab.imageSrc}
                  alt={`Image for ${tab.title}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
