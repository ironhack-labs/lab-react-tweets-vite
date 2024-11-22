import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet({tweet}) {
  const { user, time, message} = tweet; 
  const { name, image, handle } = user;
  return (
    <div className="tweet">
      <ProfileImage image={image}/>
      <div className="body">
        <div className="top">
        <span className="user">
          <User name={name} handle={handle} />
        </span>


          <span className="timestamp">
          <Timestamp time={time}/>  </span>
        </div>

        <p className="message">
        <Message message={message} />
        </p>

        
      <Actions />
      
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
