import React from 'react'

const Header = (props) => {
  console.log(props)
  return ( 
      <h1>Course name: {props.course.name}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p> Part: {props.part}, has {props.exercises} exercises</p>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
  return ( 
    
    
    <div>
      <Part part={props.partArray[0].name} exercises={props.partArray[0].exercises} />
      <Part part={props.partArray[1].name} exercises={props.partArray[1].exercises} />
      <Part part={props.partArray[2].name} exercises={props.partArray[1].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log("Total props" + {props})
  return ( 
    <div>
      <p> Total Exercises: {props.partArray[0].exercises + props.partArray[1].exercises + props.partArray[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content partArray={course.parts} />
      <Total partArray = {course.parts} />
    </div>
  )
}

export default App