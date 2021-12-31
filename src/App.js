import FeedDisplay from './components/feed-display';
import {useEffect,useState} from 'react';

import './App.css';

const App = () => {
  const [feed, setFeed] = useState({...['One', 'Two', 'Three']})
  console.log(feed);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/user/github",{
      mode: 'no-cors',
      'Content-Type': 'application/json'
    })
    const data = await response.json();
    console.log(data)
    return data
  }

  const handleData = async () => {
    let newFeed = await fetchData()
    setFeed(newFeed)
  }

  return (
    <div className="App">
      <h1>Fresh Feed</h1>
      <button onClick={handleData}> Fetch Data </button>
      <FeedDisplay list={feed}/>
    </div>
  );
};

export default App;
