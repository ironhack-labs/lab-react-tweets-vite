function ProfileImage(props) {
    return (
      <div>
        <img
          src={props.imageUrl}
          className="profile"
          alt="profile"
        />
      </div>
    );
  }
  
  export default ProfileImage;