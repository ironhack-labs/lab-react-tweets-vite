import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  console.log("en tweet---------------", tweet)
  const { user, message, timestamp } = tweet


  return (

    < div className="tweet" >

      <ProfileImage image={user.image} />

      <div className="body">

        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div >
  );
}

export default Tweet;
