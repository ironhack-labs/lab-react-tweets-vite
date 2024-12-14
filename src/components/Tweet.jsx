import React from 'react';


function Tweet(props) {
  console.log(props);
   const tweet = props.tweet
  console.log(tweet);
  
  return (
    <div className="tweet">
      <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.handle}</span>
          </span>
        

          <span className="timestamp">{tweet.user.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message}
        </p>
        
        {/* <Action/> */}

      </div>

       

     );

     
    </div>
  );
}

export default Tweet;
