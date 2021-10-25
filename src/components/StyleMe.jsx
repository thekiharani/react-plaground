import React from 'react'
import styled from 'styled-components'

export const ButtonII = styled.button`
  width: 200px;
  height: 50px;
  background-color: red;
`

export const Button = ({ className = 'bg-red-800', children }) => {
  return (
    <button
      className={`text-gray-50 px-12 py-3 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

const StyleMe = () => {
  return (
    <div>
      <div>Magical</div>
    </div>
  )
}

export default StyleMe
