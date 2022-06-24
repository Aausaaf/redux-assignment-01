import axios from 'axios'
import React, { useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { add } from './redux/action'
import Todolist from './todolist'

const Todo = () => {
    const dispatch = useDispatch()
    const [name,setname] = useState("")
   // console.log(name)

    const handle =(payload) => {
        fetch(`http://localhost:3002/array`,{
            method: "POST",
            body:JSON.stringify(payload)
            ,
            headers: {
              "content-Type": "application/json"
            }
              
          
          }).then((res)=> res.json()).catch((err)=>{
            console.log(err)
          })

          axios.get("http://localhost:3002/array").then(res=>{
            dispatch(add(res.data))
          }).catch(err=>{
            console.log(err)
          })
         
    }
  return (
   <>
   <h1 style={{textAlign:"center"}}>ADD TODO ITEM</h1>
   <br />
   
   <input className='inputs' type="text" placeholder='Enter Item Name' value={name} onChange={(e)=>{
    setname(e.target.value)
    
   }} />
   
   <button className='button' onClick={()=>{
    const  payload = {
      name:name,
      status:false,
      
    }
      handle(payload)
   }}>ADD</button>
 
   </>
  )
}

export default Todo