import FeedDisplay from './components/feed-display';
import {useEffect,useState} from 'react';

import './App.css';

const App = () => {
  const initialState = {
                        "0": {id: 0, content: "Tweet One\nSomething else."},
                        "1": {id: 1, content: "Tweet Two"}
                      };
  const [feed, setFeed] = useState(initialState);
  console.log(feed);

  const fetchData = async () => {
      const response = await fetch("http://localhost:8080/user/github");
      return response.json();
  }

  const handleData = async () => {
      let newFeed = await fetchData();
      setFeed(newFeed);
  }

  return (
    <div className="App">
      <h1>Fresh Feed</h1>
      <button onClick={() => handleData()}> Fetch Data </button>
      <FeedDisplay list={feed}/>
    </div>
  );
};

export default App;
