import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User user={user} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
