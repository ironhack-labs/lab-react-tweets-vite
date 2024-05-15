//import os compoments

import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp"; 
import Actions from "./Actions";
import User from "./User";
import Message from "./Message";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}
      
      

      />

      <div className="body">


        <div className="top">
          <span className="user">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
          <Timestamp time={props.tweet.time} />
        </div>

        <p className="message">{props.tweet.message}
        </p>
        <Message message={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions  />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
