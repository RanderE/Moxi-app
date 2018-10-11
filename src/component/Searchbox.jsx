import React from 'react';
import { Icon } from 'antd-mobile';
import {withRouter,Route} from 'react-router-dom';
import Search from './Search';

class SearchBarExample extends React.Component {
    constructor(){
        super();
        this.state = {
            placeholder:'搜索你想知道的内容'
        };
        this.go = this.go.bind(this)
    }

    go(path){
        let {history} = this.props;
        console.log(path)
        history.push({pathname:path})
    }

    render() {
        return <div>
            <label htmlFor="searchbox" onClick={()=>{this.go('/search')}}>
                <Icon type="search" size="sm" color="#bbb"/>
                <input type="text" name="searchbox" placeholder={this.props.placeholder}/> 
                <Route>
				    <Route path="/search" component={Search} />
			    </Route>
            </label>
               
        </div>;
    } 
}

SearchBarExample.defaultProps = {
    placeholder:'搜索你想知道的内容'
}
SearchBarExample = withRouter(SearchBarExample)

export default SearchBarExample