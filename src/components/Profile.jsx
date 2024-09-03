import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {

    const {user} = useContext(userContext);
  if(!user) return (
    <div>Please Login</div>
  )
  else return (<>
    <div className='flex-col justify-center card p-4 m-2 border w-3/12 '>
        <div className='flex justify-center'>
        <h2 className='text-2xl mb-2'>Profile</h2>
        </div>
        <div className='flex justify-center'>
        <h3 className=''>Username: {user.username}</h3>
        </div>
        <div className='flex justify-center'>
        <h3>Password: {user.password}</h3>
        
        </div>
    </div>
        <h3 className='text-2xl'>This uses Context to save and render data</h3>
    </>
  )
}

export default Profile