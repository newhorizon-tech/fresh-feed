const FeedDisplay = (props) => {
  const {list} = props;
  return(
    <ul id="main-feed">
      {
       Object.keys(list).map(key => (
        <li key={key} className="feed-items">
          {list[key]}
        </li>
      ))}
    </ul>
  )
}

export default FeedDisplay;
