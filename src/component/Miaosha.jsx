//秒杀跳转的页面
import React,{Component} from 'react';
import Header from './Header';
import TenGoodList from './TenGoodList';
import axios from 'axios';
import {NavLink,Route} from 'react-router-dom';
import {HashRouter } from 'react-router-dom';

class Miaosha extends Component{
    //引入数据
    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeMenuNavigation?ProClassId=209&pageIndex='+this.state.num).then(res=>{
            console.log(res.data.ReturnObjects.result[0].ClassLabelList[0].HomeProductList)
            this.setState({
                imgurl:res.data.ReturnObjects.result[0].BannerImagesUrl,
                goodlist:res.data.ReturnObjects.result[0].ClassLabelList[0].HomeProductList
            })
        })
    }


    constructor(){
        super();
        this.state = {
            num:1,
            imgurl:'http://images.moximoxi.com/column/201805/5636620679279971856.jpg',
            imgHeight:'120px',
            goodlist:[]
        }
    }





    render(){
        return <div className="miaosha">
            {/* 头部条和跳转 */}
            <Header></Header>
            {/* 路由跳转 */}
            <NavLink to={{pathname:'/tabbar/miaosha' }} className="spike margin-top">
            <img src={this.state.imgurl}
                style={{ width: '100%'}}
                onLoad={(e) => {
                window.dispatchEvent(new Event('resize'));
                //用图片的宽度来撑开容器
                this.setState({ imgHeight:e.target.clientheight});
                }}/>
            </NavLink>
            <Route path="/miaosha" component={Miaosha}></Route>
            <HashRouter>
                <TenGoodList goodlist={this.state.goodlist}/>
            </HashRouter> 
        </div>
    }
}


export default Miaosha