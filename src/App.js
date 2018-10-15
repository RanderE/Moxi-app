import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import '../node_modules/antd-mobile/dist/antd-mobile.min.css';
import 'antd/dist/antd.css';

import './App.css';
import TabBarExample from './component/TabBar'

class App extends Component {
  render() {
    return <Router>
      <TabBarExample/>
    </Router>
  }
}

export default App;
