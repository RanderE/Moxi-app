import React,{Component} from 'react';
import Miaosha from './Miaosha';
import {NavLink,Route} from 'react-router-dom';


class MiaoshaArea extends Component{
    constructor(){
        super();
        this.state = {
            imgHeight:'120px'
        }
    }

    render(){
        return  <div>
            <NavLink to={{pathname:'/tabbar/miaosha' }} className="spike">
            <img src={this.props.imgurl.ImageUrl}
                style={{ width: '100%'}}
                onLoad={(e) => {
                window.dispatchEvent(new Event('resize'));
                //用图片的宽度来撑开容器
                this.setState({ imgHeight:e.target.clientheight});
            }}/>
        </NavLink>
        <Route path="/miaosha" component={Miaosha}></Route>  

   </div>
    }
}


export default MiaoshaArea