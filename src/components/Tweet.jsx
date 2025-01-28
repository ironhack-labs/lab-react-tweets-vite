
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/* <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <div style={{
        display: "flex",
        alignItems: 'center'
      }}>
        <div>
        <ProfileImage image={tweet.user.image} />
        </div>
      <div>
          {/* <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.handle}</span>
          </span> */}
          <User name={tweet.user.name} handle={tweet.user.handle} />
          {/* <span className="timestamp">{tweet.timestamp}Nov 30, 2020</span>
        </div> */}
          <TimeStamp timestamp={tweet.user.timestamp} />
      </div>
      </div>

      <div>
          {/* <p className="message"> {tweet.message}</p> */}
          <Message message={tweet.message}/>
      </div>
          <Actions actions={tweet.actions}/>
    </div>
  );
}

export default Tweet;
