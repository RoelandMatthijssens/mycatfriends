import Card from './Card'

function CardList({users}) {
  return (
    <div>
      { users.map((user, i) => <Card key={i} user={user} />) }
    </div>
  );
}


export default CardList;
