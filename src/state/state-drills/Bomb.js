import React from 'react';





class Bomb extends React.Component {

    state = {
        count: 10

    }

    componentDidMount(){

        this.CountDown = 
            setInterval(() => {
                this.setState({ count: this.state.count-1})
            }, 1000);
        
    }

    componentWillUnmount(){
        clearInterval(this.CountDown)
    }

    renderWho() {
        if(this.state.count <= 0){
            return "BOOM!!!"
        } else {
            if(this.state.count % 2 === 0){
                return `Tick    ${this.state.count}`
            } else {
                return `Tock    ${this.state.count}`
            }
        }
         
    }

    render(){
        return(

            <div>
                <p>{this.renderWho()}</p>
            </div>
        )
    }
}



export default Bomb;