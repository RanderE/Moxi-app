//引入工具
import React,{Component} from 'react';
import axios from 'axios';
import {NavLink,Route} from 'react-router-dom';
import {HashRouter } from 'react-router-dom';


// 引入组件
import OtherPage from './OtherPage';
import TenGoodList from './TenGoodList';
import SecondNav from './SecondNav';


class Chgoods extends Component{
    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeMenuNavigation?ProClassId=246&pageIndex='+this.state.num).then(res=>{
            console.log(res.data.ReturnObjects.result[0].BannerImagesUrl)
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
            goodlist:[],
            content:'中国现货'
        }
    }

    render(){
        return <div className="bonded">
            {/* 图片 */}
            <NavLink to={{pathname:'/otherPage' }} className="spike">
            <img src={this.state.imgurl}
                style={{ width: '100%'}}
                onLoad={(e) => {
                window.dispatchEvent(new Event('resize'));
                //用图片的宽度来撑开容器
                this.setState({ imgHeight:e.target.clientheight});
                }}/>
            </NavLink>
            <Route path="/otherPage" component={OtherPage}></Route>
            {/* 中间的nav */}
            <SecondNav content={this.state.content}/>
            <HashRouter>
                <TenGoodList goodlist={this.state.goodlist}/>
            </HashRouter> 
        </div>
    }
}


export default Chgoods