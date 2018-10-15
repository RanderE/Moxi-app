import React,{Component} from 'react';
import { Tabs, Badge } from 'antd-mobile';
import {HashRouter as Router} from 'react-router-dom';


import Recommend from './Recommend';
import Bonded from './Bonded';
import Jpgoods from './Jpgoods';
import Chgoods from './Chgoods';
import Hkgoods from './Hkgoods';



const tabs = [
    { title: <Badge >推荐 </Badge> },
    { title: <Badge >保税区闪送</Badge> },
    { title: <Badge >中国现货</Badge> },
    { title: <Badge >日本现货</Badge> },
    { title: <Badge >香港直邮</Badge> },
  ];
  


class Nav extends Component{
    constructor(){
        super()
        this.state = {
            menu:[
                {id:1,Content:<Recommend/>,name:'Recommend'},
                {id:2,Content:<Bonded/>,name:'Bonded'},
                {id:3,Content:<Chgoods/>,name:'Chgoods'},
                {id:4,Content:<Jpgoods/>,name:'Jpgoods'},
                {id:5,Content:<Hkgoods/>,name:'Hkgoods'},

            ]
        }
    }


    render(){
        return <nav className="nav">
            <Tabs tabs={tabs}
            initialPage={0}
            tabBarPosition="top"
            tabBarUnderlineStyle={{border:'1px solid red'}}
            >
            {
                this.state.menu.map(item=>{
                    return <div key={item.id} className="navItem" >
                        <Router>
                        {item.Content}
                        </Router>
                    </div>
                })
            }
            </Tabs>
        </nav>
    }
}


export default Nav






