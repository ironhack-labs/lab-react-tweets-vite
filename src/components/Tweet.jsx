import Actions from './Actions'
import Message from './Message'
import Timestamp from './Timestamp'
import ProfileImage from './ProfileImage';
import User from './User'
function Tweet(props) {
  const {id, image, name, handle, time, message} = props;
  return (
    <div key={time} className="tweet">
      <ProfileImage id={id} image={image}/>
      
      <div className="body">
        <div className="top">
          <User id={id} name={name} handle={handle}/>
          <Timestamp id={id} time={time}/>
        </div>

       <Message id={id} message={message}/>
       <Actions id={id}/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
