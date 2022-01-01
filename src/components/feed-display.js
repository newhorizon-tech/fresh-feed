const FeedDisplay = (props) => {
  const {list} = props;
  return(
    <ul id="main-feed">
      {
       Object.values(list).map(item => (
        <li key={item.id} className="feed-items">
          {item.content}
        </li>
      ))}
    </ul>
  )
}

export default FeedDisplay;
