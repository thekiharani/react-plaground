import React from 'react'
import ClassMe from './components/classMe'
import FuncMe from './components/funcMe'

const App = () => {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="bg-gray-200 rounded-2xl px-4 py-2 min-w-[25rem] text-center">
        <div className="my-2">
          <ClassMe />
        </div>

        <div className="my-2">
          <FuncMe />
        </div>
      </div>
    </div>
  )
}

export default App
