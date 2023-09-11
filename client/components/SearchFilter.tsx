function SearchFilter() {
  return (
    <div className="image-form-section">
      <div className="image-container">
        <img
          src="path/to/your/image.jpg"
          alt="Placeholder for potential logo"
        />
      </div>
      <div className="input-container">
        <label htmlFor="search">Search for jobs:</label>
        <input type="text" id="search" placeholder="Enter keywords here" />
      </div>
      <div className="actions-container">
        <button type="button" className="search-button">
          Search
        </button>
        <label htmlFor="location">Location:</label>
        <select className="location-dropdown" id="location">
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
