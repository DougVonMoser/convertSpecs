import React, { Component } from 'react';
import ClipBoard from 'clipboard';


class Copybutton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        new ClipBoard('.copy',{
            text: function(trigger){
                // console.dir(this.props)
                return 'testing motherfucker';
            }
        })
    }


    render() {
        return (<div>
            <button className="copy" onClick={this.handleClick}></button>
        </div>
        )
    }
}

export default Copybutton;