import React, {Component} from 'react'

class InputBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
        <input type='text' id='inputbox'></input>
        </div>
    }
}

export default InputBox