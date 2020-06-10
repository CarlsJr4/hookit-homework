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
  {
    Displayname: 'EspnBrazil',
    Likes: 899,
    SocialPost_ID: 1308574259,
    Comments: 1,
    Views: 6601,
  },
];

const fakePostValues = [
  {
    BrandName: 'EsteeLauder',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 0.0261454735047506,
  },
  {
    BrandName: 'morettiuk',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 0.0832368229907894,
  },
  {
    BrandName: 'corona',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 3.08035919166316,
  },
  {
    BrandName: 'Incasedesigns',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 0.0864575854878506,
  },
  {
    BrandName: 'wsl',
    TagValue: 0.786438027260161,
    SocialPost_ID: 1308574259,
    MentionValue: 0.786438027260161,
  },
  {
    BrandName: 'CoronaAus',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 3.08035919166316,
  },
  {
    BrandName: 'AnheuserBuschInbev',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 3.08035919166316,
  },
  {
    BrandName: 'BirraMoretti',
    TagValue: 0,
    SocialPost_ID: 1308574259,
    MentionValue: 0.0832368229907894,
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
      <PostsValueTable data={fakePostValues} />
    </div>
  );
}

export default App;
