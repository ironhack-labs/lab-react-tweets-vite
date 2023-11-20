const User = ({ name: USER_NAME, handle: USER_HANDLE }) => {
    return (
        <span className="user">
            <span className="name">{USER_NAME}</span>
            <span className="handle">@{USER_HANDLE}</span>
        </span>
    )
}
export default User