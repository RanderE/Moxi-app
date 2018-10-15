import React,{Component} from 'react';
import Banner from './Banner'
import Features from './Features'
import axios from 'axios';
import TenGoodList from './TenGoodList'



class Recommend extends Component{
    constructor(){
        super()
        this.state = {
            imgurl:{},
            goodlist:[],
            imgHeight:'120px'
        }
        
    }


    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd=10').then(res=>{
            this.setState({
                imgurl:res.data.ReturnObjects.result.ActivityImgList[0],
                goodlist:res.data.ReturnObjects.result.ActivityImgList[0].ClassLabelList[0].HomeProductList
            })
        })

    }



    render(){
        return <div className="recommend">
           <Banner/>
           <Features/>
           <a href="#" className="spike">
                <img src={this.state.imgurl.ImageUrl}
                    style={{ width: '100%'}}
                    onLoad={(e) => {
                    window.dispatchEvent(new Event('resize'));
                    //用图片的宽度来撑开容器
                    this.setState({ imgHeight:e.target.clientheight});
                }}/>
           </a>
           <TenGoodList goodlist={this.state.goodlist}/>
        </div>
    }
}


export default Recommend