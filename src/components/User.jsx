const User = (props) => {
  const userName = props.name
  const userHandle = props.handle
  return (
    <span className="User">
      <span className="name">{userName}</span>
      <span className="handle">{`@${userHandle}`}</span>
    </span>
  )
}

export default User