const User = ({ name, handle }) => {
    console.log(handle)
    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}
export default User