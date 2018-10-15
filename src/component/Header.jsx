import React,{Component} from 'react';
import SearchBarExample from './Searchbox';
import {HashRouter as Router} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }

    }


    render(){
        return <header className="header" >
            <h1><a href="#"><img src="./imgs/logo.png" /></a></h1>
            <SearchBarExample/>
        </header>
    }
}


export default Header