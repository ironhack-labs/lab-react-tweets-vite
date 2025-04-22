import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imageUrl={props.tweetData.user.image} />
      <div className="body">
        <div className="top">
          <User
            userName={props.tweetData.user.name}
            userHandle={props.tweetData.user.handle}
          />
          <Timestamp time={props.tweetData.timestamp} />
        </div>
        <Message text={props.tweetData.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
