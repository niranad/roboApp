
const Card = ({ name, email, id }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img src={`https://robohash.org/${name}?150x150`} alt="robot" />
			<div>
				<h2>{name}</h2>
				<p className='f4'>{email}</p>
			</div>
		</div>
	)
}

export default Card;
