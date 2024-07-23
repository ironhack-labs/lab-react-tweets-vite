function ProfileImage(props) {

    const { image } = props

    return (
        <div className="ProfileImage">
            <img src={image} className="profile" alt="profile" />
        </div>
    )
}

export default ProfileImage;