import React from 'react';



class Tabs2 extends React.Component {

    state ={
        currentTabContent: this.props.tabsProp[0].content
    }

    handleClick = (event)=> {
        this.setState({currentTabContent: event.target.value})
    }

    renderButtonArray = ()=> {
         const myButtons = this.props.tabsProp.map((tab,index)=> {
            return(
                <button onClick={this.handleClick} key={index} value={tab.content}>{tab.name}</button>
            )
        })
        return myButtons;
    }



    render(){
        return (
            <div>
                <div>
                {this.renderButtonArray()}
                </div>
                
                <div>
                {this.state.currentTabContent}
                </div>
            </div>
        )
    }
}




export default Tabs2;