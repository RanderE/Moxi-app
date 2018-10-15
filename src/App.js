//引入的工具
import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';


//引入的样式
import '../node_modules/antd-mobile/dist/antd-mobile.min.css';
import 'antd/dist/antd.css';
import './App.css';

//引入的组件
import TabBarExample from './component/TabBar'
import Search from './component/Search';
import GoodItem from './component/GoodItem';
import OtherPage from './component/OtherPage';


class App extends Component {
  render() {
    return <div>
          <Switch>

           <Route path="/tabbar" component={TabBarExample}></Route> 
           <Route path="/search" component={Search}></Route> 
           <Route path="/goodItem" component={GoodItem} ></Route> 
           <Route path="/otherPage" component={OtherPage} ></Route> 
           {/* <Router></Router>      
           <Router></Router>  */}
           <Redirect to="/tabbar/home"></Redirect>
        </Switch>  
        </div>

    
  }
}

export default App;
