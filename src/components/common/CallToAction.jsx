import { Link } from "react-router-dom";
import NewsLetter from "../homes/home-1/NewsLetter";

const CallToAction = () => {
  return (
    <section
      className="page-section bg-dark-1 bg-dark-alpha-90 light-content"
      style={{
        backgroundImage:
          "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
      }}>
      <NewsLetter />
    </section>
  );
};
export default CallToAction;
