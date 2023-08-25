import React from 'react'
import { Link } from 'react-router-dom';


const Button = ({parameter}) => {
  return (
    <div>
        <button type="button" className="btn btn-primary">{parameter}</button>
      
    </div>
  )
}

export default Button
