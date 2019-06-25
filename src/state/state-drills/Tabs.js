import React from 'react';





class Tabs extends React.Component {

    state ={
        currentTab: this.props.tabsProp[0].content
    }


    handleClick = (event)=>{
        this.setState({
            currentTab: event.target.value
        })
    }

    buttonsArray = () => {
        const buttonsArray = this.props.tabsProp.map((tab, index) => {
            return(
                <button onClick={this.handleClick} value={tab.content} key={index}>{tab.name}</button>
            )
        });
        return buttonsArray;
    }


    render(){
    



        return(
            <div>
                {this.buttonsArray()}
                <div>{this.state.currentTab}</div>
            </div>
        )
    }
}


export default Tabs;