import React, {useState, useEffect} from 'react'
import Exercise from '../components/Exercise'
import InfoSection from '../components/InfoSection'
import getData from '../data/dataservice'




const InfoPage = () => {

  const [info, setInfo] = useState()
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [reset, setReset] = useState(false)


  useEffect(() => {
    getData().then(data => {
      console.log("Trigger effect")
      setInfo(data)
      setIsLoading(false)
      setReset(false)
    })
  }, [reset])


  function handleReset(){
    console.log("reset")
    setReset(true)
    setCurrentExercise(currentExercise +1)
  }


  return (
    <>
      {!isLoading ? 
        <div className='container'>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <InfoSection 
          title="Goals" 
          {...info.goals} />
        <br></br>
        <InfoSection 
            title="Theory" 
            {...info.theory} />
        <br></br><hr></hr>
        <Exercise ex={info.exercises[currentExercise]}
          clickReset={handleReset}
        />
        </div> 
      : <h1>Is Loading...</h1>}
    </>
    
  )
}

export default InfoPage