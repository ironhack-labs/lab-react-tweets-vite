import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.userImgUrl}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={props.userImgUrl} />

      <div className="body">
        <div className="top">

          <User 
            name={props.userName}
            handle={props.userHandle}
          />

          <Timestamp time={props.timestamp} />
        </div>

        <Message 
          message={props.message}
        />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
