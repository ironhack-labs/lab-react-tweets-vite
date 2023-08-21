import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">

      < ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          < User name={user.name} handle={user.handle} />
          < Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
