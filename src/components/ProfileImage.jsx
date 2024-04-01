function ProfileImage({ imgSrc }) {
  const { image } = imgSrc;

  return (
    <div>
      <img src={image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
