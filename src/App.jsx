//https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  let jsx
  if (loading) {
    jsx = <h2>Loading...</h2>
  } else {
    jsx = JSON.stringify(users)
  }
  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  )
}

export default App
