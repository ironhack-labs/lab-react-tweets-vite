const ProfileImage = ({ name, image }) => {
    return (
        <img
            src={image}
            className="profile"
            alt={name}
        />
    )
}
export default ProfileImage