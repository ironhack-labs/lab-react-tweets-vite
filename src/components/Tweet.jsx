// src/components/Tweet.jsx
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) { // Aqui usamos destructuring para pegar o objeto "tweet"
  return (
    <div className="tweet">
      {/* Passamos a URL da imagem para o componente ProfileImage */}
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* Passamos o nome e handle para o componente User */}
          <User name={tweet.user.name} handle={tweet.user.handle} />
          {/* Passamos o tempo para o componente Timestamp */}
          <Timestamp time={tweet.timestamp} />
        </div>

        {/* Passamos a mensagem para o componente Message */}
        <Message message={tweet.message} />

        {/* Este componente é estático, não precisa de props */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
