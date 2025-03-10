import { Link } from "react-router-dom";

export default function NewsLetter() {
  return (
    <div className="container position-relative wow fadeInUp">
      <div className="row">
        <div className="col-lg-12 col-xl-7 text-center text-lg-center text-xl-start mb-lg-20">
          <h2 className="section-title-small mb-20">
            Ready to Revolutionize Your Customs Compliance?
          </h2>
          <p className="text-secondary mb-0" style={{ fontWeight: 600 }}>
            Stay Audit-Ready&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Proactive Issue
            Resolution&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Penalty Protection
          </p>
        </div>
        <div className="col-lg-12 col-xl-5 pt-2 d-flex align-items-center justify-content-center ">
          <Link
            to={`/contact-us`}
            className="btn btn-mod btn-circle btn-large btn-hover-anim">
            <span>Start Your Compliance Journey</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
