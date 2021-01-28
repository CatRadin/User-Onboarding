import React from 'react'

function Friends(props) {

  const { name, email, id} = props.details.user;
  
    return (
      
        <div className='friend-container'>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>User ID: {id}</p>
        </div>
           
    )
  }
  
  export default Friends