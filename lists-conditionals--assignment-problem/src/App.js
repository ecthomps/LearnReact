import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'


class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
    
  }

  deleteCharHandler = (charIndex) => {
    
    const newCharList = this.state.userInput.split('')
    newCharList.splice(charIndex, 1)
    const updateTxt = newCharList.join('')
    this.setState({userInput: updateTxt})
  }

  render() {

    const charList = this.state.userInput
                         .split('')
                         .map((char, index) => {
        return <Char character={char} 
                     key={index}
                     clicked={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <input  type="text"
                onChange={this.inputChangedHandler}
                value={this.state.userInput} />
        <p>Your text: {this.state.userInput}</p>
        <Validation strLen={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
