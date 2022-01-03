import { useState } from 'react';
import FeedDisplay from './components/feed-display';
import FeedInput from './components/feed-input';

import './App.css';

const App = () => {
  const [feed, setFeed] = useState({});

  const handleData = async (username) => {
    const response = await fetch(`http://localhost:8080/user/${username}`);
    const newFeed = await response.json();
    setFeed(newFeed);
  };

  return (
    <div className="App">
      <h1>Fresh Feed</h1>
      <FeedInput handleData={handleData} />
      <FeedDisplay list={feed} />
    </div>
  );
};

export default App;
