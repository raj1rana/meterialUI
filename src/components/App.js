import React ,{Component, Fragment} from "react";
import {Header, Footer} from './layouts'
import Exercises from './Exercises'
import {muscles, exercises} from '../store'

export default class extends Component{
  state = {
      exercises
  }

  getExercisesByMuscles(){
return this.state.exercises.reduce((exercises, exercise) => {
  const {muscles} = exercise

    exercises[muscles] = exercises[muscles]
  ? [...exercises[muscles], exercise]:[exercise]
return exercises
    },{})
  }
render(){
  return (
    <Fragment>
      <Header />
        <Exercises />
      <Footer muscles={muscles} />

    </Fragment>

  )
}
}
