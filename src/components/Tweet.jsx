import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";
import Message from "./Message";


function Tweet(props) {

  const { tweet } = props
  const { message, timestamp, user } = tweet
  const { handle, image, name } = user

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
