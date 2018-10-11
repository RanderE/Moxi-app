import React,{Component} from 'react';
import Header from './Header';
import Nav from './Nav'



class Head extends Component{



    render(){
        return <div className="head">
            <Header/>
            <Nav/>
        </div>
    }
}


export default Head