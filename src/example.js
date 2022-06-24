import React, { useState } from 'react'
import axios from 'axios'

   export function post(payload) {
        
        fetch(`http://localhost:3000/array`,{
        method: "POST",
        body:JSON.stringify(payload)
        ,
        headers: {
          "content-Type": "application/json"
        }
          
      
      }).then((res)=> res.json()).catch((err)=>{
        console.log(err)
      })
     
        
    
    
      axios.get('http://localhost:3000/array').then(res=>{
          settem(res)
         // console.log("sdiughugi")
          //console.log(tem)
      }).catch(err => {
        //console.log(err)
      })
      console.log(tem)
      return tem
    
    
      
    }
    
  

