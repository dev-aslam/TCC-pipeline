import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal as ModalComponent } from "react-bootstrap";

const Modal = (props) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
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
    <ModalComponent {...props} centered size="lg" onHide={props.onHide}>
      <div className="p-5 position-relative">
        <h3 className="h3 mb-5 text-center">Contact us</h3>
        <form
          onSubmit={handleSubmit}
          className="form contact-form"
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
            <div className="col-lg-5">
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
            <div className="col-lg-7">
              {/* Inform Tip */}
              {/* Optional informational tip can be added here */}
            </div>
          </div>
          <div
            id="result"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          />
        </form>
        <div
          className="position-absolute"
          role="button"
          style={{ top: "10px", right: "25px", fontSize: "35px" }}
          onClick={props.onHide}>
          <i className="mi-close"></i>
        </div>
      </div>
      <ToastContainer />
    </ModalComponent>
  );
};

export default Modal;
