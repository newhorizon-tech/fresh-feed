import { useState } from 'react';
import PropTypes from 'prop-types';

const FeedInput = (props) => {
  const { handleData } = props;
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = () => {
    handleData(user);
    setUser('');
  };

  return (
    <div id="user-input">
      <input value={user} placeholder="Enter username" onChange={(e) => handleChange(e)} />
      <button type="submit" onClick={() => handleSubmit()}> Fetch Data </button>
    </div>
  );
};

FeedInput.propTypes = {
  handleData: PropTypes.func.isRequired,
};

export default FeedInput;
