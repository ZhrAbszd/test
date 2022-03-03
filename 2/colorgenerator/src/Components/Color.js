import React,{Component} from 'react';

export default class Color extends Component{
    render(){
        return(
            <div>
                <h3 style={{backgroundColor: this.props.hexcodeColor}}>{this.props.hexcodeColor}</h3>
            </div>
        )
    }
}