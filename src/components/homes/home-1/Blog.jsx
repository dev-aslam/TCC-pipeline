import { Link } from "react-router-dom";
import React from "react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { Spinner } from "react-bootstrap";
import { useBlogs } from "@/contexts/BlogContext/BlogContext";

export default function Blog({
  itemClass = "post-prev col-md-6 col-lg-4 mt-30",
}) {
  const { blogs, loading } = useBlogs();
  const latestBlogs = blogs.slice(0, 3);
  return (
    <div className="row mt-n50 justify-content-center">
      {loading ? (
        <section className="page-section">
          <div className="d-flex justify-content-center py-2">
            <Spinner animation="border" />
          </div>
        </section>
      ) : (
        latestBlogs.map((elm, i) => (
          <div key={i} className={itemClass}>
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link
                  to={`/blog/${elm.id}`}
                  className="d-flex justify-content-center wow fadeIn">
                  <img
                    src={elm.imageUrl || "/assets/images/blog/blog-default.jpg"}
                    alt={elm.title}
                  />
                </Link>
              </div>
              <h4 className="post-prev-title blog-heading">
                <Link to={`/blog/${elm.id}`}>{elm.title}</Link>
              </h4>
              <div className="post-prev-text blog-intro">
                {elm.introduction}
              </div>
              <div className="post-prev-info clearfix">
                <div className="float-start">
                  {elm.createdOn ? format(elm.createdOn, "MMMM d, yyyy") : ""}
                </div>
                <div className="float-end">
                  {elm.createdOn
                    ? formatDistanceToNow(elm.createdOn, {
                        addSuffix: true,
                        locale: enUS,
                      })
                    : ""}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
