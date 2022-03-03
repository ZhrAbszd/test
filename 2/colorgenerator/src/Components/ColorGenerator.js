import React,{Component} from 'react';
import Button from './Button';
import Color from './Color';

class ColorGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            colors : []
        }
        this.randomColor = this.randomColor.bind(this);
    }

    randomColor(){
        let randomHexColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
        let colorArray = [];
        colorArray.push(randomHexColor);
        this.setState( state => ({
            colors : [...state.colors , colorArray]
        }));
    }

    render(){
        return(
          <div>
              <Button addNewColor={this.randomColor}/>
              {this.state.colors.map(item => <Color hexcodeColor={item}/>)}
          </div>
        )
    }
}
export default ColorGenerator;