/** @format */

import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage tweet={props.tweet} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User tweet={props.tweet} ></User>
          </span>

          <Timestamp tweet={props.tweet}></Timestamp>
        </div>

        <Message tweet={props.tweet}></Message>

        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
