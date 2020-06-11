import React, { useState, useEffect } from 'react';
import PostsTable from './components/PostsTable';
// import PostsValueTable from './components/PostsValuesTable';
import Filter from './components/Filter';
import axios from 'axios';

// const fakePostValues = [
//   {
//     BrandName: 'EsteeLauder',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 0.0261454735047506,
//   },
//   {
//     BrandName: 'morettiuk',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 0.0832368229907894,
//   },
//   {
//     BrandName: 'corona',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 3.08035919166316,
//   },
//   {
//     BrandName: 'Incasedesigns',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 0.0864575854878506,
//   },
//   {
//     BrandName: 'wsl',
//     TagValue: 0.786438027260161,
//     SocialPost_ID: 1308574259,
//     MentionValue: 0.786438027260161,
//   },
//   {
//     BrandName: 'CoronaAus',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 3.08035919166316,
//   },
//   {
//     BrandName: 'AnheuserBuschInbev',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 3.08035919166316,
//   },
//   {
//     BrandName: 'BirraMoretti',
//     TagValue: 0,
//     SocialPost_ID: 1308574259,
//     MentionValue: 0.0832368229907894,
//   },
// ];

function App() {
  // TODO: Sorting functions
  // TODO: CSS or SASS
  // TODO: Set up react router

  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          'https://s3-us-west-2.amazonaws.com/hookit.homework/Posts.json'
        );
        updatePosts(res.data);
      } catch (err) {
        console.err(err);
      }
    }
    getData();
  }, []);

  const [filterText, updateFilterText] = useState('');

  function handleChange(e) {
    updateFilterText(e.target.value);
  }

  return (
    <div className="app">
      <h1>Your Dashboard</h1>
      <Filter handleChange={handleChange} filterText={filterText} />
      <br />
      <PostsTable data={posts} filterText={filterText} />
      <br />
      {/* <PostsValueTable data={fakePostValues} /> */}
    </div>
  );
}

export default App;
