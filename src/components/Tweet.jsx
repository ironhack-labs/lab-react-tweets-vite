import ProfileImage from './ProfileImage'
import User from './User'
import TimeStamp from './TimeStapm'
import Messaje from './Messaje'
import Actions from './Actions'

function Tweet({ user, timestamp, message}) {

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userName={user.name} userHandle={user.handle} />

          <TimeStamp time={timestamp} />
        </div>

        <Messaje message1={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
