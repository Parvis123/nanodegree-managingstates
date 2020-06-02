import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
          correctAnswer: 0,
          noQuestions: 0,
        };
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
        return (
            <div>
                <button onClick={() => this.handleAnswer(true)}>True</button>
                <button onClick={() => this.handleAnswer(false)}>False</button>
                <p className="text">
                Your Score: {this.state.correctAnswer}/{this.state.noQuestions}
                </p>
            </div>
        );
    }
}

export default Score;