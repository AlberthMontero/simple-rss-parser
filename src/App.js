import React, { useState } from 'react';
import RssFeed from './js/components/RssFeed';
import Jumbotron from './js/components/Jumbotron';
import Search from './js/components/Search';
import RSSParser from 'rss-parser';

const App = () => {
  const [feed, setFeed] = useState({});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const RSS_URL = query.trim();
    let rssParser = new RSSParser();

    setLoading(true);

    fetch(`${CORS_PROXY}${RSS_URL}`)
      .then(response => response.text())
      .then(str => rssParser.parseString(str))
      .then(rssFeed => {
        setFeed(rssFeed);
        setLoading(false);
        setErrorMsg('');
      })
      .catch(err => {
        setFeed({});
        setLoading(false);
        setErrorMsg('Error fetching URL provided to the RssFeed component!');
        console.error(err);
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
      <hr />
      <RssFeed feed={feed} loading={loading} errorMsg={errorMsg} />
    </main>
  );
};

export default App;
