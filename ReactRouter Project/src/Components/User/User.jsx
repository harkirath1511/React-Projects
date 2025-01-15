import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const {userId= 'Nothing Passed '} = useParams()

  return (
    <div className='text-center text-3xl bg-gray-700 text-white p-5'> User : {userId}</div>
  )
}

export default User
