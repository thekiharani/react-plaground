import { Component } from 'react'

class ClassMe extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div className="flex justify-center">

        <button
          className="bg-red-700 text-gray-50 px-4 py-2 rounded-l-md"
          onClick={() => {
            this.setState((prev) => {
              return {
                counter: prev.counter - 1,
              }
            })
          }}
        >
          -
        </button>

        <span className="bg-green-700 px-4 py-2 text-gray-50">
          {this.state.counter}
        </span>

        <button
          className="bg-blue-700 text-gray-50 px-4 py-2 rounded-r-md"
          onClick={() => {
            this.setState((prev) => {
              return {
                counter: prev.counter + 1,
              }
            })
          }}
        >
          +
        </button>
        
      </div>
    )
  }
}

export default ClassMe
