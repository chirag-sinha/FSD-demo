import React from 'react'
import MovieList from './MovieList'

const App = () => {
  return (
    <div>
      <h1 
      style={{backgroundColor:"black",
        color:"white",
        fontsize:"40px",
        textAlign:"center",
      }}
      >
        Netflix Clone App</h1>
        
        <MovieList />
        </div>
  )
}

export default App