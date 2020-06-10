import React from 'react';

export default function PostsValuesTable({ data }) {
  return (
    <div>
      <h1>Post values for "Adidas"</h1>
      <table>
        <tr>
          <th>Brand Name</th>
          <th>Tag Value</th>
          <th>Mention Value</th>
        </tr>
        <tr>
          <td>AdidasUEFA</td>
          <td>2.95622315186076</td>
          <td>2.95622315186076</td>
        </tr>
        <tr>
          <td>Adidas</td>
          <td>2.95622315186076</td>
          <td>2.95622315186076</td>
        </tr>
      </table>
    </div>
  );
}
