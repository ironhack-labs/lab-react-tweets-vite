// components/Tweet.jsx
import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User'; // Import User component
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet; // Destructure the tweet object

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} /> {/* Render User component */}
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
