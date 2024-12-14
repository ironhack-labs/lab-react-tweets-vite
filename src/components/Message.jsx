function message(props){
    return(
        <p key={props.id} className="message">
            {props.message}
        </p>
    );
}

export default message