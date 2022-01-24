import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const defaultValues = { first_name:"", last_name:"", email:"", password:"", birthday:""}

const UsersForm = ( { getUsers, userSelected, deselectUser } ) => {

    const { register, handleSubmit, reset} = useForm() 
    
    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }else{
            reset(defaultValues)
        }      
    }, [userSelected, reset]);
    

    const submit = (user) => {        
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
                getUsers()
                deselectUser()
            })
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
        }       
        reset(defaultValues);
    }

    return (
        <div className='user-form'>
            <form action="" onSubmit={handleSubmit(submit)}>
                <h2>New User</h2>
                <div className="input">
                    <label htmlFor="firstname"><i className="fas fa-user"></i></label>
                    <div className='name-inputs'>
                        <input type="text" {...register("first_name")} placeholder='first name' id='firstname' />
                        <input type="text" {...register("last_name")} placeholder='last name'id='lastname' />
                    </div>
                </div>

                <div className="input">
                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                    <input type="email" placeholder='email' id='email' {...register("email")}/>
                </div>

                <div className="input">
                    <label htmlFor="password"><i className="fas fa-lock"></i></label>
                    <input type="password" placeholder='password' id='password' {...register("password")} />
                </div>

                <div className="input">
                    <label htmlFor="birthday"><i className="fas fa-birthday-cake"></i></label>
                    <input type="date" placeholder='birthday' id='birthday' {...register("birthday")} />
                </div>

                <div className="buttons-container">
                    <button type="submit" className='button-submit'>Submit</button>
                    
                    {
                        userSelected && (
                            <button className='button-cancel' type={'button'} onClick={deselectUser}>Cancel</button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default UsersForm
