import React, { Component } from 'react';
import ChatContainer from './ChatContainer';
import MenuContainer from './MenuContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <ChatContainer/>
        <MenuContainer />
      </div>
    );
  }
}
