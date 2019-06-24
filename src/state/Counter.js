import React from 'react';





class Counter extends React.Component {

    static defaultProps = {
            step: 1,
    }


    state = {
        count: 0,
    }

    adder = ()=> {

        return (
            this.setState({count: this.state.count+this.props.step})
        )
    }


    render(){
        return(
            <div>
                <button onClick={this.adder}>Click ME!</button>
                <div>{this.state.count}</div>
            </div>
            
        )
    }
}


export default Counter