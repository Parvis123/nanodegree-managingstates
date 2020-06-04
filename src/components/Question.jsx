import React, { Component } from 'react';

class Question extends Component {
    render() {
    const { value1, value2, value3, proposedAnswer } = this.props;
        return (
            <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
        );
    }
}

export default Question;