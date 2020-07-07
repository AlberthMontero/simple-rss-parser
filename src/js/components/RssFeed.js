import React from 'react';

const RssFeed = ({ feed }) => {
  if (feed.started && feed.isLoaded) {
    return (
      <div className="container">
        <h3>
          Blog Posts | <small className="text-muted">{feed.title}</small>
        </h3>
        <hr />
        {feed.items.map((item, i) => (
          <div key={i}>
            <h5>
              <a href={item.link} target="_blank">
                {item.title}
              </a>
            </h5>
            <p>
              <small>
                published on: {new Date(item.pubDate).toLocaleString()}
              </small>
            </p>
          </div>
        ))}
      </div>
    );
  } else if (feed.started && !feed.isLoaded) {
    return (
      <div className="container">
        <div
          className="spinner-grow spinner-grow-sm text-success"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm text-warning"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <span className="lead"> Loading... </span>
      </div>
    );
  } else {
    return <div className="container">nothing to show yet!! &#128516; </div>;
  }
};

export default RssFeed;
