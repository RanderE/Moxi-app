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
          dataSeed:"logId",
          selectedTab: 'brownTab',
          path:'/home'
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
          dataSeed:"logId",
          selectedTab: 'blueTab',
          path:'/list'
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
          dataSeed:"logId",
          selectedTab: 'redTab',
          path:'/news'
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
          dataSeed:"logId",
          selectedTab: 'greenTab',
          path:'/cart'
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
          dataSeed:"logId",
          selectedTab: 'yellowTab',
          path:'/mine'
        }
      ]
    }
    this.go = this.go.bind(this);
  }


  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '0', textAlign: 'center' }}></div>
    );
  }

  go(path){
    console.log(this)
    let {history} = this.props;
    console.log(history)
    history.push({pathname:path})
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
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
                console.log(666)
                this.go(item.path)
                this.setState({
                  selectedTab: item.selectedTab,
                });
              }}
              data-seed="logId"
              >
              {/* {this.renderContent('Home')} */}
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/news" component={News} />
                <Route path="/cart" component={Cart} />
                <Route path="/mine" component={Mine} />
                {/* <Redirect to="/home"></Redirect> */}
                
              </Switch>
              </TabBar.Item>
            })
          }
        </TabBar>



      </div>
    );
  }
}

TabBarExample = withRouter(TabBarExample)
// ReactDOM.render(<TabBarExample />, mountNode);
export default TabBarExample