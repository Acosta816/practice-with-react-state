import React from 'react';
import ReactDOM from 'react';
import Clock from './state/Clock';
import Clock2 from './state/Clock2';
import Counter from './state/Counter';
import HelloWorld from './state/state-drills/HelloWorld';
import Bomb from './state/state-drills/Bomb';
import Rgun from './state/state-drills/Rgun';



class App extends React.Component {
  render(){
    return(

      <div className="App">
        Hello I am App being rendered by Index.js
        <Clock2 />
        <Counter step={5} />
        <Counter /> {/*passed in without props*/}
        <HelloWorld />
        <Bomb />
        <Rgun bulletChamber={5} />
      </div>
    )
  } //end of render method

}

export default App;