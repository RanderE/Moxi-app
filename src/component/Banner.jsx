import React,{Component} from 'react';
import axios from 'axios';
import { Carousel } from 'antd';


class Banner extends Component {
    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd=10').then(res=>{
            console.log(res.data.ReturnObjects.result.BnnerImgList)
            this.setState({
                data:res.data.ReturnObjects.result.BnnerImgList
            })
        })
    }



    constructor(){
        super();
        this.state = {
            data:[
                // {Id: 768,ImageUrl: "http://images.moximoxi.com/column/201809/5636739267593328717.png",Title: "代购代拍免手续费"},
                // {Id: 759,ImageUrl: "http://images.moximoxi.com/column/201805/5636633577733489827.jpg",Title: "味之素"},
                // {Id: 766,ImageUrl: "http://images.moximoxi.com/column/201807/5636681115937209180.png",Title: "预约服务"}
            ],
            imgHeight:'170px'
        }
    }

	render(){
		return <Carousel
            infinite
            autoplay
            dots
            effect="fade">
                {
                    this.state.data.map(item => (
                        <a key={item.Id} href="#">
                            <img src={item.ImageUrl}
                            style={{ width: '100%', verticalAlign: 'top' ,height:this.state.imgHeight}}
                            onLoad={(e) => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            //用图片的宽度来撑开容器
                            this.setState({ imgHeight:e.target.clientheight});
                            }}/>
                        </a>
                    ))
                }
                    {/* <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div> */}

            </Carousel>


	}
}

export default Banner