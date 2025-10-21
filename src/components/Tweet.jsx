import Actions from './Actions.jsx'
import Message from './Message.jsx'
import ProfileImage from './ProfileImage.jsx'
import TimeStamp from './TimeStamp.jsx'
import User from './User.jsx'

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<ProfileImage image={tweet.user.image} />

			<div className="body">
				<div className="top">
					<User userName={tweet.user.name} userHandle={tweet.user.handle} />

					<TimeStamp time={tweet.timestamp} />
				</div>

				<Message message={tweet.message} />

				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	)
}

export default Tweet
