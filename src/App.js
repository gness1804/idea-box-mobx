import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import Main from './Main';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
