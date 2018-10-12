import React,{Component} from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';


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
                {id:1,path:'',Content:'111'},
                {id:2,path:'',Content:'111'},
                {id:3,path:'',Content:'111'},
                {id:4,path:'',Content:'111'},
                {id:5,path:'',Content:'111'},

            ]
        }
    }


    render(){
        return <nav className="nav">
            <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            {
                this.state.menu.map(item=>{
                    return <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>{item.Content}</div>
                })
            }

            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of third tab
            </div> */}
            </Tabs>
        </nav>
    }
}


export default Nav






