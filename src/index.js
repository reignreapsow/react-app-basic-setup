import React from 'react';
import ReactDOM from 'react-dom';
import './../sass.config'


const title = "Default React App";
const subtitle = 'Put your life in the hands of a computer'
//ES6 Array
const options = ['Thing One', 'Thing Two', 'Thing Three'];



class App extends React.Component {
  render() {
    return (
      <div>
        {/* REFERENCE THE VARIABLES */}
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}





ReactDOM.render(<App />, document.getElementById('root'));