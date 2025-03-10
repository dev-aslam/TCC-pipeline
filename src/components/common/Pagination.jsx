import React from "react";

export default function Pagination({
  className = "pagination justify-content-center",
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Function to handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={className}>
      {/* Previous Page Button */}
      <a
        onClick={() => handlePageChange(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}>
        <i className="mi-chevron-left" />
        <span className="visually-hidden">Previous page</span>
      </a>

      {/* Page Numbers */}
      {pages.map((page) => (
        <React.Fragment key={page}>
          {page === 1 ||
          page === totalPages ||
          (page >= currentPage - 2 && page <= currentPage + 2) ? (
            <a
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}>
              {page}
            </a>
          ) : (
            page === currentPage + 3 && <span className="no-active">...</span>
          )}
        </React.Fragment>
      ))}

      {/* Next Page Button */}
      <a
        onClick={() => handlePageChange(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}>
        <i className="mi-chevron-right" />
        <span className="visually-hidden">Next page</span>
      </a>
    </div>
  );
}
