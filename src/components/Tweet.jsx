import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage src={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
