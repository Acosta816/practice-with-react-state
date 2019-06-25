import React from 'react';




class Rgun extends React.Component {

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    handleClick = ()=> {
        this.setState({spinningTheChamber: true,
                        });
        this.TimeOut = setTimeout(()=>{
        this.setState({chamber: Math.ceil(Math.random() * 8),
                        spinningTheChamber: false})
        },2000); 
    }

    renderWords(){
        if(this.state.spinningTheChamber === true){
            return(
                <p>Spinning the Chamber and pulling the Trigger...</p>
            )
        } else if(this.state.chamber === this.props.bulletChamber){
            return (
                <p>BANG!!!!!</p>
            ) 
        } else {
            return (
                <p>you are safe</p>
            )
        }
    }

    componentWillUnmount(){
        clearTimeout(this.TimeOut);
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Pull the Trigger!</button>
                {this.renderWords()}
            </div>
        )
    }
}


export default Rgun;