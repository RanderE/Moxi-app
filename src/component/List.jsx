import React,{Component} from 'react';
import Header from './Header';
import ListTab from './ListTab';

class List extends Component{

    render(){
        return <div className="list">
            <Header/>  
            <ListTab/>
        </div>
    }
}

export default List