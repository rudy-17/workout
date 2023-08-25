import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  return (
    <div>
        <div className='container'>
      <Link to="/paridhi"><Button parameter={"Paridhi"}></Button></Link>
      <br></br>
      <Link to="/rudresh"><Button parameter={"Rudresh"}></Button></Link>
      <br></br>
      <Link to="/compare"><Button parameter={"Compare"}></Button></Link>
   
    </div>
      
    </div>
  )
}

export default Home
