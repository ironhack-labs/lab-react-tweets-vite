function ProfileImage({image}) {
    // console.log("imageee/props: ",image)
  return (
  <img src={image} className="profile" alt="profile" />
  );
}

export default ProfileImage