// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const imageData = [
//   {
//     dataSrc: "/assets/images/about/about-1.jpg",
//     alt: "Company Images",
//   },
//   {
//     dataSrc: "/assets/images/about/about-2.jpg",
//     alt: "Company Images",
//   },
//   {
//     dataSrc: "/assets/images/about/about-3.jpg",
//     alt: "Company Images",
//   },
//   {
//     dataSrc: "/assets/images/about/about-4.jpg",
//     alt: "Company Images",
//   },
// ];

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative">
            {/* Image */}
            <div className="work-full-media mt-0 imgContainer">
              <img
                className="lazyOwl"
                src="/assets/images/about/about-1.jpg"
                width={1920}
                height={1080}
                alt="Image Description"
                loading="lazy"
              />
              {/* <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  prevEl: ".snbp2",
                  nextEl: ".snbn2",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                watchSlidesProgress
                resizeObserver
                className="clearlist work-full-slider owl-carousel owl-theme overflow-hidden light-content"
                loop={true}
                style={{
                  opacity: 1,
                  display: "block",
                }}
                pagination={{
                  el: ".sp2",
                  clickable: true,
                  bulletActiveClass: "active",
                  renderBullet: (index, className) => {
                    return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
                  },
                }}>
                {imageData.map((elm, i) => (
                  <SwiperSlide key={i} className="imgContainer ">
                    <img
                      className="lazyOwl"
                      src={elm.dataSrc}
                      width={1920}
                      height={1080}
                      alt="Image Description"
                    />
                  </SwiperSlide>
                ))}
                <div className="owl-controls clickable">
                  <div className="owl-pagination sp2"></div>
                  <div className="owl-buttons">
                    <div className="owl-prev snbp2 " role="button" tabIndex="0">
                      <span className="visually-hidden">Previous Slide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27px"
                        height="57px"
                        viewBox="0 0 27 57"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false">
                        <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                      </svg>
                    </div>
                    <div className="owl-next snbn2" role="button" tabIndex="0">
                      <span className="visually-hidden">Next Slide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27px"
                        height="57px"
                        viewBox="0 0 27 57"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false">
                        <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Swiper> */}
            </div>
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1">
            <img
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h3 className="h3">Our Story</h3>
        <p className="text-gray">
          Founded in Dubai, our company has been a leader in customs consultancy
          for over a decade. We pride ourselves on our achievements, including
          managing a diverse client base and implementing innovative solutions
          in customs management.
        </p>
        <h3 className="h3">Mission Statement</h3>
        <p className="text-gray">
          Build world-class Customs & Global Trade Advisory services that set
          the standard for excellence in compliance advisory and client support,
          enabling our clients to achieve seamless and efficient international
          trade operations while maintaining the highest standards of integrity
          and professionalism.
        </p>
      </div>
    </div>
  );
}
