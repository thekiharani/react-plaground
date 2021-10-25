import React, { useState } from 'react'

const FuncMe = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex justify-center">
      <button
        className="bg-red-700 text-gray-50 px-4 py-2 rounded-l-md"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        -
      </button>

      <span className="bg-green-700 px-4 py-2 text-gray-50">{counter}</span>

      <button
        className="bg-blue-700 text-gray-50 px-4 py-2 rounded-r-md"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  )
}

export default FuncMe
