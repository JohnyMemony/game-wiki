import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { Router } from "./Router";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default hot(App);