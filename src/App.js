import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostsTable from './components/PostsTable';
import PostsValueTable from './components/PostsValuesTable';
import Filter from './components/Filter';
import axios from 'axios';

function App() {
  // TODO: CSS or SASS
  // TODO: Extra credit

  const [posts, updatePosts] = useState([]);
  const [postValues, updatePostValues] = useState([]);
  const [currentPost, updateCurrentPost] = useState({});
  const [selectValue, updateSelectValue] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          'https://s3-us-west-2.amazonaws.com/hookit.homework/Posts.json'
        );
        updatePosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          'https://s3-us-west-2.amazonaws.com/hookit.homework/PostValues.json'
        );
        updatePostValues(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const [filterText, updateFilterText] = useState('');

  function handleChange(e) {
    updateFilterText(e.target.value);
  }

  function handleSelect(e) {
    updateSelectValue(e.target.value);
  }

  return (
    <Router>
      <div className="app">
        <h1>Your Dashboard</h1>
        <Filter
          handleChange={handleChange}
          handleSelect={handleSelect}
          filterText={filterText}
          selectValue={selectValue}
        />
        <Switch>
          <Route path="/" exact>
            <PostsTable
              data={posts}
              filterText={filterText}
              selectValue={selectValue}
              updateCurrentPost={updateCurrentPost}
            />
          </Route>
          <Route path="/postValues">
            <PostsValueTable data={postValues} currentPost={currentPost} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
