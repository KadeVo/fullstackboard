import React from 'react';

function SearchFilter() {
    return (
        <div className="image-form-section">
            <div className="image-container">
                <img src="path/to/your/image.jpg" alt="Image" />
            </div>
            <div className="input-container">
                <input type="text" placeholder="Search for jobs..." />
            </div>
            <div className="actions-container">
                <button type="button" className="search-button">Search</button>
                <select className="location-dropdown">
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                </select>
            </div>
        </div>
    );
}

export default SearchFilter;