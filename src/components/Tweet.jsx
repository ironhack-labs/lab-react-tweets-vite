import userEvent from "@testing-library/user-event";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          {/* <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span> */}
          <Timestamp time={timestamp} />
          {/* <span className="timestamp">{timestamp}</span> */}
        </div>
          <Message message={message}/>
        {/* <p className="message">{message}</p> */}

          <Actions/>
        {/* <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
