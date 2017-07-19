import React, { Component } from 'react';
import Clipboard from 'clipboard';

class Copybutton extends Component {
    constructor(props){
        super(props);
        this.thingy = null;
        this.render = this.render.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidUpdate(){
        let stupid = document.querySelector('.stupid');
        this.thingy = new Clipboard(stupid);
    }


    render() {
        return (
            <div>
                <div className="stupid" data-clipboard-text="who the fuck knows"></div>
                <button className="btn"></button>

            </div>
        )
    }
}

export default Copybutton;
