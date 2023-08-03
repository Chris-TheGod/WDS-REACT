import { useState } from 'react'

const INITIAL_VALUE = ['A', 'B', 'C']

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState('')

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

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === 'A') return 'H'
        return element
      })
    })
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [currentArray.slice(0, index), letter, currentArray.slice(index)]
    })
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
      <button onClick={updateAToH}>Uptade A to H</button>
      <br />
      <button onClick={() => addLetterAtIndex('C', 2)}>Add C at 2</button>
      <br />
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add Value To Array
      </button>

      <br />
      {array.join(', ')}
    </div>
  )
}

export default App
