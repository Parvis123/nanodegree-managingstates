import React, { Component } from 'react';

class Score extends Component {


    render() {
        return (
            <div>
                <button onClick={() => this.props.handleAnswer(true)}>True</button>
                <button onClick={() => this.props.handleAnswer(false)}>False</button>
                <p className="text">
                Your Score: {this.props.correctAnswer}/{this.props.noQuestions}
                </p>
            </div>
        );
    }
}

export default Score;