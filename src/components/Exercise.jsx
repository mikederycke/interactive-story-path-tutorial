import React, {useState, useRef, useEffect} from 'react'
import { Button, Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import YoutubeVideo from './YoutubeVideo'
import ExerciseFeedback from './ExerciseFeedback'

const Exercise = ({ex, clickReset}) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [choice, setChoice] = useState('A')
  const [answer, setAnswer] = useState('')
  const [exComplete, setExComplete] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    setExComplete(false)
  }, [ex])
  
  const submitAnswer = () => {
    if(!textareaRef.current.value){
      textareaRef.current.focus()
    }else{
      let newAnswer = {
        choice: choice,
        answer: textareaRef.current.value,
        username: username,
        email: email
      }
      setAnswer(newAnswer)
      setExComplete(true)
    }
  }
  

  return (
    <>
    {!exComplete ?
    <div>
     
        <h2>{ex.title}</h2>
        <p>{ex.description}</p>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control 
              placeholder="email" 
              onChange={(e) => setEmail(e.target.value)}
            />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
            <Form.Control placeholder="Full name" 
              onChange={(e) => setUsername(e.target.value)}
            />
        </InputGroup>


        <hr></hr>
        <YoutubeVideo videoId={ex.startVideoId} />
        <div className="row">
            <div className="col">
            <p>Choice A: {ex.titleChoiceA}</p>
            <YoutubeVideo videoId={ex.videoIdChoiceA} />
            </div>
            <div className="col">
            <p>Choice B: {ex.titleChoiceB}</p>
            <YoutubeVideo videoId={ex.videoIdChoiceB} />
            </div>
        </div>



        <p>Which video is the correct choice? Why?</p>
        
        <div key={`inline-radios`} className="mb-3" 
          onChange={(e) => setChoice(e.target.id)}>
          <Form.Check
            inline
            defaultChecked
            label="A"
            name="group1"
            type="radio"
            id={`A`}
          />
          <Form.Check
            inline
            label="B"
            name="group1"
            type="radio"
            id={`B`}
          />
        </div>
      
        <FloatingLabel controlId="floatingTextarea2" label="Your answer">
        <Form.Control 
            ref={textareaRef}
            as="textarea"
            placeholder="Your answer..."
            style={{ height: '100px' }}
        />
        </FloatingLabel>
        <br></br>
        <Button variant="primary" onClick={() => submitAnswer()}>
            Send answer
        </Button>
    
    </div>
    : <ExerciseFeedback 
        answer={answer}
        feedbackA={ex.feedbackA}
        feedbackB={ex.feedbackB}
        clickReset={clickReset}
    /> }
    </>
  )
}

export default Exercise