import React from 'react'
import ClassMe from './components/classMe'
import FuncMe from './components/funcMe'
import { Button } from './components/StyleMe'

const App = () => {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="bg-gray-200 rounded-2xl px-4 py-2 min-w-[25rem] max-w-7xl text-center">
        <div className="my-2 flex flex-wrap items-center space-x-2 space-y-2">
          <Button className="bg-blue-700">I am Blue :(</Button>
          <Button className="bg-green-700">I am Green :(</Button>
          <Button className="bg-yellow-700">I am Yellow :(</Button>
          <Button className="bg-indigo-700">I am Indigo :(</Button>
          <Button className="bg-purple-700">I am Purple :(</Button>
          <Button className="bg-pink-700">I am Pink :(</Button>
          <Button className="bg-gray-700">I am Gray :(</Button>
          <Button>I am Default :)</Button>
        </div>

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
