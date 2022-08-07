import React, { Component } from 'react';
import Logo from './src/components/logo';
import SearchBar from './src/components/searchBar';
import RecentPosts from './recent posts';

export default class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <Recent Posts/>
        </div>
      </div>
    );
  }
}