import React,{Component} from 'react';
import Banner from './Banner'
import MiaoshaArea from './MiaoshaArea'
import Features from './Features'
import axios from 'axios';
import TenGoodList from './TenGoodList'
import {HashRouter } from 'react-router-dom';


class Recommend extends Component{
    constructor(){
        super()
        this.state = {
            imgurl:{},
            goodlist:[],
            bannerdata:[]
        }
        
    }


    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd='+10).then(res=>{
            console.log(res.data.ReturnObjects.result.ActivityImgList[0])
            this.setState({
                imgurl:res.data.ReturnObjects.result.ActivityImgList[0],
                goodlist:res.data.ReturnObjects.result.ActivityImgList[0].ClassLabelList[0].HomeProductList,
                bannerdata:res.data.ReturnObjects.result.BnnerImgList
            })
        })

    }



    render(){
        return <div className="recommend">
            <HashRouter>
                <Banner data={this.state.bannerdata}/>
            </HashRouter>
            <HashRouter>
                <Features/>
            </HashRouter>
            <HashRouter>
                <MiaoshaArea imgurl={this.state.imgurl}/>
            </HashRouter>
           <HashRouter>
                <TenGoodList goodlist={this.state.goodlist}/>
           </HashRouter>
        </div>
    }
}


export default Recommend