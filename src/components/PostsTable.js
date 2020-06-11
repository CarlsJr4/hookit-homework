import React from 'react';

export default function Table({ data, filterText }) {
  const filteredRows = data
    .filter(item =>
      item.Displayname.toLowerCase().includes(filterText.toLowerCase())
    )
    .map(item => {
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
        <tbody>{filteredRows}</tbody>
      </table>
    </div>
  );
}
