import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({oneTweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={oneTweet.user.image}/> 
      <div className="body">
        <div className="top">
          <User userData={oneTweet.user} />
          <Timestamp time={oneTweet.timestamp} />
        </div>
        <Message message={oneTweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
