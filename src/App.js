import {useState, useEffect} from 'react'
import CardList from './components/CardList'
import TopNav from './components/TopNav'
import Scroll from './components/Scroll'

function App() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json()
    }).then( (users) => {
      setUsers(users)
    })
  }, [])

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="App tc">
      <TopNav onSearch={setSearchTerm} />
      <Scroll>
        <CardList users={filteredUsers} />
      </Scroll>
    </div>
  );
}

export default App;
