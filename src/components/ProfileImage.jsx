function profileImage(props){
    return (
        <img key={props.id}
            src={props.image}
            className="profile"
            alt="profile"
        />
    );
}
export default profileImage;