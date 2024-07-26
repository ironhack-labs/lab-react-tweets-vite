function User({name, handle }) {
    return (
      //Render the user
               <span className="user">
            <span className="name"> {name} </span>
            <span className="handle">@{handle}</span>
            </span>
    );
  }
  export default User;