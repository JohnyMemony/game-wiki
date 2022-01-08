import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from './Router';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default hot(App);