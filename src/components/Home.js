import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {


  return (
    <div>
      <h1>Hello World</h1>
      <Link to='/about'>About Page</Link>
    </div>
  )
}

export default Home