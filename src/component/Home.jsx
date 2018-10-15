import React,{Component} from 'react';
import Head from './Head';
import Nav from './Nav'

class Home extends Component{



    render(){
        console.log('hom',666)
        return <div className="home">
            <Head/>
            <Nav/>
        </div>
    }
}


export default Home