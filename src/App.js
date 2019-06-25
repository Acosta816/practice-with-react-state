import React from 'react';
import ReactDOM from 'react';
import Clock from './state/Clock';
import Clock2 from './state/Clock2';
import Counter from './state/Counter';
import HelloWorld from './state/state-drills/HelloWorld';
import Bomb from './state/state-drills/Bomb';
import Rgun from './state/state-drills/Rgun';
import Tabs from './state/state-drills/Tabs';
import Tabs2 from './state/state-drills/Tabs2';


const tabArray = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

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
        <Tabs tabsProp={tabArray}/>
        <Tabs2 tabsProp={tabArray} />
      </div>
    )
  } //end of render method

}

export default App;