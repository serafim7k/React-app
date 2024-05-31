import React from "react";

export default class extends React.Component{
    state = {
        current: 1
    }

    increase = () => {
        if(this.state.current < this.props.max)
            this.setState({current: this.state.current + 1})
        }

    decrease = () => {
        this.setState({current: this.state.current - 1})
    }

    render() {
        return(
            <div>
                {this.state.current} <br/>
                <button type="button" onClick={this.increase}> + </button> <br/>
                <button type="button" onClick={this.decrease}> - </button>
            </div>
        )
    }
}