import React,{Component} from 'react';

class SecondNav extends Component{
    constructor(){
        super();
        this.state = {

        }

    }
    
    render(){
        return  <div className="secondNav">
                <ul>
                    <li>{this.props.content}</li>
                </ul>
    </div>
    }
}


export default SecondNav