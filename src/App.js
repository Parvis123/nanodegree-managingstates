import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    const questionArray = this.newQuestion();
    this.state = {
      value1:questionArray[0],
      value2:questionArray[1],
      value3:questionArray[2],
      proposedAnswer: questionArray[3],
      correctAnswer: 0,
      noQuestions: 0,
    };
  }

  newQuestion = () =>{
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1, value2, value3, proposedAnswer];
  };

  updateStateForNextQuestion = newQuestionArray => {
    this.setState( () => ({
      value1:newQuestionArray[0],
      value2:newQuestionArray[1],
      value3:newQuestionArray[2],
      proposedAnswer:newQuestionArray[3],
    }))
  }

  handleAnswer = () => {
  const { correctAnswer, noQuestions, proposedAnswer, value1, value2, value3} = this.state;
    if (proposedAnswer === value1+value2+value3) {
      this.setState({correctAnswer: correctAnswer + 1});
    }
      this.setState({noQuestions: noQuestions + 1});
  }
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleAnswer}>True</button>
          <button onClick={this.handleAnswer}>False</button>
          <p className="text">
            Your Score: {this.state.correctAnswer}/{this.state.noQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
