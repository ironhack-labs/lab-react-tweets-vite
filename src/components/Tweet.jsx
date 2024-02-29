import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet({ content }) {
  return (
    <div className="tweet">
      <ProfileImage image={content.user.image} />
      <div className="body">
        <div className="top">
          <User name={content.user.name} handle={content.user.handle} />
          <Timestamp time={content.timestamp}/>
        </div>

        <Message message={content.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
