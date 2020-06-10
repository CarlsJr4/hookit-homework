import React from 'react';
import PostsTable from './components/PostsTable';
import PostsValueTable from './components/PostsValuesTable';
import Filter from './components/Filter';

const fakeData = [
  {
    Displayname: 'AdidasIsrael',
    Likes: 2148,
    SocialPost_ID: 1308509710,
    Comments: 11,
    Views: 0,
  },
  {
    Displayname: 'HisenseSports',
    Likes: 44,
    SocialPost_ID: 1308511489,
    Comments: 1,
    Views: 263,
  },
  {
    Displayname: 'Eurosport',
    Likes: 1113,
    SocialPost_ID: 1308517532,
    Comments: 1,
    Views: 0,
  },
];

function App() {
  return (
    <div className="app">
      <h1>Hookit Homework</h1>
      <Filter />
      <br />
      <PostsTable data={fakeData} />
      <br />
      <PostsValueTable />
    </div>
  );
}

export default App;
