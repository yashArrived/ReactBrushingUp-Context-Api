import React, {useState,useContext} from 'react'
import userContext from '../context/userContext'
const Login = () => {
const[username,setUsername] = useState('');
const[password,setPassword] = useState(''); 
    
const {setUser} = useContext(userContext);
//in useContext we pass the context that we want to use , for ex: user, login , object etc etc. We have multiple contexts in our app.
const handlesubmit = (e)=>{
e.preventDefault();
setUser({username,password});
    }
  return (
    <div className='p-6'>
        <h2>Login</h2>
        <input
        className='p-2 outline-double border-2 border-gray-300 m-3'
        type="text" value={username}
        onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
        <input 
        className='p-2 outline-double border-2 border-gray-300'

        type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button
        className='p-2 bg-blue-500 text-white rounded-md m-3 p-3 hover:bg-blue-700' 
        onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login