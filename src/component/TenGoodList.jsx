import React,{Component} from 'react';

import {Route,NavLink} from 'react-router-dom';
import GoodItem from './GoodItem'


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
                            <NavLink to={{pathname:'/goodItem', search:'?'+item.Id,state:{Id:item.Id} }}>
                            <img src={item.ProImg} alt=""/>  
                            <br/>
                            <span className="area">{item.ProductFrom}</span>
                            <h5>{item.ProName}</h5>
                            <p className="price">
                                <span className="nowPrice">￥{item.ProUnitPrice}</span>
                                <del>￥{item.ReferPrice}</del>
                            </p>
                            </NavLink>
                            <Route path="/goodItem" component={GoodItem}></Route>
                        </li>
                    })
                }
            </ul>
        </main>
    }
}


export default TenGoodList