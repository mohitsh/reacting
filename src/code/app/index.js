import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <p> They have arrived (via rendering) </p>
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));
