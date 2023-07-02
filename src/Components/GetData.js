import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setCurrentPage, setTotalPage } from "./Store/dataSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { data, loading, error, currentPage, totalPage } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(startPage + 9, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`mr-2 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 9;
    return data.slice(startIndex, endIndex + 1).map((item) => (
      <li key={item.id} className="py-2">
        {item.title}
      </li>
    ));
  };

  return (
    <div className="my-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {renderData()}
          </ul>
          <div className="flex justify-center mt-4">{renderPagination()}</div>
        </>
      )}
    </div>
  );
};

export default Pagination;
