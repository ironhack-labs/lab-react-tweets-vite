import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet({tweet}) {

  const { user, timestamp, message } = tweet
  const { name: userName, image: userImage, handle: userHandle } = user

  return (
    <div className="tweet">

      <ProfileImage image={userImage} />

      <div className="body">
        <div className="top">

          <User name={userName} handle={userHandle} />
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
