import React from 'react'

// get single student record
const getStudent = async (id) => {
    try{
        const {data} = await axios.get(`http://localhost:3000/api/students/student/${id}`)
        const {student} = data
        return student
    }catch(err){
        console.log(err)
    }
    
}

export default function Page({ params:{id}}) {
        const {
        _id,
        name,
        email,
        phone,
        address,
        description
    } =getStudent(id)
    return (
        <div>ID: {id}
        
        <div>Name: {name}</div>
        </div>
        
    )
}

