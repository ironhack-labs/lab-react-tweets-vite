import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(probs) {
  return (
    <div className="tweet">
      <ProfileImage image={probs.tweet.user.image} />
      <div className="body">
        <div className="top">

          <User user={probs.tweet.user} />
          <Timestamp timestamp={probs.tweet.timestamp} />
        </div>

        <Message message={probs.tweet.message} />


        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
