import { useState } from 'react'

const INITIAL_VALUE = ['A', 'B', 'C']

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter]
    })
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(INITIAL_VALUE)
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove first element</button>
      <br />
      <button onClick={() => removeSpecificLetter('B')}>Remove all B`s</button>
      <br />
      <button onClick={() => addLetterToStart('B')}>Add to start</button>
      <br />
      <button onClick={() => addLetterToEnd('Z')}>Add to end</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      {array.join(', ')}
    </div>
  )
}

export default App
