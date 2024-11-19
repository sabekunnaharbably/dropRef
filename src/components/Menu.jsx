import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={`font-dm text-5m text-menuColor mr-6 hover:font-bold hover:text-menuColorh mx-4  ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu