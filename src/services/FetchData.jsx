import { useState, useEffect } from "react"

function FetchData(search) {
    const KEY = '55e7cd96'
    const URLFETCH = `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`
    const [data, useData] = useState([])

    useEffect(() => {
        fetch(URLFETCH)
            .then((respons) => respons.json())
            .then((data) => useData(data))
    }, [])

    return { data }
}

export default FetchData