import React from 'react';
import {
  sortAlphabetical,
  sortLikes,
  sortComments,
  sortViews,
  sortInteractions,
} from '../sortHelpers';

export default function Table({ data, filterText, selectValue }) {
  let filteredRows = data.filter(item =>
    item.Displayname.toLowerCase().includes(filterText.toLowerCase())
  );

  switch (selectValue) {
    case 'Displayname':
      filteredRows.sort(sortAlphabetical);
      break;
    case 'Likes':
      filteredRows.sort(sortLikes);
      break;
    case 'Comments':
      filteredRows.sort(sortComments);
      break;
    case 'Views':
      filteredRows.sort(sortViews);
      break;
    case 'Interactions':
      filteredRows.sort(sortInteractions);
      break;
    default:
      break;
  }

  const finalRows = filteredRows.map(item => {
    return (
      <tr key={item.SocialPost_ID}>
        <td>{item.Displayname}</td>
        <td>{item.Likes}</td>
        <td>{item.Comments}</td>
        <td>{item.Views}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>{finalRows}</tbody>
      </table>
    </div>
  );
}
