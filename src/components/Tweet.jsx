import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  console.log(props)
  return (
  
    <div className="tweet">
      <ProfileImage image={props.details.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.details.user.name} handle={props.details.user.handle}/>
        

          <Timestamp time={props.details.timestamp}/>
        </div>

        <Message message={props.details.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
