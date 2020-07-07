import React from 'react';

const Search = ({ query, children, handleQuery, handleSubmit }) => (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
        {children}
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleQuery}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Search;
