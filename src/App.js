import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './app.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(null)
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null);

  const deleteUser = id =>{
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  } 

  return (
    <div className="app">
      
       <UsersForm 
          getUsers={getUsers} 
          userSelected={userSelected}
          deselectUser={deselectUser}
          />
       <UsersList 
          users={users} 
          selectUser={selectUser}
          deleteUser={deleteUser}
          />
    </div>
  );
}

export default App;
