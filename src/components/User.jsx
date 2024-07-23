const User = ({ name, handel }) => {
    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handel}</span>
        </span>
    )
}

export default User