import React, { Component } from 'react';
import './App.css';
const thing = require('./rankLogic');
import Copybutton from './copyButton';


class Tinkle extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleKeyDown(event){
        if(event.keyCode === 9){
            var cursor = event.target.selectionStart;
            let newValue = event.target.value.slice(0,cursor) + '    ' + event.target.value.slice(cursor);
            event.preventDefault();
            this.setState({value: newValue});
        }
    }

    handleBlur(event){
        event.target.focus();
    }

    render() {
        let specs = thing(this.state.value);
        return (
            <div className="container">
                <textarea onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.state.value} onBlur={this.handleBlur} className="spec" autoFocus/>
                <textarea value={specs} className="result" />
                <Copybutton copymaterial={specs}/>
            </div>
        );
    }
}

export default Tinkle;
