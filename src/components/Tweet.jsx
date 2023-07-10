import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet(props) {
  console.log("props", props);

  return (
    <div className="tweet">
      <img src={props.tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <User tweet={props.tweet}></User>
          <Timestamp tweet={props.tweet}></Timestamp>
        </div>
        <Message tweet={props.tweet}></Message>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
