import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostsTable from './components/PostsTable';
import PostsValueTable from './components/PostsValuesTable';
import ViewsPlot from './components/ViewsPlot';
import InteractionsPlot from './components/InteractionsPlot';
import Filter from './components/Filter';
import axios from 'axios';

function App() {
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

  // Display top 5 display names by average interactions per post

  return (
    <Router>
      <div className="app">
        <div className="content">
          <div className="left">
            <nav>
              <ul>
                <Link to="/">
                  <li>Posts</li>
                </Link>
                <Link to="/visualizer">
                  <li>Visualizer</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="right">
            <h1>Your Dashboard</h1>
            <Switch>
              <Route path="/" exact>
                <h3>All Posts</h3>
                <Filter
                  handleChange={handleChange}
                  handleSelect={handleSelect}
                  filterText={filterText}
                  selectValue={selectValue}
                />
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
              <Route path="/visualizer">
                <div className="plots">
                  <ViewsPlot data={posts} />
                  <InteractionsPlot data={posts} />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
