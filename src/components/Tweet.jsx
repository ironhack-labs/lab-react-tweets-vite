import ProfileImage from "../components/ProfileImage.jsx";
import User from "../components/User.jsx";
import Timestamp from "../components/Timestamp.jsx";
import Message from "../components/Message.jsx";
import Actions from "./Actions.jsx";

function Tweet(props) {
  console.log(props.user.image)
  return (
    <div className="tweet">
      <ProfileImage
        imgSrc={props.user.image}
      />

      <div className="body">
        <div className="top">
          <User
          name={props.user.name}
          handle={props.user.handle}
          />
          <Timestamp
          timestamp={props.timestamp}
          />
        </div>

        <Message
        message={props.message}
        />

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
