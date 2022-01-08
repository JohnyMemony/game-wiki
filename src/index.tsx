import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';

import "./assets/styles/main.scss";

const mountNode = document.getElementById("app");

ReactDOM.render(<App />, mountNode);