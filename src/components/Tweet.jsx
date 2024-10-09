import Actions from "./Actions";
import Message from "./Message";
import TimeStamp from "./Timestamp";
import User from "./User"
import ProfileImg from "./ProfileImg"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImg image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle = {props.tweet.user.handle}/>
          <TimeStamp timestamp={props.tweet.timestamp}/>
        </div>

        <Message message = {props.tweet.message} /> 

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
