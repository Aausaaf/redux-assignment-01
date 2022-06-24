import React from 'react'


import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <>
  <div className="navbar">
  <Link style={{marginLeft:"20vw"}} to="/">Home</Link>
   <Link style={{marginLeft:"15vw"}} to="/todo">TODO ITEMS</Link>
  </div>
   </>
  )
}

export default Navbar