import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      {/* Imagen de perfil */}
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* Nombre y usuario */}
          <User name={tweet.user.name} handle={tweet.user.handle} />

          {/* Timestamp */}
          <Timestamp time={tweet.timestamp} />
        </div>

        {/* Mensaje */}
        <Message message={tweet.message} />

        {/* Íconos de acción */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;