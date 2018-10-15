//引入工具
import React,{Component} from 'react';
import axios from 'axios';
import {NavLink,Route} from 'react-router-dom';
import {HashRouter } from 'react-router-dom';
import { Tabs } from 'antd-mobile';

// 引入组件
import OtherPage from './OtherPage';
import TenGoodList from './TenGoodList';


const tab = [
    { title: '化妆品', sub: '1' },
    { title: '保健品', sub: '2' },
  ];


class Hkgoods extends Component{
    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeMenuNavigation?ProClassId=257&pageIndex='+this.state.num).then(res=>{
            console.log(res.data.ReturnObjects.result[0])
            this.setState({
                imgurl:res.data.ReturnObjects.result[0].BannerImagesUrl,
                goodlist1:res.data.ReturnObjects.result[0].ClassLabelList[0].HomeProductList,
                goodlist2:res.data.ReturnObjects.result[0].ClassLabelList[1].HomeProductList
            })
        })
    }

    constructor(){
        super();
        this.state = {
            num:1,
            imgurl:'http://images.moximoxi.com/column/201805/5636620679279971856.jpg',
            imgHeight:'120px',
            goodlist1:[],
            goodlist2:[],
            content:'保税区闪送'
        }
    }

    render(){
        return <div className="hkgoods">
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
            <Tabs tabs={tab}
                initialPage={0}
                tabBarPosition="top"
                tabBarUnderlineStyle={{border:'none'}}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <HashRouter>
                        <TenGoodList goodlist={this.state.goodlist1}/>
                    </HashRouter> 
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <HashRouter>
                        <TenGoodList goodlist={this.state.goodlist2}/>
                    </HashRouter> 
                </div>
            </Tabs>    
        </div>
    }
}


export default Hkgoods
