import { ProfileImage } from "./ProfileImage";
import { TimeStamp } from "./Timestamp";
import { User } from "./User";
import { Message } from "./Message";
import { Actions } from "./Actions";

function Tweet({ tweets }) {
  return (
    <>
      {tweets.map((tweet, i) => {
        return (
          <div key={i} className="tweet">
            <ProfileImage image={tweet.user.image} />
            <div className="body">
              <div className="top">
                <User user={tweet.user} />
                <TimeStamp timestamp={tweet.timestamp} />
              </div>
              <Message message={tweet.message} />
              <Actions />
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        )
      })}
    </>
  );
}

export default Tweet;
