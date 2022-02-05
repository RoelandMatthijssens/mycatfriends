import Avatar from './Avatar'
import Counter from './Counter'

function Card({user}) {
  return (
    <div className="Card flex flex-column bg-light-green dib br3 pa3 ma2 bw2 shadow-5 tc hide-child cover">
      <div className='self-end'>
        <Counter />
      </div>
      <Avatar name={user.name} />
      <h1 className='w5'>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default Card;
