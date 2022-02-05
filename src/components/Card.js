import Avatar from './Avatar'

function Card({user}) {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <Avatar name={user.name} />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default Card;
