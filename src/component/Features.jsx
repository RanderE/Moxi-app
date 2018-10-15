import React,{Component} from 'react';

class Features extends Component{
    constructor(){
        super();
        this.state = {
            data:[
                {id:1,url:'./imgs/sign.png',content:'每日签到'},
                {id:2,url:'./imgs/brand.png',content:'品牌一览'},
                {id:3,url:'./imgs/shequ.png',content:'代购代拍'},
                {id:4,url:'./imgs/share.png',content:'天天分享'},
            ]
        }
    }

    render(){
        return <div className="features">
            <section>
                <ul>
                    {
                        this.state.data.map(item=>{
                            return <li key={item.id}>
                                <a href="#">
                                    <img src={item.url} alt=""/>
                                    <span>{item.content}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </section>
        </div>
    }
}

export default Features