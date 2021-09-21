import React from 'react'


const Header = ({ props }) => {
  // console.log('props is ', props)
  // console.log("saoijfd")
  return (
    <h1>{props.name}</h1>
  )
}

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(function(sum, part) { 
    return sum + part.exercises
  }, 0)
  console.log("tE", totalExercises)
  return(
    <p><b>Total of {totalExercises} exercises</b></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {

  const partsArr = course.parts
  
  console.log("pArr", partsArr)
  return (
    <div>
      {partsArr.map(item => <Part key={item.id} part={item} /> )}
      <Total course={course} />
    </div>
  )
}
const Course = ({ course }) => {
    console.log(course.name)
    return ( 
      
      <div> 
      <Header props ={course} /> 
      <Content course = {course} /> 
       </div>
    )
  }

export default Course