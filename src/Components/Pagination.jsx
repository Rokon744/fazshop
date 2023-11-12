import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination flex justify-start items-center space-x-2">
      {pageNumbers.map((page) => (
        <li
          key={page}
          className={currentPage === page ? "page-item text-white active" : "page-item"}
        >
          <button className="page-link px-3 py-1 bg-[#f50963]" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;