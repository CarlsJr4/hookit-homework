import React from 'react';

export default function Table({ data, filterText, selectValue }) {
  function sortLikes(a, b) {
    return b.Likes - a.Likes;
  }

  function sortComments(a, b) {
    return b.Comments - a.Comments;
  }

  function sortViews(a, b) {
    return b.Views - a.Views;
  }

  function sortInteractions(a, b) {
    const first = a.Likes + a.Comments + a.Views;
    const second = b.Likes + b.Comments + b.Views;
    return second - first;
  }

  function sortAlphabetical(a, b) {
    const first = a.Displayname.toLowerCase();
    const second = b.Displayname.toLowerCase();
    if (first > second) {
      return 1;
    }
    if (first < second) {
      return -1;
    }
    return 0;
  }

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
