import React from 'react';

export default function Filter({ handleChange, filterText, handleSelect }) {
  return (
    <div>
      <label htmlFor="nameFilter">Search by name: </label>
      <input
        onChange={handleChange}
        value={filterText}
        type="text"
        name="nameFilter"
        id="nameFilter"
      />
      <label htmlFor="optionFilter">Sort by: </label>
      <select onChange={handleSelect} name="optionFilter" id="optionFilter">
        <option value="">(none)</option>
        <option value="Displayname">Alphabetical</option>
        <option value="Likes">Highest Likes</option>
        <option value="Comments">Highest Comments</option>
        <option value="Views">Highest Views</option>
        <option value="Interactions">Highest Interactions</option>
      </select>
    </div>
  );
}
