import { useSelector,useDispatch } from "react-redux";

import React from 'react'
import axios from "axios";
import { add, delet, toogle } from "./redux/action";
import {useParams} from 'react-router-dom' 
const Todolist = () => {
const val = useParams()
console.log(val.user)
    const {array} = useSelector((store)=> store)
    const dispatch = useDispatch()
    console.log(array)
    const settoggle = (data,id) => {
          axios.put(`http://localhost:3002/array/${id}`,data).then(res => console.log(res)).catch(err=>{
            console.log(err)
          })
          axios.get(`http://localhost:3002/array`).then(res => dispatch(toogle(res.data))).catch(err=>{
            console.log(err)
          })
    }
  return (
  <>
    <div style={{display:"flex"}} className="header">
              <h1>Item Name</h1>
              <h1>Status</h1>
            </div>
  <div className="div" style={{dispaly:"flex"}}>

    <div className="div1">
    {
      (val.user)? array.map((ele)=>{
        if(ele.id == val.user)
        {
          return (
            <div style={{display:"flex"}}>
          
            <h1>{ele.name}
            </h1>
            <h1 style={{marginLeft:"19vw"}}>
            {
                (ele.status)?<h5 style={{color:"green", marginTop:"1vh"}}>Complete</h5>:<h5 style={{color:"red", marginTop:"1vh"}}>incomplete</h5>
            }
            </h1>
            <button className="buttons" onClick={()=>{
              const dat = {
                name:ele.name,
                status:!ele.status,
                id:ele.id,
              }
                settoggle(dat,ele.id)
            }}>Toogle</button>
            
          <button className="buttons" onClick={()=>{
          const newarr =  array.filter((el)=>{
            return ele.id != el.id
           })
           console.log(newarr)
           axios.delete(`http://localhost:3002/array/${ele.id}`)
           .then(res => {
               console.log(res.data)
             
           }).catch(err => {
               console.log(err)
           })
           dispatch(delet(newarr))
          
          }}>Delete</button>
            </div>
          )
        }
      }) :
        array.map((ele)=>{
            return(<>
            
            <div style={{display:"flex"}}>
           <h1 key={ele.id}>{ele.name} </h1>
            <h1 style={{marginLeft:"19vw"}}>  {
                (ele.status)?<h5 style={{color:"green", marginTop:"1vh"}}>Complete</h5>:<h5 style={{color:"red", marginTop:"1vh"}}>incomplete</h5>
            }</h1>
            <button className="buttons" onClick={()=>{
              const dat = {
                name:ele.name,
                status:!ele.status,
                id:ele.id,
              }
                settoggle(dat,ele.id)
            }}>Toogle</button>
            
          <button className="buttons" onClick={()=>{
          const newarr =  array.filter((el)=>{
            return ele.id != el.id
           })
           console.log(newarr)
           axios.delete(`http://localhost:3002/array/${ele.id}`)
           .then(res => {
               console.log(res.data)
             
           }).catch(err => {
               console.log(err)
           })
           dispatch(delet(newarr))
          
          }}>Delete</button>
            </div>
            </>
        )
        })
      
    }
  
    </div>
    
  </div>
  </>
  )
}

export default Todolist