import React from 'react';





class HelloWorld extends React.Component {

    state = {
        who: "world"
    }

    clickEvent = (event)=> {
        this.setState({
            who: event.target.innerText
        })
    }

    render(){
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.clickEvent}>David</button>
                <button onClick={this.clickEvent}>Leilanni</button>
                <button onClick={this.clickEvent}>Lobo</button>
            </div>
        )
    }
}


export default HelloWorld;