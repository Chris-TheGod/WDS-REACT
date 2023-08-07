import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_COUNT: 'CHANGE_COUNT',
}

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.RESET:
      return 0
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.value
    default:
      return count
  }
}

export const Counter = ({ initialCount = 0 }) => {
  const [count, dispatch] = useReducer(reducer, initialCount)

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>RESET</button>
      <br />
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }>
        +5
      </button>
    </div>
  )
}
