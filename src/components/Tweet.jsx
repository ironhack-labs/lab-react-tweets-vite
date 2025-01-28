import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Action from "./Actions";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ tweet }) {
  const {
    user: { name, image, handle },
    timestamp,
    message,
  } = tweet;

  return (
    <div className="tweet">
      {/* <img src={image} className="profile" alt="profile" /> */}
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span> */}
          <User name={name} handle={handle} />

          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp timestamp={timestamp} />
        </div>

        {/* <p className="message">{message}</p> */}
        <Message message={message} />
        {/* <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
