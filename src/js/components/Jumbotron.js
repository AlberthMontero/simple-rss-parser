import React from 'react';
import rss from '../../rss.svg';

const Jumbotron = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-4">
        <img src={rss} alt="rss image" height="68px" /> A Simple RSS Feed Parser
      </h1>
      <p className="lead">
        This simple RSS Feed parser <mark>React</mark> app allows users to input
        an RSS Feed URL into the input Form. The Form Submit Button fetches the
        provided RSS-feed, then parses it and displays a resulting list. The
        List just shows downloaded elements (in the simplest way) and includes
        pagination functionality.
      </p>
      <hr />
      <p>
        <small>
          <strong>Validations:</strong> In case of any error, the UI shows
          something to the user &#128517;
        </small>
      </p>
    </div>
  </div>
);

export default Jumbotron;
