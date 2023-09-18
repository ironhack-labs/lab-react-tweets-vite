import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Timestamp from "./Timestamp"
import Actions from "./Actions";

function Tweet({ user: { image, name, handle }, timestamp, message }) {

  return (
    <div className="tweet">
      <div className="body">
        <ProfileImage image={image} alt={name} />
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
