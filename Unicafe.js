import { useState } from 'react'

const Title = props => <h1>{props.title}</h1>

const StatisitcLine = (props) => {
  return (
    <tr>
      <td>{props.text} </td><td> {props.value} </td>
    </tr>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  )
  
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = props.good / all

  if (props.good == 0 & props.neutral == 0 & props.bad == 0) return (<div> <p>No feedback given</p></div>)

  return(
    <div>
      <table>
        <tbody>
          <StatisitcLine text="good" value={props.good} />
          <StatisitcLine text="neutral" value={props.neutral} />
          <StatisitcLine text="neutral" value={props.neutral} />
          <StatisitcLine text="bad" value={props.bad} />
          <tr><td>all</td><td> {all}</td></tr>
          <tr><td>average</td><td> {average}</td></tr>
          <tr><td>positive</td><td> {positive}%</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
