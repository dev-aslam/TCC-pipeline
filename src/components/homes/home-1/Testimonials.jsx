// import { testimonials } from "@/data/testimonials";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { testimonials5 } from "@/data/testimonials";

// export default function Testimonials() {
//   return (
//     <div className="container position-relative">
//       <div className="row justify-content-center">
//         <div className="col-md-10 text-center">
//           <h2 className="section-title mb-70 mb-sm-40">
//             Client <span className="mark-decoration-1">Testimonials</span>
//           </h2>
//         </div>
//         <div className="d-flex align-items-center wow fadeInUp">
//           <div className="w-100 position-relative relative">
//             <Swiper
//               spaceBetween={0}
//               slidesPerView={3}
//               breakpoints={{
//                 1199: {
//                   slidesPerView: 3,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                 },
//                 0: {
//                   slidesPerView: 1,
//                 },
//               }}
//               modules={[Navigation, Pagination]}
//               pagination={{
//                 el: ".sp1",
//                 clickable: true,
//                 bulletActiveClass: "active",
//                 renderBullet: (index, className) => {
//                   return `<div class=" owl-page ${className}">
//                    <span></span>
//                   </div>`;
//                 },
//               }}
//               navigation={{
//                 prevEl: ".snbp1",
//                 nextEl: ".snbn1",
//               }}
//               loop={true}
//               watchSlidesProgress
//               resizeObserver
//               className="team-carousel owl-theme overflow-hidden position-static"
//               style={{
//                 opacity: 1,
//                 display: "block",
//                 padding: "10px",
//               }}>
//               {testimonials5.map((testimonial, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="testimonials-4-item mx-3 shadow-sm">
//                     <div className="testimonials-4-icon">
//                       <i className="icon-quotation-mark" />
//                     </div>
//                     <blockquote className="testimonials-4-text">
//                       <p className="mb-0 text-black">{testimonial.text}</p>
//                       <footer className="testimonials-4-author mt-30 clearfix">
//                         <div className="testimonials-4-author-img float-start">
//                           <img
//                             width={44}
//                             height={44}
//                             src={testimonial.imgSrc}
//                             alt={testimonial.altText}
//                           />
//                         </div>
//                         <div className="overflow-hidden">
//                           {testimonial.author}
//                           <div className="small">{testimonial.position}</div>
//                         </div>
//                       </footer>
//                     </blockquote>
//                   </div>
//                 </SwiperSlide>
//               ))}
//               <div className="owl-controls clickable">
//                 <div className="owl-buttons">
//                   {/* <div className="owl-prev snbp3" role="button" tabIndex="0">
//                     <span className="visually-hidden">Previous Slide</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       //   xmlns:xlink="http://www.w3.org/1999/xlink"
//                       width="27px"
//                       height="57px"
//                       viewBox="0 0 27 57"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       focusable="false">
//                       <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
//                     </svg>
//                   </div>
//                   <div className="owl-next snbn3" role="button" tabIndex="0">
//                     <span className="visually-hidden">Next Slide</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       //   xmlns:xlink="http://www.w3.org/1999/xlink"
//                       width="27px"
//                       height="57px"
//                       viewBox="0 0 27 57"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       focusable="false">
//                       <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
//                     </svg>
//                   </div> */}
//                   <div
//                     className="owl-prev snbp1 owl-prev-testimonial-1"
//                     role="button"
//                     tabIndex="0">
//                     <span className="visually-hidden">Previous Slide</span>
//                     <i className="mi-arrow-left" aria-hidden="true"></i>
//                   </div>
//                   <div className="owl-next snbn1" role="button" tabIndex="0">
//                     <span className="visually-hidden">Next Slide</span>
//                     <i className="mi-arrow-right" aria-hidden="true"></i>
//                   </div>
//                 </div>
//               </div>
//             </Swiper>
//             {/* <div className="mt-70">
//               <div className="owl-pagination sp1"></div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { testimonials } from "@/data/testimonials";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="container position-relative">
      <div className="pt-80 pb-80 pt-sm-70 pb-sm-70 px-4 bg-gray-light-1">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <div className="row">
              <div className="col-md-10 offset-md-1 text-center">
                <h2 className="section-title mb-70 mb-sm-40">
                  Client{" "}
                  <span className="mark-decoration-1"> Testimonials</span>
                </h2>
              </div>
            </div>
            <div className="overflow-hidden">
              <Swiper
                rewind
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp2",
                  nextEl: ".snbn2",
                }}
                autoplay={{
                  delay: 5000,
                }}
                watchSlidesProgress
                resizeObserver
                loop
                style={{
                  opacity: 1,
                  display: "block",
                }}
                className="testimonials-slider-1 owl-carousel owl-theme pb-xs-80 overflow-visible position-static">
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="owl-item" key={index}>
                    <div>
                      <blockquote className="mb-0">
                        <div className="blockquote-icon" aria-hidden="true">
                          ”
                        </div>
                        <p>{testimonial.quote}</p>
                        <div className="section-line mt-40" />
                        <footer className="ts1-author mt-20 clearfix">
                          {/* <div className="ts1-author-img float-start">
                            <img
                              className="rounded"
                              width={44}
                              height={44}
                              src={testimonial.image}
                              alt="Image description is here"
                            />
                          </div> */}
                          <div className="overflow-hidden">
                            {testimonial.author}
                            <div className="small">
                              {testimonial.role},{" "}
                              <span className="text-black">
                                <strong>{testimonial.company}</strong>
                              </span>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="owl-controls clickable">
                  {/* <div className="owl-pagination">
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                    <div className="owl-page active">
                      <span className=""></span>
                    </div>
                  </div> */}
                  <div className="owl-buttons">
                    <div className="owl-prev snbp2" role="button" tabIndex="0">
                      <span className="visually-hidden">Previous Slide</span>
                      <i className="mi-arrow-left" aria-hidden="true"></i>
                    </div>
                    <div className="owl-next snbn2" role="button" tabIndex="0">
                      <span className="visually-hidden">Next Slide</span>
                      <i className="mi-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                {/* End Slide Item */}
              </Swiper>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
