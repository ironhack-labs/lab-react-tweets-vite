import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"


function Tweet({ tweet }) {


  const { message, timestamp, user } = tweet
  const { handle, image, name } = user

  console.log(tweet)


  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={name} />
            <User handle={handle} />
          </span>

          <Timestamp timestamp={timestamp} />
        </div>

        <p>
          <Message message={message} />

        </p>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
