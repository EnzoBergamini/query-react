import { useQuery } from '@tanstack/react-query'


function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
}


function App() {

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h1>Todos</h1>
          <ul>
            {data.map((todo: any) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
