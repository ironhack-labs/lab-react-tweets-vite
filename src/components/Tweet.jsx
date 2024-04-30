import User from "./User"
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import Message from "./Message";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet
  const { name, image, handle } = user


  return (

    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">

        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions></Actions>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;