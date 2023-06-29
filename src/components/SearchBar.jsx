import { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null)

  const handleInput = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        name="searchQuery"
        type="text"
        onChange={handleInput}
        className="input"
        placeholder="Enter a name(i.e. car, Tokyo, dog, etc...)"
      />
      <Link to={`/search/${inputValue}`}>
        <button type="submit">Search</button>
      </Link>
    </div>
  )
}
