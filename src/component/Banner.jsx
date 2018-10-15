import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Carousel } from 'antd';


class Banner extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                {Id: 768,ImageUrl: "http://images.moximoxi.com/column/201809/5636739267593328717.png",Title: "代购代拍免手续费"},
                {Id: 759,ImageUrl: "http://images.moximoxi.com/column/201805/5636633577733489827.jpg",Title: "味之素"},
                {Id: 766,ImageUrl: "http://images.moximoxi.com/column/201807/5636681115937209180.png",Title: "预约服务"}
            ],
            imgHeight:'170px'
        }
    }

    go(Id){
        console.log(Id)
        let {history} = this.props;
        history.push({pathname:'/goodItem', search:'?'+Id,state:{Id:Id}})
    }

	render(){
        console.log(this.props.data)
		return <Carousel
            infinite
            autoplay
            dots
            effect="fade">
                {
                    this.props.data.map(item => (
                        <a key={item.Id} onClick={this.go.bind(this,item.Id)}>
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
            </Carousel>


	}
}

Banner = withRouter (Banner)

export default Banner