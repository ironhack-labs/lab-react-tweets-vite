function User({ name, handle }){
  return (
    <span className="user">
      <span className="user">{name}</span>
      <span className="handle">{`@${handle}`}</span>
    </span>
  );
}

export default User;