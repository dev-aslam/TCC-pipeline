import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact2() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact Person is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain only numbers";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email address is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent successfully!");
          setFormData({
            companyName: "",
            contactPerson: "",
            phone: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred. Please try again later.");
          setLoading(false);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container position-relative">
      <div
        className="row wow fadeInUp align-items-center"
        data-wow-delay="0.5s">
        <div className="col-lg-6 mb-md-50">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form pe-lg-5"
            id="contact_form">
            <div className="row">
              <div className="col-lg-6">
                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="input-lg round form-control"
                    placeholder="Enter your Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && (
                    <div className="text-danger">{errors.companyName}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                {/* Contact Person */}
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    id="contactPerson"
                    className="input-lg round form-control"
                    placeholder="Enter Contact Person"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                  {errors.contactPerson && (
                    <div className="text-danger">{errors.contactPerson}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="input-lg round form-control"
                    placeholder="Enter your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <div className="text-danger">{errors.message}</div>
              )}
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                {/* Send Button */}
                <div className="col-lg-12 d-flex justify-content-center">
                  {/* Send Button */}
                  <div className="pt-20">
                    <button
                      type="submit"
                      className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      id="submit_btn"
                      aria-controls="result"
                      disabled={loading}>
                      {loading ? (
                        <>
                          Submitting
                          <span className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                          </span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {formStatus && (
              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true">
                {formStatus}
              </div>
            )}
          </form>
          {/* End Contact Form */}
        </div>
        <div className="col-lg-6">
          {/* Google Map */}
          <div className="row">
            <div>
              <div className="row mb-60 mb-sm-50">
                {/* Contact Item */}
                <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
                  <div
                    className="alt-features-item border-left mt-0 wow fadeScaleIn text-secondary"
                    data-wow-delay=".3s">
                    <div className="alt-features-icon">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                      </svg>
                      <div className="alt-features-icon-s">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="alt-features-title">Contact us at</h4>
                    <div className="alt-features-descr clearlinks">
                      <div>
                        <a href="mailto:elitethemes24@gmail.com">
                          info@tcc-uae.ae
                        </a>
                      </div>
                      <div>
                        +971 4 22 88 555 <br /> +971 56 622 4908{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-flex align-items-stretch">
                  <div
                    className="alt-features-item border-left mt-0 wow fadeScaleIn text-secondary"
                    data-wow-delay=".5s">
                    <div className="alt-features-icon">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                      </svg>
                    </div>
                    <h4 className="alt-features-title">Location</h4>
                    <div className="alt-features-descr">
                      Dubai, Deira, Business Point Building, Office M01
                    </div>
                  </div>
                </div>
                {/* End Contact Item */}
              </div>
            </div>
          </div>
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14433.133509377116!2d55.33306070394283!3d25.261051081900213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f5d34868a8283%3A0xf8b5c626894a29af!2sBusiness%20Point%20Building%20-%20Office%20M01%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.260239499999997!2d55.3360382!5e0!3m2!1sen!2sin!4v1725648458429!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
