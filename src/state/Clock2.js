import React from 'react';




class Clock2 extends React.Component {

    state = {
        timeStamp: new Date().toLocaleString(),
    }

    componentDidMount(){
        this.currentTimeStamp = setInterval( () => {
            this.setState({timeStamp: new Date().toLocaleString()})
        }, 1000);
    }
    

    componentWillUnmount() {
        clearInterval(this.currentTimeStamp);
    }

    render(){
        return (
            <div>
                {this.state.timeStamp}
            </div>
        )
    }



}


export default Clock2;