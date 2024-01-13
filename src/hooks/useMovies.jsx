import { useState, useEffect } from "react"
// import moviesData from "../data/results.json"
// import dontMovie from '../data/no-result.json'

function useMovies({ search }) {
    const KEY = '55e7cd96'
    const [data, useData] = useState([])

    async function fetchData(KEY) {
        const respons = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=radio`)
        const json = await respons.json()
        useData(json.Search)
    }
    fetchData(KEY)
    const mappedMovies = data?.map(({ Title, Year, imdbID, Poster }) => (
        {
            id: imdbID,
            poster: Poster,
            year: Year,
            title: Title
        }
    ))
    return { mappedMovies }
}

export default useMovies