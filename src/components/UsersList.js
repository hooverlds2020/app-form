import React from 'react'
import '../app.css';

const UserList = ( { users, selectUser, deleteUser } ) => {
    return (
        <ul className="users-list">
            <div className="users-list-container"></div>
                {
                    users.map((user) => (
                        <li className="user-item" key={user.id}>
                            <ul className='user-info'>
                                <li className='name'>{user.first_name} {user.last_name}</li>                                
                                <li className='email'><i className="fas fa-envelope "></i> {user.email}</li>
                                <li className='birthday'><i className="fas fa-birthday-cake"></i> {user.birthday} </li>                                                                             
                            </ul>
                            <div className='btn'>
                                <button onClick={() => selectUser(user)}><i className="fas fa-pencil-alt"></i></button>
                                <button  onClick={() => deleteUser(user.id)} className='btn-send' ><i style={{color: '#ef5350', background: 'trasparent'}} className="fas fa-trash"></i></button>
                            </div> 
                        </li>
                    ))
                }
            <div/>
        </ul>
    )
}

export default UserList
