import React, { useState } from 'react';
import RssFeed from './js/components/RssFeed';
import Jumbotron from './js/components/Jumbotron';
import Search from './js/components/Search';
import RSSParser from 'rss-parser';

const App = props => {
  const [query, setQuery] = useState('');
  const [feed, setFeed] = useState({
    isLoaded: false,
    started: false,
    title: '',
    items: []
  });

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = ({ target }) => {
    event.preventDefault();
    setFeed({ ...feed, started: true });

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const RSS_URL = query.trim();
    let rssParser = new RSSParser();

    fetch(`${CORS_PROXY}${RSS_URL}`)
      .then(response => response.text())
      .then(str => rssParser.parseString(str))
      .then(rssFeed => {
        setFeed({ ...rssFeed, isLoaded: true, started: true });
      })
      .catch(err => {
        setFeed({ ...feed, started: false });
        console.error(
          `Error fetching URL provided to the RssFeed component! ${err}`
        );
      });
  };

  return (
    <main role="main">
      <Jumbotron />
      <Search
        query={query}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
      >
        URL:
      </Search>
      <RssFeed feed={feed}></RssFeed>
    </main>
  );
};

export default App;
