import React,{Component} from 'react';

class ListProClass extends Component{

    
    constructor(){
        super();
        this.state = {

        }

    }
    
    render(){
        // console.log(this.props.goodClass)
        return <div className="classifyTxt limitheight">
            {
                this.props.goodClass.map(item=>{
                    return <a href={'commodityList.html?classify&keyname='+item.proClassName} key={item.proClassID}>{item.proClassName} </a>
                })
            }
        </div>
    }
}


export default ListProClass