function User(props) {
  return (
      <span className="user">
        <span className="user">{props.name}</span>
        <span className="handle">@{props.handle}</span>
      </span>
  );
}
export default User;
