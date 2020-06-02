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

  randomNumber = () => Math.floor(Math.random() * 100);

  newQuestion = () =>{
      const value1 = this.randomNumber();
      const value2 = this.randomNumber();
      const value3 = this.randomNumber();
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1, value2, value3, proposedAnswer]
  };

  updateStateForNextQuestion = () => {

    const newQuestionArray = this.newQuestion();
    this.setState({
      value1:newQuestionArray[0],
      value2:newQuestionArray[1],
      value3:newQuestionArray[2],
      proposedAnswer:newQuestionArray[3],
    })
  }

  handleAnswer = (answer) => {
  const { correctAnswer, noQuestions, proposedAnswer, value1, value2, value3} = this.state;
    if ((proposedAnswer === value1+value2+value3) === answer) {
      this.setState({correctAnswer: correctAnswer + 1});
    }
      this.setState({noQuestions: noQuestions + 1});

      this.updateStateForNextQuestion();
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
          <button onClick={() => this.handleAnswer(true)} >True</button>
          <button onClick={() => this.handleAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.correctAnswer}/{this.state.noQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
