import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostPopularQuote = ({anecdotes, voteArray}) => {
    // <h1> Anecdote with most votes </h1>

    // find the index of the max value
    const maxVal = Math.max(...voteArray)
    const maxIndex = voteArray.indexOf(maxVal)
    const quote = anecdotes[maxIndex]

    return (
      <div>
        <p> {quote} </p>
        <p>has {maxVal} votes!</p>
      </div>
    )
  }


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]



 const [selected, setSelected] = useState(0)
 const [voteArray, setVoteArray] = useState(Array(anecdotes.length).fill(0))

 const handleNextClick = () => {
          const randomNum = Math.floor(Math.random() * anecdotes.length);
          setSelected(randomNum)
 }
 const handleVoteClick = () => {
          const copy = [...voteArray]
          copy[selected] += 1
          setVoteArray(copy)
 }
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>this quote has {voteArray[selected]} votes!</p>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleNextClick} text='next' />
      <h1>Anecdote with the most votes</h1>
      <MostPopularQuote anecdotes={anecdotes} voteArray={voteArray}/>
    </div>
  )
}

export default App