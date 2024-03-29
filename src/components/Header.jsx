import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../contexts/Context'

export const Header = () => {
  const { context, dispatch } = useContext(Context)

  const [width, setWidth] = useState(context.width)
  const [height, setHeight] = useState(context.width)

  return (
    <>
      <nav id="nav">
        <Link to="/search-photo-app">Home</Link>
      </nav>
      <div className="dimension-section">
        <span>
          {width}x{height}
        </span>
        <br />
        <span>Width:</span>
        <input
          type="range"
          min="100"
          max="500"
          step="50"
          value={width}
          onChange={(e) => {
            e.preventDefault()
            setWidth(e.target.value)
          }}
        />
        <br />
        <span>Height:</span>
        <input
          type="range"
          min="100"
          max="500"
          step="50"
          value={height}
          onChange={(e) => {
            e.preventDefault()
            setHeight(e.target.value)
          }}
        />
        <br />
      </div>

      <button
        onClick={() => {
          dispatch({
            type: 'size/set',
            payload: { height, width },
          })
        }}
      >
        Confirm
      </button>
    </>
  )
}
