import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet({user: {image, name, handle }, timestamp, message}) {
  return (
    <div className="tweet">
      

      <ProfileImage image={image} alt={name}/>

        <div className="body">

          <div className="top">
      <User name={name} handle={handle} />
          </div>

      <Timestamp time={timestamp} />

      <Message message={message} />
      <Actions />
    </div>

    <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;
