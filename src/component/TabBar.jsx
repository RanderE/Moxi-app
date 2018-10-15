import { TabBar } from 'antd-mobile';
import React from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

import Home from './Home'
import List from './List'
import News from './New'
import Cart from './Cart'
import Mine from './Mine'

class TabBarExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'brownTab',
      hidden: false,
      fullScreen: true,
      menu:[
        {
          id:1,
          title:"首页",
          icon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/index.png) center center /  22px 20px no-repeat'
              },
          selectedIcon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/indexAct.png) center center /  21px 21px no-repeat'
          },
          // selected:this.state.selectedTab === 'brownTab',
          selectedTab: 'brownTab',
          path:'/home',
          component:Home
        },
        {
          id:2,
          title:"分类",
          icon:{
            width: '22px',
            height: '22px',
            background: 'url(./imgs/classify.png) center center /  21px 21px no-repeat'
              },
          selectedIcon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/classifyAct.png) center center /  21px 21px no-repeat'
          },
          // selected:this.state.selectedTab === 'brownTab',
          selectedTab: 'blueTab',
          path:'/list',
          component:List
        },
        {
          id:3,
          title:"发现",
          icon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/activity.png) center center /  21px 21px no-repeat'
              },
          selectedIcon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/activityAct.png) center center /  21px 21px no-repeat'
          },
          // selected:this.state.selectedTab === 'brownTab',
          selectedTab: 'redTab',
          path:'/news',
          component:News
        },
        {
          id:4,
          title:"购物车",
          icon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/shoppingCart.png) center center /  21px 21px no-repeat'
              },
          selectedIcon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/shoppingCartAct.png) center center /  21px 21px no-repeat'
          },
          // selected:this.state.selectedTab === 'brownTab',
          selectedTab: 'greenTab',
          path:'/cart',
          component:Cart
        },
        {
          id:5,
          title:"首页",
          icon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/userCenter.png) center center /  21px 21px no-repeat' 
              },
          selectedIcon:{
            width: '22px',
            height: '22px',
            background:'url(./imgs/userCenterAct.png) center center /  21px 21px no-repeat' 
          },
          // selected:this.state.selectedTab === 'brownTab',
          selectedTab: 'yellowTab',
          path:'/mine',
          component:Mine
        }
      ],
      banner:[]
    }
    this.go = this.go.bind(this);
  }


  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '0', textAlign: 'center' }}></div>
    );
  }

  go(path){
    let {history} = this.props;
    history.push({pathname:path})
  }

  render() {
    return   <TabBar
    unselectedTintColor="#949494"
    tintColor="#FF3333"
    barTintColor="white"
    hidden={this.state.hidden}
  >
    {
      this.state.menu.map(item=>{
        return <TabBar.Item
        title={item.title}
        key={item.id}
        icon={{ uri: item.background }}
        icon={(<div style={{
          width:item.icon.width,
          height :item.icon.height,
          background: item.icon.background}}
        />)
        }
        selectedIcon={<div style={{
          width:item.selectedIcon.width,
          height :item.selectedIcon.height,
          background: item.selectedIcon.background}}
        />
        }
        selected={this.state.selectedTab === item.selectedTab}
        onPress={() => {
          this.go(item.path)
          this.setState({
            selectedTab: item.selectedTab,
          });
        }}
        >
        <Switch>
          <Route path={item.path} component={item.component} />
          <Redirect from="/" to="/home" exact />
          {/* <Redirect to="/home"></Redirect> */}
          
        </Switch>
        </TabBar.Item>
      })
    }
  </TabBar>
      // <div style={{ position: 'fixed', width: '100%', top: 0 ,height:'300%' }}>




      {/* </div> */}
    
  }
}

TabBarExample = withRouter(TabBarExample)
// ReactDOM.render(<TabBarExample />, mountNode);
export default TabBarExample