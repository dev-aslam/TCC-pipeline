import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow, format } from "date-fns";
import { Spinner } from "react-bootstrap";
import Pagination from "../common/Pagination";
import { useBlogs } from "@/contexts/BlogContext/BlogContext";
import { enUS } from "date-fns/locale";

const ITEMS_PER_PAGE = 9;

export default function Blogs1({
  itemClass = "post-prev col-md-6 col-lg-4 mt-30",
}) {
  const { blogs, loading } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    console.log(blogs);
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  if (loading)
    return (
      <section className="page-section">
        <div className="d-flex justify-content-center py-2">
          <Spinner animation="border" />
        </div>
      </section>
    );

  return (
    <div className="container relative">
      {/* Search Form */}
      <div className="row justify-content-end">
        <div className="mb-60 mb-sm-40 col-sm-12 col-md-8 col-lg-6 col-xl-4">
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <div className="search-wrap">
              <button
                className="search-button animate"
                type="submit"
                title="Start Search">
                <i className="mi-search size-18" />
                <span className="visually-hidden">Start search</span>
              </button>
              <input
                type="text"
                className="form-control input-lg search-field round"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
            </div>
          </form>
        </div>
      </div>
      {/* End Search Form */}
      {/* Blog Posts Grid */}
      <div className="row mt-n30 mb-60 mb-sm-40">
        {currentBlogs.map((elm, i) => (
          <div key={i} className={itemClass}>
            <div className="post-prev-container" style={{ width: "100%" }}>
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
        ))}
      </div>
      {/* End Blog Posts Grid */}
      {/* Pagination */}
      <Pagination
        className={"pagination justify-content-center mt-30 mt-xs-10"}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {/* End Pagination */}
    </div>
  );
}
