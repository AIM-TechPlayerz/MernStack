'use client'
import React from 'react'
import "./userinfo.css"


const UserInfo = ({id,name,email,phone,address,description}) => {
  console.log("id",id)
  return (
    <>
    <div className='Info'>
      <h1>Here Is Your Info:-</h1>
      <br />
      </div>
      
    <div className="cssforuserinfo">

    <h1 className="cssforuserinfo">ID: {id && id}</h1>
      <h1 className="cssforuserinfo">Name: {name && name}</h1>
      <h1 className="cssforuserinfo">Email: {email && email}</h1>
      <h1 className="cssforuserinfo">Phone: {phone && phone}</h1>
      <h1 className="cssforuserinfo">Address: {address && address}</h1>
      <h1 className="cssforuserinfo">Description: {description && description}</h1>
      
    </div>
    </>
    
  )
}


export default UserInfo