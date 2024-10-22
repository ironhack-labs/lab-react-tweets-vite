import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage url={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userName={props.tweet.user.name} userHandle={props.tweet.user.handle}/>
          <Timestamp time={props.tweet.timestamp}/>
        </div>
        <Message message={props.tweet.message}/>
        <Actions/>
    </div>
    <div>
    <i className="fas fa-ellipsis-h"></i>
    </div>
    </div>
  )};


export default Tweet;
