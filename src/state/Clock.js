import React from 'react';



class Clock extends React.Component {

    state = {
        timeStamp: new Date().toLocaleString(),
    }

    componentDidMount() {
        this.refresh = setInterval(() => {
          this.setState({timeStamp: new Date().toLocaleString()})
        }, 1000)
      }

    componentWillUnmount() {
        clearInterval(this.refresh())
      }
    

    render(){
        return(
            <div>
                {this.state.timeStamp}
            </div>
        )
    }

}

export default Clock;