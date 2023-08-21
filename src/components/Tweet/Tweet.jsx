import Actions from "../Actions/Actions"
import Message from "../Message/Message";
import ProfileImage from "../ProfileImage/ProfileImage";
import Timestamp from "../Timestamp/Timestamp";
import User from "../User/User";

function Tweet({ tweet }) {

  const {user, timestamp, message} = tweet

  const {name, image, handle} = user

  return (
    <div className="tweet">
      <ProfileImage image={image}/>
      <div className="body">
        <div className="top">
         <User name={name} handle={handle} />
      <Timestamp timestamp={timestamp}/>
        </div>
        <Message message={message}/>

      <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
