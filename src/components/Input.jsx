import React from 'react'

const Input = ({type, value, callback}) => {

  return (
    <div>
      <input type={type}  value={value} onChange={(e)=>callback(e.target.value)} /> <br />
      <br />
    </div>
  )
}

export default Input