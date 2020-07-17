import React, { useState } from 'react';
import RssParser from 'rss-parser';
import RssFeed from './RssFeed';
import Jumbotron from './Jumbotron';
import Search from './Search';

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
    const rssUrl = query.trim();
    const rssParser = new RssParser();

    setLoading(true);

    fetch(`${CORS_PROXY}${rssUrl}`)
      .then(response => response.text())
      .then(str => rssParser.parseString(str))
      .then(rssFeed => setFeed(rssFeed))
      .catch(err => {
        setFeed({});
        setErrorMsg('Error fetching URL provided to the RssFeed component!');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
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
