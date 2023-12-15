import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

export const Login = () => {
// store the values in the store
const {setUser} = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // post the values to the store
        setUser({userName, userPassword});
    }
  return (
    <>
    <h1>Login</h1>
    <input type="text" 
    value={userName} 
    placeholder='Enter your name here'
    onChange={(e) => setUserName(e.target.value)}/>
    {' '}
    <input type="password" 
    value={userPassword} 
    placeholder='Enter your password here'
    onChange={(e) => setUserPassword(e.target.value)}/>
    <button onClick={handleSubmit} >Submit</button>
    </>
  )
}
