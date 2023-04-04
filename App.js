import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

const MostVotes = (props) => {
  const copy = [...props.vote]
  var result = copy.indexOf(Math.max(...copy))

  return (
    <div>
      {props.anecdotes[result]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  var initialarray = Array(6).fill(0)
  const [vote, setVote] = useState(initialarray)
  const Vote =() => {
    const points = [...vote]
    points[selected]+=1
    setVote(points)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display name={anecdotes[selected]} />
      <Display name={"has " + vote[selected] + " votes"} />
      <Button handleClick={() => Vote(selected)} text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <MostVotes vote={vote} anecdotes={anecdotes}/>
    </div>
  )
}

export default App