
import { useState } from 'react';

export default function Actions() {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <div className="actions">
      {/* Font Awesome icons */}
      <i className="far fa-comment" data-testid="comment-icon"></i>
      <i className="fas fa-retweet" data-testid="retweet-icon"></i>
      <i 
        className={isLiked ? "fas fa-heart" : "far fa-heart"} 
        style={isLiked ? {color: "red"} : {}} 
        data-testid="heart-icon"
        onClick={handleLikeClick}
      ></i>
      <i className="fas fa-share" data-testid="share-icon"></i>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}
