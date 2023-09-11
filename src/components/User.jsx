import React from "react";

function User(props) {
  return (
    <>
      <span className="user">{props.name}</span>
      <span className="handle">@{props.handle}</span>
    </>
  );
}
 export default User