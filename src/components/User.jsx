function User(props){
    return (
        <span key={props.id} className="user">
            <span className="name">{props.name}</span>
            <span className="handle">@{props.handle}</span>
        </span>
    );
}
export default User;