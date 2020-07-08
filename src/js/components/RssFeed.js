import React, { useState } from 'react';
import Pagination from './Pagination';
import Spinners from './Spinners';
import RssList from './RssList';

const RssFeed = ({ feed, loading, errorMsg }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  if (loading) {
    return <Spinners />;
  }

  if (feed.items) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = feed.items.slice(indexOfFirstItem, indexOfLastItem);

    const changePage = pageNumber => setCurrentPage(pageNumber);

    return (
      <div className="container">
        <h3>
          Blog Posts | <small className="text-muted">{feed.title}</small>
        </h3>
        <hr />
        <RssList currentItems={currentItems} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={feed.items.length}
          changePage={changePage}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <span style={{ color: 'red' }}>{errorMsg}</span>
      </div>
    );
  }
};

export default RssFeed;
