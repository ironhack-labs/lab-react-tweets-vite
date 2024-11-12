import Actions from './Actions'
import Message from './Message'
import ProfileImage from './ProfileImage'
import Timestamp from './Timestamp'
import User from './User'

function Tweet({ tweet }) {
	console.log(tweet)
	return (
		<div className='tweet'>
			<ProfileImage userImg={tweet.user.image} />
			<div className='body'>
				<div className='top'>
					<User user={tweet.user.name} handle={tweet.user.handle} />
					<Timestamp timestamp={tweet.timestamp} />
				</div>
				<Message message={tweet.message} />

				<Actions />
			</div>
			<i className='fas fa-ellipsis-h'></i>
		</div>
	)
}

export default Tweet
