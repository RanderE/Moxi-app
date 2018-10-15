import React,{Component} from 'react';
import GoodClass from './GoodClass';
import Brand from './Brand';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';



const tab = [
    { title: <Badge >分类</Badge> },
    { title: <Badge >品牌</Badge> },
]


class ListTab extends Component{
    constructor(){
        super();
        this.state = {
            menu : [
                {id:1,Content:<GoodClass/>,name:'GoodClass'},
                {id:2,Content:<Brand/>,name:'Brand'},
            ]
        }
    }

    render(){
        return <div>
            <Tabs tabs={tab}  
                initialPage={0}
                tabBarPosition="top"
                tabBarUnderlineStyle={{border:'1px solid red'}}
                renderTab={tab => <span>{tab.title}</span>}
                >
                {
                    this.state.menu.map(item => {
                        return <div className="listTab" key={item.id} >
                            {item.Content}
                    </div>
                    }) 
                }  


            </Tabs>
        </div>
    }

}

export default ListTab