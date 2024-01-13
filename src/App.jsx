// import { useState, useEffect } from "react";
import Movies from "./components/Movies"
import useMovies from "./hooks/useMovies"
import useSearch from "./hooks/useSearch";

function App() {
  const { inputData, useInputData, error } = useSearch();
  const { mappedMovies } = useMovies(inputData);
  
  const handleSubmit = (event) => {
    event.preventDefault()
    useInputData(inputData)
  }

  const handleChangeInput = (eventData) => {
    const dataInput = eventData.target.value;
    useInputData(dataInput)
  }


  return (
    <>
      <h1 className="font-bold text-aztec-50 text-center">Buscador de Peliculas</h1>
      <header className="flex justify-center items-center">
        <form className=" flex flex-row gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movies"
            onChange={handleChangeInput}
            value={inputData}
            name="movie"
            className="py-2 px-2 rounded-md" />
          <button
            type="submit"
            className="px-4 py-2 bg-aztec-700 hover:bg-aztec-600 transition-all duration-300 rounded-md text-aztec-200">Search</button>
        </form>
      </header>
      {error && <h3 className="text-center text-xs text-red-300 mt-2">{error}</h3>}
      <main className="max-w-[1300px] w-screen text-center text-aztec-50 text-lg my-6 mx-auto">
        <Movies movies={mappedMovies} />
      </main>
    </>
  )
}

export default App
