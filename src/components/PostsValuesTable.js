import React from 'react';

export default function PostsValuesTable({ data, currentPost }) {
  // Need to isolate the ID of the brand, and filter it here

  const rows = data
    .filter(item => item.SocialPost_ID === currentPost.id)
    .map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.BrandName}</td>
          <td>{item.TagValue}</td>
          <td>{item.MentionValue}</td>
        </tr>
      );
    });

  return (
    <div>
      <h3>Posts made by {currentPost.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Brand Name</th>
            <th>Tag Value</th>
            <th>Mention Value</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
