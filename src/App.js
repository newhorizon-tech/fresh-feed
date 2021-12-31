import './App.css';

import FeedDisplay from './components/feed-display'

const App = () => {
  const list = ['One', 'Two', 'Three'];
  return (
    <div className="App">
      <h1>Fresh Feed</h1>
      <FeedDisplay list={list}/>
    </div>
  );
};

export default App;
