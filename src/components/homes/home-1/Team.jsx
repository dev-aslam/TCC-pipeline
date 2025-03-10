import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section className="" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
            <h2 className="section-caption mb-xs-10 wow fadeInUp">
              Meet Our Leadership Team
            </h2>
            <h3 className="section-title mb-50 mb-sm-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                Expert Team Driving Innovation in Customs
              </span>
            </h3>
          </div>
        </div>
        <div
          className="row position-relative mt-n40 wow fadeInUp d-flex justify-content-center"
          data-wow-delay="0.1s">
          {/* Team item */}
          {teamMembers.map((elm, i) => (
            <div key={i} className="col-md-6 col-lg-4 mt-40">
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src={elm.image}
                    width={600}
                    height={800}
                    alt="Image Description"
                    loading="lazy"
                    className="img-fluid"
                  />
                  <div className="team-item-detail"></div>
                </div>
                <div className="team-item-descr">
                  <div className="team-item-name text-secondary">
                    {elm.name}
                  </div>
                  <div className="team-item-role">{elm.role}</div>
                  <div className="text-gray team-bio">{elm.bio}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
