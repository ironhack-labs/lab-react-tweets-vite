import ProfileImage from "./components/ProfileImage";
import User from "./components/User";
import Timestamp from "./components/Timestamp";
import Message from "./components/Message";
import Actions from "./components/Actions";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.image} />
      <div className="body">
        <div className="top">
          <User name={tweet.name} handle={tweet.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
