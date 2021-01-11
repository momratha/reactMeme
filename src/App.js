import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import MemeList from './components/memeList';
import store from './store';

class App extends Component {
  render() {
    console.log(this.props)

    return (
      <Provider store={store}>
        <div className="App">
          <MemeList />
        </div>
      </Provider>
    );
  }
}

export default App;
