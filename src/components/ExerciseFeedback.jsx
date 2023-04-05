import React from 'react'

const ExerciseFeedback = ({answer, feedbackA, feedbackB, clickReset}) => {
  return (
    <>
        <div className="row">
          <div className="col-12">
            <h2>Your answer</h2>
            <p>{answer.choice}: {answer.answer}</p>
            <p>By: {answer.username} {`(${answer.email})`})</p>
          </div>
        </div>

    
        <div className="row">
          <div className="col-12">
          <h2>Feedback</h2>
          </div>
          <div className="col-6">
            <p><b>{feedbackA.correct 
                ? "Choice A is Correct!"
                : "Choice A is incorrect!"}</b></p>
            
            <p>{feedbackA.explanation}</p>
          </div>
          <div className="col-6">
          <p><b>{feedbackB.correct 
                ? "Choice B is Correct!"
                : "Choice B is incorrect!"}</b></p>
            
            <p>{feedbackB.explanation}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={clickReset}>
            Reset exercise
        </button>
    </>
  )
}

export default ExerciseFeedback