import React from 'react';

const RssList = ({ currentItems }) => (
  <ul className="list-group mb-4">
    {currentItems.map((item, i) => (
      <li key={i} className="list-group-item">
        <h5>
          <a href={item.link} target="_blank">
            {item.title}
          </a>
        </h5>
        <p>
          <small>published on: {new Date(item.pubDate).toLocaleString()}</small>
        </p>
      </li>
    ))}
  </ul>
);

export default RssList;
