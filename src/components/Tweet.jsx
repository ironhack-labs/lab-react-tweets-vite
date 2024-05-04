import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet(props) {
  const IMAGE_URL = props.tweet.user.image;
  const USER_NAME = props.tweet.user.name;
  const USER_HANDLE = props.tweet.user.handle;
  const TWEET_TIMESTAMP = props.tweet.timestamp;
  const TWEET_MESSAGE = props.tweet.message;

  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL} />

      <div className="body">
        <div className="top">
          <User name={USER_NAME} handle={USER_HANDLE} />
          <Timestamp time={TWEET_TIMESTAMP} />
        </div>
        <Message message={TWEET_MESSAGE} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
