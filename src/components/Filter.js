import React from 'react';

export default function Filter({ handleChange, filterText }) {
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
      <label htmlFor="optionFilter">Filter by: </label>
      <select name="optionFilter" id="optionFilter">
        <option value="">(none)</option>
        <option value="displayName">Name</option>
        <option value="likes">Likes</option>
        <option value="comments">Comments</option>
        <option value="views">Views</option>
        <option value="interactions">Interactions</option>
      </select>
    </div>
  );
}
