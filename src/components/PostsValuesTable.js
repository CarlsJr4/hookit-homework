import React from 'react';

export default function PostsValuesTable({ data }) {
  const rows = data.map(item => {
    return (
      <tr>
        <td>{item.BrandName}</td>
        <td>{item.TagValue}</td>
        <td>{item.MentionValue}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Post values for "EspnBrazil"</h1>
      <table>
        <tr>
          <th>Brand Name</th>
          <th>Tag Value</th>
          <th>Mention Value</th>
        </tr>
        {rows}
      </table>
    </div>
  );
}
