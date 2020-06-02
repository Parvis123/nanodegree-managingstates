import React, { Component } from 'react';

class Question extends Component {
    constructor(props){
        super(props);
        const questionArray = this.newQuestion();
        this.state = {
            value1:questionArray[0],
            value2:questionArray[1],
            value3:questionArray[2],
            proposedAnswer: questionArray[3],
        }
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

    render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
        return (
            <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
        );
    }
}

export default Question;