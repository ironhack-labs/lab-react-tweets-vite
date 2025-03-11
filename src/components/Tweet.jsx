import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imageUrl={props.oneTweet.user.image} />
     <div className="body">
        <div className="top">

          <User name={props.oneTweet.user.name} handle={props.oneTweet.user.handle} />
  
          <Timestamp timestamp = {props.oneTweet.timestamp}/>
        </div>

         <Message message={props.oneTweet.message}/>

        
        <Actions />

    
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

