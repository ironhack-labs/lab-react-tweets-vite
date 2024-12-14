function timestamp(props){
    return (
        <span key={props.id} className="timestamp">{props.time}</span>
    );
}
export default timestamp