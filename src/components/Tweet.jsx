import ProfileImage from "./profileImage"; 
import Timestamp from "./timestamp";
import User from "./user.jsx"; 
import Message from "./message";
import Actions from "./actions";

function Tweet({ tweet }) {
  let { user: { name, handle, image }, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
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
