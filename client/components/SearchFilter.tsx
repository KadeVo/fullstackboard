function SearchFilter() {
  return (
    <div className="bg-gray-200 p-4 rounded-md text-center">
      <div className="flex items-center justify-center mb-4">
        <img
          src="path/to/your/image.jpg"
          alt="Placeholder for potential logo"
          className="max-w-full max-h-40"
        />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="search" className="text-red-600 text-lg">
          Search for jobs:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="search"
            placeholder="Enter keywords here"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:items-center">
        <label htmlFor="location" className="text-lg">
          Location:
        </label>
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          id="location"
        >
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
