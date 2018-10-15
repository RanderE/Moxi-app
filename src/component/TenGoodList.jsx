import React,{Component} from 'react';

// import {HashRouter as Router} from 'react-router-dom';


class TenGoodList extends Component{
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }

    render(){
        // console.log(this.props.goodlist)
        let goods = this.props.goodlist;
        console.log(goods)
        return <main className="tengoodlist">
            <ul>
                {
                    goods.map(item=>{
                        return <li key={item.Id}>
                            <img src={item.ProImg} alt=""/>  
                            <br/>
                            <span className="area">{item.ProductFrom}</span>
                            <h5>{item.ProName}</h5>
                            <p className="price">
                                <span className="nowPrice">￥{item.ProUnitPrice}</span>
                                <del>￥{item.ReferPrice}</del>
                            </p>
                        </li>
                    })
                }
            </ul>
        </main>
    }
}


export default TenGoodList