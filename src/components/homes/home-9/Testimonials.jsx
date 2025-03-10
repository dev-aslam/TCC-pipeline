import { brands } from "@/data/brands";
import { numberItems4 } from "@/data/facts";
import { testimonials5 } from "@/data/testimonials";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="d-flex align-items-center">
          <div className="w-100 position-relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={3} // Adjust number of visible slides
              breakpoints={{
                1199: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              autoplay={{ delay: 3000 }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="testimonials-swiper">
              {testimonials5.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonials-4-item">
                    <div className="testimonials-4-icon">
                      <i className="icon-quotation-mark" />
                    </div>
                    <blockquote className="testimonials-4-text">
                      <p className="mb-0">{testimonial.text}</p>
                      <footer className="testimonials-4-author mt-30 clearfix">
                        <div className="testimonials-4-author-img float-start">
                          <img
                            width={44}
                            height={44}
                            src={testimonial.imgSrc}
                            alt={testimonial.altText}
                          />
                        </div>
                        <div className="overflow-hidden">
                          {testimonial.author}
                          <div className="small">{testimonial.position}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}

              {/* Add pagination and navigation elements */}
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
