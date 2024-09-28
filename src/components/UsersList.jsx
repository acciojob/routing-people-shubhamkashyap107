import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = ({data}) => {
  return (
    <div>
     <ul>

     {data.map((item, index) => {
         return <Link to={`/users/${index + 1}`}><li>{item.name}</li></Link>
    })}
        
    </ul>

    </div>
  )
}

export default UsersList