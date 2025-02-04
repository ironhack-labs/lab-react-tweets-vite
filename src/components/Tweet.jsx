import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


export default function Tweet({ tweet }) {
  return (
    <div className="tweet">
    
    <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          
            <User name={tweet.user.name} handle={tweet.user.handle} />
          </span>

          
          <Timestamp time={tweet.timestamp} />
        </div>

        <p>
          <Message message={tweet.message} />
        </p>

        <div className="actions">
          
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
);
}

 
