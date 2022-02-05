import Card from './Card'

function CardList({users}) {
  return (
    <div className='flex flex-wrap'>
      { users.map((user, i) => <Card key={i} user={user} />) }
    </div>
  );
}

export default CardList;
