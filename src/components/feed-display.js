const FeedDisplay = (props) => {
  const {list} = props;
  return(
    <ul id="main-feed">
      {list.map((item) => (
        <li key={list.indexOf(item)} className="feed-items">
          {' '}
          {item}
          {' '}
        </li>
      ))}
    </ul>
  )
}

export default FeedDisplay;
