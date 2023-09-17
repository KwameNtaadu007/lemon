import React from 'react'

const Button = ({children,styles}) => {
  return (
    <div>
      <button className={`btn ${styles}`}>{children}</button>
    </div>
  )
}

export default Button
