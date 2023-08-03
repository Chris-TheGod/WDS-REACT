import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleMinusClick = () => setAge(age - 1)
  const handlePlusClick = () => setAge(age + 1)

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleMinusClick}>-</button>
      The age is: {age}
      <button onClick={handlePlusClick}>+</button>
      <br />
      <div>
        The name is: {name} and the age is: {age}
      </div>
    </>
  )
}

export default App
