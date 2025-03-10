import { services4 } from "@/data/services";

export default function Service() {
  return (
    <div className="mb-100 mb-md-40">
      {/* Services Item */}
      {services4.map((service, index) => (
        <h3
          key={index}
          className={`services-4-item ${service.align} parallax-mousemove-scene wow fadeInUp`}
        >
          <span className="services-4-title hs-title-5 font-alt overflow-hidden">
            {service.title}
          </span>
          <span className="services-4-image parallax-mousemove-follow">
            <img
              src={service.imageSrc}
              loading="lazy"
              width={550}
              height={673}
              alt={service.alt}
            />
          </span>
        </h3>
      ))}
      {/* End Services Item */}
    </div>
  );
}
