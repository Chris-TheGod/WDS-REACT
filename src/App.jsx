//https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from 'react'
import { User } from './User'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false)
      })

    return () => controller.abort
  }, [])

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users != null &&
            users.map((user) => {
              return <User key={user.id} name={user.name} />
            })}
        </ul>
      )}
    </>
  )
}

export default App
