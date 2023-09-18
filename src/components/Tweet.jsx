import ProfileImage from "./ProfileImage";
import User from './User';
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage src={props.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            {/* <span className="name">{props.name}</span>
            <span className="handle">{props.handle}</span> */}
            <User name={props.user.name} handle={props.user.handle} />
          </span>

          {/* <span className="timestamp">{props.timestamp}</span> */}
          <Timestamp time={props.timestamp} />
        </div>

        {/* <p className="message">
          {props.message}
        </p> */}
        <Message message={props.message}/>

        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
