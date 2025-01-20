import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { name, handle, timestamp, message, image } = tweet;

  return (
    <div className="tweet">
      <img src={image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
        <User name={name} handle={`@${handle}`} />



          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">{message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;