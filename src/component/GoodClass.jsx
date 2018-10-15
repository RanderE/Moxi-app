import React,{Component} from 'react';
import axios from 'axios';
import ListProClass from './ListProClass'


class GoodClass extends Component{
    componentDidMount(){
        axios.get('http://api.moximoxi.net/api/Category/ProClassCategory').then(res=>{
            // console.log(res.data.ReturnObjects.result)
            this.setState({
                goodClass:res.data.ReturnObjects.result,
            })
        })
    }


    constructor(){
        super();
        this.state = {
            goodClass:[]
        }

    }
    
    render(){
        console.log(ListProClass.offsetHeight)
        return <ul className="ListProClass">
            {
                this.state.goodClass.map(item => {
                    return <li key={item.proClassID}>
                        <a href="#" className="classItem">
                            <img src={'./imgs/'+item.proClassID+'.png'} width="100%"/>
                            <div className="goodhead" ><p>{item.proClassName}</p></div>
                        </a>
                        <ListProClass goodClass={item.ThirdJsons}/>
                        <div className="classifyMore">点击显示更多分类</div>
                </li>
                }) 
            }  
        </ul>
    }
}


export default GoodClass