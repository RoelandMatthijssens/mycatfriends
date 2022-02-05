import {useState, useEffect} from 'react'
import CardList from './components/CardList'
import TopNav from './components/TopNav'
import {cats} from './data/cats'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setUsers(cats.filter(user => user.name.toLowerCase().includes(searchTerm)))
  }, [searchTerm])

  return (
    <div className="App">
      <TopNav onSearch={setSearchTerm} />
      <CardList users={users} />
    </div>
  );
}

export default App;
