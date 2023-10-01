import React from 'react'

const Button = ({children,styles, onClick}) => {
  return (
    <div>
      <button className={`btn ${styles}`} onClick={onClick?.onClick}>{children}</button>
    </div>
  )
}

export default Button
