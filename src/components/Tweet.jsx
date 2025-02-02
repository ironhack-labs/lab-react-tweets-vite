import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet(propTweet) {
  /* console.log(props);
   const tweet = props.tweet
  console.log(tweet); */
  
  return (
    <div className="tweet">
       <ProfileImage image={propTweet.user.image} />

      <div className="body">
        <div className="top">
        <User
            userName={propTweet.user.name}
            userHandle={propTweet.user.handle}
        />
         
          {/* <span className="timestamp">{tweet.timestamp}</span> */}
          <Timestamp time={propTweet.timestamp} />
        </div>

     {/*    <p className="message">{tweet.message}</p> */}

     <Message text={propTweet.message} />
        
        <Actions />    
    
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;