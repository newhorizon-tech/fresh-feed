import './App.css';

const App = () => {
  const list = ['One', 'Two', 'Three'];
  return (
    <div className="App">
      <h1>Fresh Feed</h1>
      <ul id="main-feed">
        {list.map((item) => (
          <li key={list.indexOf(item)} className="feed-items">
            {' '}
            {item}
            {' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
