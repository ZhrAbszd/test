import React,{Component} from 'react';

export default class Button extends Component{
    render(){
        console.log(this.props)
        return(
            <div className='buttons'>
                <button className='btn' onClick={this.props.clickHandler}>{this.props.title}</button>
            </div>
        )
    }
}