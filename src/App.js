import React, { useEffect } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import { add } from './redux/action'
import Todo from './todo'
import {Routes,Route} from 'react-router-dom'
import Todolist from './todolist'
import Navbar from './navbar'
import "./App.css"
function App() {
//  const {count} = useSelector((store)=>store)
//  const dispatch= useDispatch()
const {array} = useSelector((store)=>store)
const dispatch = useDispatch()
//console.log(array)
useEffect(()=>{
  axios.get("http://localhost:3002/array").then(res=>{
    dispatch(add(res.data))
  }).catch(err=>{
    console.log(err)
  })
},[])
  return (
    <>

    
    {/* <h1>Count is {count} </h1>
    <button onClick={()=>{
      dispatch(incount(1))
    }}>inc</button>
    <button onClick={()=>{
      dispatch(deccount(1))
    }}>dec</button>
    <button onClick={()=>{
      dispatch(reccount())
    }}>reset</button> */}
    <Navbar></Navbar>
    <br />
    <br />
    <br />
    <Routes>
    <Route path="/" element={<Todo></Todo>}/>
    <Route path="/todo" element={<Todolist></Todolist>}/>
    <Route path="/todo/:user" element={<Todolist></Todolist>}/>
    </Routes>
   
    </>
  );
}

export default App;
