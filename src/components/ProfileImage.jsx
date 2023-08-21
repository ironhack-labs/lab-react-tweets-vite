const ProfileImage = (imageProp) => {

    console.log(imageProp)
    const { image } = imageProp


    return (
        <img src={image} className="profile" alt="profile" />
    )

}

export default ProfileImage