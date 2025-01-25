function Tweet() {
  return (
    <div className="tweet">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Thoughts of Dog</span>
            <span className="handle">dog_feelings</span>
          </span>

          <span className="timestamp">1h ago</span>
        </div>

        <p className="message">
          the human likes to say. that i live here rent free. but i would argue.
          this housing accommodation. is my payment. for a lifetime of love. and
          excellent company
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
