
// import Card from './components/Card'
// import UserList from './components/UserList'

// import { INews, RUser } from './types/types'
import './App.css'
import NewsList from './components/NewsListPage'


const App = () => {
  // const [users, setUsers] = useState<RUser[]>([])
  


  return (
    <div className="App">
      {/* <Card width='200px' height='200px'>
        <button>кнопка</button>
      </Card> */}
      {/* <UserList users={users}/> */}
      <NewsList />
    </div>
  )
}

export default App
