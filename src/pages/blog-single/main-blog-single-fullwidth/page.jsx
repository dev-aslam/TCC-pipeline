import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { useParams } from "react-router-dom";
import { menuItems } from "@/data/menu";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import CallToAction from "@/components/common/CallToAction";
import MarkdownView from "react-showdown";
import MetaComponent from "@/components/common/MetaComponent";
import { init_wow } from "@/utlis/initWowjs";
import { Spinner } from "react-bootstrap";
import { getDoc, doc } from "firebase/firestore";
import { fireDB } from "@/firebase/firebase-config";

const metadata = {
  title: "Terminal Customs Consulting",
  description: "Terminal Customs Consulting",
};

export default function MainBlogSinglePageFullWidth() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [timeAgo, setTimeAgo] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogContent = async () => {
      setLoading(true);
      try {
        const blogRef = doc(fireDB, "blogs", id);
        const blogSnapshot = await getDoc(blogRef);

        if (blogSnapshot.exists()) {
          const data = blogSnapshot.data();
          setBlog({
            id: blogSnapshot.id,
            title: data.title,
            imageUrl: data.imageUrl,
            introduction: data.introduction,
            content: data.content,
            createdOn: data.createdOn ? new Date(data.createdOn) : null,
          });

          const inputDate = new Date(data.createdOn);
          const formattedDate = format(
            inputDate,
            "eeee MMMM d, yyyy HH:mm:ss",
            { locale: enUS }
          );
          const timeAgo = formatDistanceToNow(inputDate, {
            addSuffix: true,
            locale: enUS,
          });
          setFormattedDate(formattedDate);
          setTimeAgo(timeAgo);
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
        navigate("/404");
      } finally {
        setLoading(false);
        init_wow();
      }
    };

    fetchBlogContent();
  }, [id, navigate]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1-img.jpg)",
                }}>
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s">
                          Blogs & Articles
                        </h2>
                        <h1 className="h2 mb-20">
                          {loading ? null : (
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars">
                              <AnimatedText text={blog?.title} />
                            </span>
                          )}
                        </h1>
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s">
                          <div className="d-inline-block me-3">
                            <i className="mi-clock size-16"></i>
                            <span className="visually-hidden">Date:</span>{" "}
                            {formattedDate}
                            <div>{timeAgo}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white"></div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    {loading ? (
                      <div className="d-flex justify-content-center py-2">
                        <Spinner animation="border" />
                      </div>
                    ) : (
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          <div className="blog-media mb-40 mb-xs-30 d-flex justify-content-center">
                            <img
                              src={
                                blog?.imageUrl ||
                                "/assets/images/blog/blog-default.jpg"
                              }
                              alt={blog?.title}
                              style={{ maxHeight: "600px", width: "auto" }}
                            />
                          </div>
                          <p className="text-gray">{blog?.introduction}</p>
                          <MarkdownView
                            markup={blog?.content}
                            className="markdown-content text-gray"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <CallToAction />
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
