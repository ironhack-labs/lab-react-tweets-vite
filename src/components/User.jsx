export default function User(probs) {
    return (
        <span className="user">
            <span className="name">{probs.user.name}</span>
            <span className="handle">{probs.user.handle}</span>
        </span>

    );
}