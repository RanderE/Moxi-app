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
        }
      ]
    }
    this.go = this.go.bind(this);
  }


  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '0', textAlign: 'center' }}>
        {/* <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        ></a> */}
      </div>
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
          {/* {
            this.state.menu.map(item=>{
              return <TabBar.Item
              title={item.title}
              key={item.id}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(./imgs/index.png) center center /  22px 20px no-repeat' }}
              />
              }
              selectedIcon={<div style={{background={}}}
              />
              }
              >

              </TabBar.Item>
            })
          } */}
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./imgs/index.png) center center /  22px 20px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./imgs/indexAct.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'brownTab'}
            // badge={1}
            onPress={() => {
              console.log(666)
              this.go('/home')
              this.setState({
                selectedTab: 'brownTab',
              });
              
            }}
            data-seed="logId"
          >
            {this.renderContent('Home')}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/news" component={News} />
              <Route path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              {/* <Redirect to="/home"></Redirect> */}
              
            </Switch>
          </TabBar.Item>
          <TabBar.Item
            title="分类"
            key="List"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./imgs/classify.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./imgs/classifyAct.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.go('/list')
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/news" component={News} />
              <Route path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              {/* <Redirect to="/home"></Redirect> */}
            </Switch>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./imgs/activity.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./imgs/activityAct.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="发现"
            key="News"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.go('/news')
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/news" component={News} />
              <Route path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              {/* <Redirect to="/home"></Redirect> */}
            </Switch>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./imgs/shoppingCart.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./imgs/shoppingCartAct.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="Cart"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.go('/cart')
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/news" component={News} />
              <Route path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              {/* <Redirect to="/home"></Redirect> */}
            </Switch>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './imgs/userCenter.png' }}
            selectedIcon={{ uri: './imgs/userCenterAct.png' }}
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.go('/mine')
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('Mine')}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/news" component={News} />
              <Route path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              {/* <Redirect to="/home"></Redirect> */}
            </Switch>
          </TabBar.Item>
        </TabBar>



      </div>
    );
  }
}

TabBarExample = withRouter(TabBarExample)
// ReactDOM.render(<TabBarExample />, mountNode);
export default TabBarExample