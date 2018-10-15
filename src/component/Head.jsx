//头部路由包含顶部input和nav
import React,{Component} from 'react';
import Header from './Header';

import {HashRouter as Router} from 'react-router-dom';


class Head extends Component{



    render(){
        return <div className="head">
            <Header/>
        </div>
    }
}


export default Head